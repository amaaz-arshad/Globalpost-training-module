import { BaseApiRequest } from "../../api/base-api-request";
import { BASE_URL, CarrierApiOperation, CREATE_LABEL_ENDPOINT } from "../../helpers/constants";
import { getCredentialsBase64, getFirstLegType, getShipmentRequestData, getUrl } from "../../helpers/utils";
import { GlobalPostCreateLabelRequest } from "./gp-create-label-request";
import { DocumentFormat, LabelLayouts } from "@shipengine/connect-carrier-api";

export const mapRequest = (
    request: GlobalPostCreateLabelRequest,
    labelFormat: DocumentFormat
): BaseApiRequest => {
    return {
        method: "POST",
        url: getUrl(BASE_URL, CREATE_LABEL_ENDPOINT),
        operationName: CarrierApiOperation.CreateLabel,
        headers: {
            "Content-Type": "application/json",
            first_leg_type: getFirstLegType(request.service_code),
            messageid: request.transaction_id ?? "",
            account_balance: "1000",
            Authorization: `Basic ${getCredentialsBase64(request.metadata)}`,
        },
        params: {
            image_format: request.label_layout === LabelLayouts.Letter ? "8.5x11" : labelFormat,
            image_layout: request.label_layout ?? "",
            test: false,
            currency: request.packages?.[0]?.insured_value?.currency ?? ""
        },
        data: getShipmentRequestData(request, CarrierApiOperation.CreateLabel)
    };
};
