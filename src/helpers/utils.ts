import {
  AddressBase,
  DimensionDetails,
  DimensionUnit,
  Package,
  WeightDetails,
  WeightUnit
} from "@shipengine/connect-carrier-api";
import { ApiCustomsItem, SingleError } from "../api/models/common-api";
import {
  ApiRequestAddress,
  ShipmentApiRequest
} from "../api/models/shipment-api-request";
import { GlobalPostCarrier } from "../definitions/global-post";
import {
  GlobalPostEconomyPickup,
  GlobalPostEconomyShipIn,
  GlobalPostEconomySinglePiece,
  GlobalPostPlusPickup,
  GlobalPostPlusShipIn,
  GlobalPostPlusSinglePiece,
  GlobalPostStandardPickup,
  GlobalPostStandardShipIn,
  GlobalPostStandardSinglePiece
} from "../definitions/shipping-services";
import { GlobalPostCreateLabelRequest } from "../methods/create-label/gp-create-label-request";
import {
  AES_IV,
  AES_SECRET_KEY,
  CarrierApiOperation,
  SERVICE_POINTS_NAMESPACE,
  MethodName,
  SOAPENV_XML_NAMESPACE,
  VOID_LABELS_NAMESPACE
} from "./constants";
import {
  DimensionObj,
  ErrorCodeAndMessage,
  Metadata,
  WeightObj
} from "./internal-models";
import crypto from "crypto";
import { SearchRadiusUnit } from "@shipengine/connect-carrier-api/lib/models/service-points/search-radius-unit";
import convert from "xml-js";
import { ExternalServerError } from "@shipengine/connect-runtime";
import { GetServicePointsApiResponse } from "../api/models/get-service-points-api-response";
import { SearchRadius } from "@shipengine/connect-carrier-api/lib/models/service-points/search-radius";
import { GetServicePointApiRequest } from "../api/models/get-service-point-api-request";
import {
  GetServicePointsByLatLongApiRequest,
  GetServicePointsByAddressApiRequest
} from "../api/models/get-service-points-api-request";
import { VoidLabelsApiRequest } from "../api/models/void-labels-api-request";
import { VoidLabelsApiResponse } from "../api/models/void-labels-api-response";

