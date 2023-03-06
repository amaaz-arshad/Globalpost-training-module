import { CreateLabelRequest } from "@shipengine/connect-carrier-api";
import { Metadata } from "../../helpers/internal-models";

export interface GlobalPostCreateLabelRequest extends CreateLabelRequest {
  metadata?: Metadata;
}
