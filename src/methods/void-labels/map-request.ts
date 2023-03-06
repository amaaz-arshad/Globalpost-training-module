import { VoidRequest } from "@shipengine/connect-carrier-api";
import { BaseApiRequest } from "../../api/base-api-request";
import { VoidLabelsApiRequest } from "../../api/models/void-labels-api-request";
import { BASE_URL, CarrierApiOperation, MethodName, VOID_LABELS_ENDPOINT } from "../../helpers/constants";
import { getDataInXML, getUrl } from "../../helpers/utils";
import { GlobalPostVoidLabelsRequest } from "./gp-void-labels-request";

export const mapRequest = (
    request: GlobalPostVoidLabelsRequest,
    trackingNumber: string,
): BaseApiRequest => {
    return {
        method: "POST",
        url: getUrl(BASE_URL, VOID_LABELS_ENDPOINT),
        operationName: CarrierApiOperation.VoidLabels,
        headers: {
            'Content-Type': 'application/xml'
        },
        data: getDataBody(request, trackingNumber)
    };
};

function getDataBody(request: GlobalPostVoidLabelsRequest, trackingNumber: string): string {
    const { metadata } = request;
    const content: VoidLabelsApiRequest = {
        accountNumber: metadata?.username,
        password: metadata?.password,
        language: "fr_FR",
        skybillNumber: trackingNumber,
    };
    return getDataInXML(content, MethodName.VoidLabels);
}