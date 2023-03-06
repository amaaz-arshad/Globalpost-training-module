import { GetServicePointRequest, GetServicePointResponse } from "@shipengine/connect-carrier-api";
import { processApiRequest } from "../../api/api-communicator";
import { GetServicePointsApiResponse } from "../../api/models/get-service-points-api-response";
import { convertXMLToJS } from "../../helpers/utils";
import { GlobalPostGetServicePointRequest } from "./gp-get-service-point-request";
import { mapRequest } from "./map-request";
import { mapResponse } from "./map-response";

export const GetServicePoint = async (request: GetServicePointRequest): Promise<GetServicePointResponse> => {
    const getServicePointsRequest = request as GlobalPostGetServicePointRequest;
    const thirdPartyRequest = mapRequest(getServicePointsRequest);
    const response = await processApiRequest<string>(thirdPartyRequest);
    const responseInJS = convertXMLToJS(response, thirdPartyRequest.operationName) as GetServicePointsApiResponse;
    const mappedResponse = mapResponse(responseInJS);
    return mappedResponse;
}