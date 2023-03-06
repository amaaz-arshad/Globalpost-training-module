import { BaseApiRequest } from "../../api/base-api-request";
import { BASE_URL, CarrierApiOperation, GET_SERVICE_POINT_ENDPOINT, MethodName } from "../../helpers/constants";
import { getDataInXML, getUrl } from "../../helpers/utils";
import { GlobalPostGetServicePointRequest } from "./gp-get-service-point-request";
import { GetServicePointApiRequest } from "../../api/models/get-service-point-api-request";

export const mapRequest = (
    request: GlobalPostGetServicePointRequest
): BaseApiRequest => {
    return {
        method: "POST",
        url: getUrl(BASE_URL, GET_SERVICE_POINT_ENDPOINT),
        operationName: CarrierApiOperation.GetServicePoint,
        headers: {
            'Content-Type': 'application/xml'
        },
        data: getDataBody(request)
    };
};

function getDataBody(request: GlobalPostGetServicePointRequest): string {
    const { metadata } = request;
    const content: GetServicePointApiRequest = {
        accountNumber: metadata?.username,
        password: metadata?.password,
        identifiant: request.service_point_id,
        countryCode: request.country_code,
    };
    return getDataInXML(content, MethodName.ServicePointById);
}
