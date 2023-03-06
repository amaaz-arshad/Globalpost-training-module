import { GetRatesRequest, GetRatesResponse } from "@shipengine/connect-carrier-api";
import { processApiRequest } from "../../api/api-communicator";
import { GetRatesApiResponse } from "../../api/models/get-rates-api-response";
import { GlobalPostGetRatesRequest } from "./gp-get-rates-request";
import { mapRequest } from "./map-request";
import { mapResponse } from "./map-response";


export const GetRates = async (request: GetRatesRequest): Promise<GetRatesResponse> => {
    const getRatesRequest = request as GlobalPostGetRatesRequest;
    const thirdPartyRequest = mapRequest(getRatesRequest);
    const response = await processApiRequest<GetRatesApiResponse>(thirdPartyRequest);
    const mappedResponse = mapResponse(getRatesRequest, response);
    return mappedResponse;
}
