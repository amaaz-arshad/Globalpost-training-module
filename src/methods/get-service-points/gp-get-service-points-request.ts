import { GetServicePointsRequest } from "@shipengine/connect-carrier-api";
import { Metadata } from "../../helpers/internal-models";

export interface GlobalPostGetServicePointsRequest extends GetServicePointsRequest {
    metadata?: Metadata;
}
