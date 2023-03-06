import { TrackingRequest, TrackingResponse } from "@shipengine/connect-carrier-api";
import { processApiRequest } from "../../api/api-communicator";
import { TrackApiResponse } from "../../api/models/track-api-response";
import { mapRequest } from "./map-request";
import { mapResponse } from "./map-response";

export const Track = async (request: TrackingRequest): Promise<TrackingResponse> => {
    const thirdPartyRequest = mapRequest(request);
    const response = await processApiRequest<TrackApiResponse>(thirdPartyRequest);
    const mappedResponse = mapResponse(response);
    return mappedResponse;
}
