import { CarrierApiOperation } from "../../helpers/constants";
import { BaseApiRequest } from "../base-api-request";
import { CreateLabelResponse } from "./responses/create-label-response";
import { RegisterResponse } from "./responses/register-response";
import { TrackResponse } from "./responses/track-response";
import { GetRatesResponse } from "./responses/get-rates-response";
import { GetServicePointResponse } from "./responses/get-service-point-response";
import { GetServicePointsResponse } from "./responses/get-service-points-response";
import { VoidLabelsResponse } from "./responses/void-labels-response";

export const processApiRequest = async (requestObj: BaseApiRequest) => {
  switch (requestObj.operationName) {
    case CarrierApiOperation.Register:
      return RegisterResponse.data;
    case CarrierApiOperation.CreateLabel:
      return CreateLabelResponse.data;
    case CarrierApiOperation.Track:
      return TrackResponse.data;
    case CarrierApiOperation.GetRates:
      return GetRatesResponse.data;
    case CarrierApiOperation.GetServicePoint:
      return GetServicePointResponse.data;
    case CarrierApiOperation.GetServicePoints:
      return GetServicePointsResponse.data;
    case CarrierApiOperation.VoidLabels:
      return VoidLabelsResponse.data;
  }
};