import { BaseApiRequest } from "../../api/base-api-request";
import { RegistrationInfo } from "../../helpers/internal-models";
import { BASE_URL, CarrierApiOperation, REGISTER_ENDPOINT } from "../../helpers/constants";
import { getUrl, isEmpty } from "../../helpers/utils";
import crypto from 'crypto'

export const mapRequest = (
  registrationInfo: RegistrationInfo,
): BaseApiRequest => {

  return {
    method: "POST",
    url: getUrl(BASE_URL, REGISTER_ENDPOINT),
    operationName: CarrierApiOperation.Register,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      username: crypto.randomUUID(),
      password: crypto.randomUUID(),
      address: getAddress(registrationInfo)
    },
  };
};

const getAddress = (regInfo: RegistrationInfo) => {
  if (isEmpty(regInfo)) {
    return null
  };

  return {
    address_hash: regInfo.address_hash,
    name: regInfo.name,
    company: regInfo.company,
    address_line1: regInfo.address,
    address_line2: regInfo.address_line2,
    address_line3: regInfo.address_line3,
    city: regInfo.city,
    state: regInfo.state,
    country: regInfo.country,
    province: regInfo.province,
    phone: regInfo.phone,
    email: regInfo.email,
    postal_code: regInfo.postal_code,
    postal_code_addon: regInfo.postal_code_addon,
  }
}
