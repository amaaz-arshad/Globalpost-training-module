import { GetRatesRequest } from "@shipengine/connect-carrier-api";
import { Metadata } from "../../helpers/internal-models";

export interface GlobalPostGetRatesRequest extends GetRatesRequest {
    metadata?: Metadata;
}