export const getUrl = (baseUrl: string, endPoint: string): string => {
  baseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${baseUrl}${endPoint}`;
};

export const getErrorMessage = (err: any, endPoint: string = ""): string => {
  const errmsg = err.message || err.errorMessage?.text || "";
  let status = (
    (err.response?.status ?? "") +
    " " +
    (err.response?.statusText ?? "")
  ).trim();
  status = status || err.errorCode?.text || "";
  return `Carrier API ${endPoint} request failed with ${
    status && `Status: '${status}', and `
  }Error: '${errmsg}'`;
};

export const getErrorDetails = (
  err: any
): ErrorCodeAndMessage | ErrorCodeAndMessage[] => {
  if (err.errorMessage?.text) {
    return {
      externalErrorCode: err.errorCode?.text ?? "",
      message: err.errorMessage.text
    };
  } else if (err.response?.data?.errors) {
    const details = [];
    const errors = err.response.data.errors;
    errors.forEach((errObj: SingleError) => {
      if (errObj?.error) {
        const { error } = errObj;
        details.push({
          externalErrorCode: error.error_code,
          message: `${error.error_description ?? ""} ${
            error.error_detail ?? ""
          }`.trim()
        });
      }
    });
    return details;
  } else if (err.response?.data?.error) {
    const error = err.response.data.error;
    return {
      externalErrorCode: error.error_code,
      message: `${error.error_description ?? ""} ${
        error.error_detail ?? ""
      }`.trim()
    };
  }
  return null;
};

export const getFirstLegType = (service_code: string): string => {
  if (!service_code) return "";
  service_code = service_code.toLowerCase();

  if (
    service_code === GlobalPostEconomyPickup.Code ||
    service_code === GlobalPostPlusPickup.Code ||
    service_code === GlobalPostStandardPickup.Code
  ) {
    return "Pickup";
  } else if (
    service_code === GlobalPostEconomyShipIn.Code ||
    service_code === GlobalPostPlusShipIn.Code ||
    service_code === GlobalPostStandardShipIn.Code
  ) {
    return "ship-in";
  } else if (
    service_code === GlobalPostEconomySinglePiece.Code ||
    service_code === GlobalPostPlusSinglePiece.Code ||
    service_code === GlobalPostStandardSinglePiece.Code
  ) {
    return "single_piece";
  }

  return "";
};

export const checkServiceCode = (service_code: string): string => {
  if (!service_code) return "";
  service_code = service_code.toLowerCase();
  const serviceCodeFound = GlobalPostCarrier.ShippingServices.find(
    (service) => service.Code === service_code
  );
  if (serviceCodeFound) {
    return service_code.slice(0, -3);
  }
  return "";
};

export const checkPackageCode = (package_code: string): string => {
  if (!package_code) return "";
  package_code = package_code.toLowerCase();
  const packageCodeFound = GlobalPostCarrier.PackageTypes.find(
    (packageType) => packageType.CarrierPackageTypeCode === package_code
  );
  if (packageCodeFound) {
    return package_code.split("-")[0];
  }
  return "";
};

export const getCredentialsBase64 = (metadata: Metadata): string => {
  const credentials =
    (metadata?.username ?? "") + ":" + (metadata?.password ?? "");
  return Buffer.from(credentials).toString("base64");
};

export const getDimensions = (
  dimensionDetails: DimensionDetails
): DimensionObj => {
  const dims = [0, 0, 0];
  let unit = "";

  if (!isEmpty(dimensionDetails)) {
    const {
      dimensions_in_centimeters,
      dimensions_in_inches,
      source_dimensions
    } = dimensionDetails;

    if (!isEmpty(dimensions_in_centimeters)) {
      dims[0] = dimensions_in_centimeters.length;
      dims[1] = dimensions_in_centimeters.width;
      dims[2] = dimensions_in_centimeters.height;
      unit = "cm";
    } else if (!isEmpty(dimensions_in_inches)) {
      dims[0] = dimensions_in_inches.length;
      dims[1] = dimensions_in_inches.width;
      dims[2] = dimensions_in_inches.height;
      unit = "in";
    } else if (!isEmpty(source_dimensions)) {
      dims[0] = source_dimensions.length;
      dims[1] = source_dimensions.width;
      dims[2] = source_dimensions.height;
      unit = getAbbreviatedDimensionUnit(
        dimensionDetails.source_dimension_unit
      );
    }
  }

  return {
    dimensions: {
      length: dims[0] ?? 0,
      width: dims[1] ?? 0,
      height: dims[2] ?? 0
    },
    unit
  };
};

export const getWeightDetails = (weightDetails: WeightDetails): WeightObj => {
  let weight = 0;
  let unit = "";

  if (!isEmpty(weightDetails)) {
    const { weight_in_grams, weight_in_ounces } = weightDetails;
    if (weight_in_grams) {
      weight = weight_in_grams;
      unit = "g";
    } else if (weight_in_ounces) {
      weight = weight_in_ounces;
      unit = "oz";
    } else {
      weight = weightDetails.source_weight ?? 0;
      unit = getAbbreviatedWeightUnit(weightDetails.source_weight_unit);
    }
  }

  return { weight, unit };
};

const getAbbreviatedDimensionUnit = (unit: string): string => {
  unit = unit?.toLowerCase();
  switch (unit) {
    case DimensionUnit.Centimeters:
      return "cm";
    case DimensionUnit.Inches:
      return "in";
    default:
      return "";
  }
};

const getAbbreviatedWeightUnit = (unit: string): string => {
  unit = unit?.toLowerCase();
  switch (unit) {
    case WeightUnit.Grams:
      return "g";
    case WeightUnit.Ounces:
      return "oz";
    case WeightUnit.Kilograms:
      return "kg";
    case WeightUnit.Pounds:
      return "lb";
    default:
      return "";
  }
};

export const getAddressBody = (shipping: AddressBase): ApiRequestAddress => {
  if (shipping)
    return {
      name: shipping.name ?? "",
      company: shipping.company_name ?? "",
      address_line1: shipping.address_lines?.[0] ?? "",
      address_line2: shipping.address_lines?.[1] ?? "",
      address_line3: shipping.address_lines?.[2] ?? "",
      city: shipping.city_locality ?? "",
      state: shipping.state_province ?? "",
      province: shipping.state_province ?? "",
      postal_code: shipping.postal_code ?? "",
      country: shipping.country_code ?? "",
      email: shipping.email ?? "",
      phone: shipping.phone_number ?? ""
    };
  return null;
};

export const getPackage = (firstPackage: Package) => {
  const requiredDimensions = getDimensions(firstPackage?.dimension_details);
  const weightDetails = getWeightDetails(firstPackage?.weight_details);
  return {
    type: checkPackageCode(firstPackage?.package_code),
    length: requiredDimensions.dimensions.length,
    width: requiredDimensions.dimensions.width,
    height: requiredDimensions.dimensions.height,
    weight: weightDetails.weight,
    dimension_unit: requiredDimensions.unit,
    weight_unit: weightDetails.unit
  };
};

export const getCustomsItems = (firstPackage: Package): ApiCustomsItem[] => {
  const customsItems = firstPackage?.customs?.customs_items;
  const contentsLength = customsItems?.length;
  const weightDetails = getWeightDetails(firstPackage?.weight_details);
  const calculatedWeight =
    weightDetails.weight && contentsLength
      ? weightDetails.weight / contentsLength
      : 0;
  const apiCustomsItems: ApiCustomsItem[] = [];

  customsItems?.forEach((item) => {
    apiCustomsItems.push({
      sku: item?.sku ?? "",
      item_value: item?.value?.amount ?? "",
      description: item?.description ?? "",
      quantity: item?.quantity ?? 0,
      weight: calculatedWeight,
      weight_unit: weightDetails.unit,
      hs_tariff: item?.harmonized_tariff_code ?? "",
      origin_country: item?.country_of_origin ?? ""
    });
  });
  return apiCustomsItems;
};

export const isEmpty = (value: unknown): boolean => {
  if (!value) {
    return true;
  } else if (Object.entries(value).length === 0) {
    return true;
  }
  return false;
};

export const getShipmentRequestData = (
  request: GlobalPostCreateLabelRequest,
  endPointName: CarrierApiOperation
): ShipmentApiRequest => {
  const firstPackage = request.packages?.[0];
  return {
    return:
      endPointName === CarrierApiOperation.CreateLabel
        ? getAddressBody(request.ship_from_display)
        : null,
    from: getAddressBody(request.ship_from),
    to: getAddressBody(request.ship_to),
    package: getPackage(firstPackage),
    order: {
      order_id:
        endPointName === CarrierApiOperation.CreateLabel
          ? request.reference ?? ""
          : null
    },
    customs: {
      contents: firstPackage?.customs?.contents ?? "",
      non_delivery: firstPackage?.customs?.non_delivery ?? "",
      description: firstPackage?.customs?.customs_items[0].description ?? "",
      customs_items: getCustomsItems(firstPackage)
    },
    insurance_amount: parseFloat(firstPackage?.insured_value?.amount) ?? 0,
    service: checkServiceCode(request.service_code),
    TestLabelFlag: false
  };
};

export const convertToISO = (strDate: string): string => {
  const date = new Date(strDate);
  if (!isNaN(date.getTime())) {
    return date.toISOString();
  }
  return "";
};

export const generateTicket = (
  name: string,
  username: string,
  password: string
): string => {
  const hashedPassword = crypto
    .createHash("sha1")
    .update(password)
    .digest("hex");
  const dateNow = new Date().toISOString().split("T")[0].split("-").join("");
  const concatStr = (name ?? "") + (username ?? "") + hashedPassword + dateNow;
  const encryptedString = encryptToAES256(concatStr);
  const result = encryptedString
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, ",");
  return result;
};

const encryptToAES256 = (str: string): string => {
  // createCipheriv function requires both secret key and iv
  // createCipher function requires only secret key
  const cipher = crypto.createCipheriv("aes-256-cbc", AES_SECRET_KEY, AES_IV);
  const encrypted = Buffer.concat([
    cipher.update(Buffer.from(str, "utf8")),
    cipher.final()
  ]);
  return encrypted.toString("base64");
};

export const getSearchRadius = (radius: SearchRadius): number => {
  if (!radius) return 0;
  const {
    radius_in_kilometers,
    radius_in_miles,
    source_radius,
    source_radius_unit
  } = radius;

  if (radius_in_kilometers) {
    return radius_in_kilometers;
  }
  if (radius_in_miles) {
    return convertRadiusToKm(radius_in_miles, SearchRadiusUnit.Miles);
  }
  if (source_radius) {
    return convertRadiusToKm(source_radius, source_radius_unit);
  }
  return 0;
};

export function convertRadiusToKm(radius: number, unit: string): number {
  switch (unit) {
    case SearchRadiusUnit.Miles:
      return radius * 1.6;
    case SearchRadiusUnit.Kilometers:
      return radius;
    default:
      return 0;
  }
}

export function getCurrentDate(): string {
  const date = new Date().toLocaleDateString().split("/");
  return date[1] + "/" + date[0] + "/" + date[2];
}

export function getDataInXML(
  content:
    | GetServicePointsByLatLongApiRequest
    | GetServicePointsByAddressApiRequest
    | GetServicePointApiRequest
    | VoidLabelsApiRequest,
  methodName: MethodName
): string {
  const body = {
    "soapenv:Envelope": {
      _attributes: {
        "xmlns:soapenv": SOAPENV_XML_NAMESPACE,
        "xmlns:cxf":
          methodName === MethodName.VoidLabels
            ? VOID_LABELS_NAMESPACE
            : SERVICE_POINTS_NAMESPACE
      },
      "soapenv:Header": null,
      "soapenv:Body": {
        [methodName]: content
      }
    }
  };
  const xml = convert.js2xml(body, { compact: true, spaces: 4 });
  return xml;
}

export const convertXMLToJS = (
  data: string,
  endPoint: CarrierApiOperation
): GetServicePointsApiResponse | VoidLabelsApiResponse => {
  const options = { compact: true, ignoreAttributes: true, textKey: "text", };
  const dataInJS = convert.xml2js(data, options);
  const responseBody = dataInJS?.["soap:Envelope"]?.["soap:Body"];
  const responseData = responseBody
    ? responseBody[MethodName.VoidLabelsResponse]?.return ||
      responseBody[MethodName.ServicePointByIdResponse]?.return ||
      responseBody[MethodName.ServicePointsByLatLongResponse]?.return ||
      responseBody[MethodName.ServicePointsByAddressResponse]?.return ||
      {}
    : {};
  if (
    responseData.errorCode?.text === "0" ||
    endPoint === CarrierApiOperation.VoidLabels
  ) {
    return responseData;
  }
  throw new ExternalServerError(
    getErrorMessage(responseData, endPoint),
    getErrorDetails(responseData)
  );
};
