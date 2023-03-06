import { GetServicePointRequest } from "@shipengine/connect-carrier-api";
import { Metadata } from "../../helpers/internal-models";

export interface GlobalPostGetServicePointRequest extends GetServicePointRequest {
    metadata?: Metadata;
}
