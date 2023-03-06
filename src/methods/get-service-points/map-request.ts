import { BaseApiRequest } from "../../api/base-api-request";
import { BASE_URL, CarrierApiOperation, GET_SERVICE_POINTS_ENDPOINT, MethodName } from "../../helpers/constants";
import { getCurrentDate, getDataInXML, getSearchRadius, getUrl } from "../../helpers/utils";
import { GlobalPostGetServicePointsRequest } from "./gp-get-service-points-request";
import { GetServicePointsByAddressApiRequest, GetServicePointsByLatLongApiRequest } from "../../api/models/get-service-points-api-request";

export const mapRequest = (
    request: GlobalPostGetServicePointsRequest
): BaseApiRequest => {
    return {
        method: "POST",
        url: getUrl(BASE_URL, GET_SERVICE_POINTS_ENDPOINT),
        operationName: CarrierApiOperation.GetServicePoints,
        headers: {
            'Content-Type': 'application/xml'
        },
        data: request.address?.geo ? getDataBodyForLatLong(request) : getDataBodyForAddress(request)
    };
};

function getDataBodyForLatLong(request: GlobalPostGetServicePointsRequest): string {
    const { metadata, address } = request;
    const content: GetServicePointsByLatLongApiRequest = {
        accountNumber: metadata?.username,
        password: metadata?.password,
        coordGeoLatitude: address.geo.lat,
        coordGeoLongitude: address.geo.long,
        type: "T",
        service: "T",
        shippingDate: getCurrentDate(),
        maxPointChronopost: request.max_results,
        maxDistanceSearch: getSearchRadius(request.search_radius)
    };
    return getDataInXML(content, MethodName.ServicePointsByLatLong);
}

function getDataBodyForAddress(request: GlobalPostGetServicePointsRequest): string {
    const { metadata, address } = request;
    const content: GetServicePointsByAddressApiRequest = {
        accountNumber: metadata?.username,
        password: metadata?.password,
        address: address?.address_lines ?? [],
        zipCode: address?.postal_code,
        city: address?.city_locality,
        countryCode: address?.country_code ?? "",
        type: "T",
        service: "T",
        shippingDate: "",
        maxPointChronopost: request.max_results,
        maxDistanceSearch: getSearchRadius(request.search_radius)
    };
    return getDataInXML(content, MethodName.ServicePointsByAddress);
}
