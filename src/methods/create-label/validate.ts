import { DocumentFormat, LabelLayouts } from "@shipengine/connect-carrier-api";
import { BadRequestError } from "@shipengine/connect-runtime";
import { GlobalPostCreateLabelRequest } from "./gp-create-label-request";

export const validate = (request: GlobalPostCreateLabelRequest) => {
  if (request.ship_from?.country_code?.toUpperCase() !== "US") {
    throw new BadRequestError("Shipping allowed from US only.");
  }

  if (request.label_layout !== LabelLayouts.FourBySix) {
    throw new BadRequestError("Only '4x6' label size is supported.");
  }

  const labelFormat = request.label_format?.toUpperCase() as DocumentFormat;

  if (Object.values(DocumentFormat).includes(labelFormat))
    return labelFormat;

  return DocumentFormat.Pdf;

  // request.label_format = request.label_format?.toUpperCase() as DocumentFormat;
  // if (Object.values(DocumentFormat).includes(request.label_format))
  //   return request;

  // request.label_format = DocumentFormat.Pdf
  // return request

  // const len = GlobalPostCarrier.DefaultSupportedCountries.length;
  // const countryFound = GlobalPostCarrier.DefaultSupportedCountries.find(
  //   (c) => c.FromCountry === request?.ship_from?.country_code
  // );

  // const labelFormatSupported = GlobalPostCarrier.LabelFormats.find(
  //   (format) => format === "" + request?.label_format
  // );

  //   const labelSizeMatched = GlobalPostCarrier.DefaultLabelSizes.find(
  //     (size) =>
  //       size.endsWith(request?.label_layout) && request?.label_layout.length === 3
  //   );

  // if (!labelFormatSupported) {
  //   throw new BadRequestError("Label format must be PDF, ZPL OR PNG.");
  // }
};
