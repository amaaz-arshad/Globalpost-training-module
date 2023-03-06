import { BaseApiRequest } from "../../api/base-api-request";
import { BASE_URL, CarrierApiOperation, GET_RATES_ENDPOINT } from "../../helpers/constants";
import { checkServiceCode, getCredentialsBase64, getFirstLegType, getShipmentRequestData, getUrl } from "../../helpers/utils";
import { GlobalPostGetRatesRequest } from "./gp-get-rates-request";

export const mapRequest = (
    request: GlobalPostGetRatesRequest
): BaseApiRequest => {
    return {
        method: "POST",
        url: getUrl(BASE_URL, GET_RATES_ENDPOINT),
        operationName: CarrierApiOperation.GetRates,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${getCredentialsBase64(request.metadata)}`,
        },
        params: {
            first_leg_type: getFirstLegType(request.service_code),
            service: checkServiceCode(request.service_code),
            debugFlag: false,
        },
        data: getShipmentRequestData(request, CarrierApiOperation.GetRates)
    };
};
