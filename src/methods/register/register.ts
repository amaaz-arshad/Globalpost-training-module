import { RegisterRequest, RegisterResponse } from "@shipengine/connect-carrier-api";
import { processApiRequest } from "../../api/api-communicator";
import { RegisterApiRequest } from "../../api/models/register-api-request";
import { RegisterApiResponse } from "../../api/models/register-api-response";
import { GlobalPostRegisterRequest } from "./gp-register-request";
import { mapRequest } from "./map-request";
import { mapResponse } from "./map-response";

export const Register = async (request: RegisterRequest): Promise<RegisterResponse> => {
    const registerRequest = request as GlobalPostRegisterRequest;
    const regInfo = registerRequest.registration_info;
    const thirdPartyRequest = mapRequest(regInfo);
    const requestData = thirdPartyRequest.data as RegisterApiRequest;
    const response = await processApiRequest<RegisterApiResponse>(thirdPartyRequest);
    const mappedResponse = mapResponse(regInfo?.name, response?.username, requestData.password);
    return mappedResponse;
};
