import { RegisterResponse } from "@shipengine/connect-carrier-api";
import { generateTicket } from "../../helpers/utils";

export const mapResponse = (name: string, username: string, password: string): RegisterResponse => {
  return {
    credentials: {
      username: username ?? "",
      password
    },
    metadata: {
      username: username ?? "",
      password,
      ticket: generateTicket(name, username, password)
    },
  };
};
