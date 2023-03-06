import { CreateLabelRequest, CreateLabelResponse } from "@shipengine/connect-carrier-api";
import { processApiRequest } from "../../api/api-communicator";
import { CreateLabelApiResponse } from "../../api/models/create-label-api-response";
import { GlobalPostCreateLabelRequest } from "./gp-create-label-request";
import { mapRequest } from "./map-request";
import { mapResponse } from "./map-response";
import { validate } from "./validate";

export const CreateLabel = async (request: CreateLabelRequest): Promise<CreateLabelResponse> => {
    const createLabelRequest = request as GlobalPostCreateLabelRequest;
    const labelFormat = validate(createLabelRequest);
    const thirdPartyRequest = mapRequest(createLabelRequest, labelFormat);
    const response = await processApiRequest<CreateLabelApiResponse>(thirdPartyRequest);
    const mappedResponse = mapResponse(response, createLabelRequest, labelFormat);
    return mappedResponse;
}
