import { VoidLabelsResponse, VoidResponse } from "@shipengine/connect-carrier-api";
import { VoidLabelsApiResponse } from "../../api/models/void-labels-api-response";
import { isEmpty } from "../../helpers/utils";
import { GlobalPostVoidLabelsRequest } from "./gp-void-labels-request";

export const mapResponse = (
    response: VoidLabelsApiResponse,
    voidRequestId: string
): VoidResponse => {
    const errorMsg = response.errorMessage;
    return {
        void_request_id: voidRequestId ?? "",
        message: response.errorCode?.text !== '0' ? "Void Failed" : "Success",
        errors: getErrors(errorMsg),
    }
}

function getErrors(errorMsg: { text: string; } | [{ text: string; }]): string[] {
    if (isEmpty(errorMsg)) return null;
    if (!Array.isArray(errorMsg)) {
        return [errorMsg.text];
    }
    const errorMessages: string[] = [];
    errorMsg.forEach(msg => {
        errorMessages.push(msg?.text ?? "");
    })
    return errorMessages;
}