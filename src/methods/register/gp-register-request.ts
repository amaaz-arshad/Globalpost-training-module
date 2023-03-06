import { RegisterRequest } from "@shipengine/connect-carrier-api";
import { RegistrationInfo } from "../../helpers/internal-models";

export interface GlobalPostRegisterRequest extends RegisterRequest {
  registration_info: RegistrationInfo;
}
