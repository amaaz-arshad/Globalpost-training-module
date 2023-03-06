import { VoidLabelsRequest } from "@shipengine/connect-carrier-api";
import { Metadata } from "../../helpers/internal-models";

export interface GlobalPostVoidLabelsRequest extends VoidLabelsRequest {
    metadata?: Metadata;
}
