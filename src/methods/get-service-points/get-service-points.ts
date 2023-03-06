import { GetServicePointsRequest, GetServicePointsResponse } from "@shipengine/connect-carrier-api";
import { processApiRequest } from "../../api/api-communicator";
import { GetServicePointsApiResponse } from "../../api/models/get-service-points-api-response";
import { convertXMLToJS } from "../../helpers/utils";
import { GlobalPostGetServicePointsRequest } from "./gp-get-service-points-request";
import { mapRequest } from "./map-request";
import { mapResponse } from "./map-response";

export const GetServicePoints = async (request: GetServicePointsRequest): Promise<GetServicePointsResponse> => {
    const getServicePointsRequest = request as GlobalPostGetServicePointsRequest;
    const thirdPartyRequest = mapRequest(getServicePointsRequest);
    const response = await processApiRequest<string>(thirdPartyRequest);
    const responseInJS = convertXMLToJS(response, thirdPartyRequest.operationName) as GetServicePointsApiResponse;
    const mappedResponse = mapResponse(responseInJS);
    return mappedResponse;
}