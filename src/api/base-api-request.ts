import { AxiosRequestConfig } from "axios";
import { CarrierApiOperation } from "../helpers/constants";
import { RegisterApiRequest } from "./models/register-api-request";
import { ShipmentApiRequest } from "./models/shipment-api-request";

export interface BaseApiRequest extends AxiosRequestConfig {
  operationName: CarrierApiOperation;
  data?: RegisterApiRequest | ShipmentApiRequest | string;
}
