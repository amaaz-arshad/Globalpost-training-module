import { VoidLabelsRequest, VoidLabelsResponse, VoidResponse } from "@shipengine/connect-carrier-api";
import { processApiRequest } from "../../api/api-communicator";
import { VoidLabelsApiResponse } from "../../api/models/void-labels-api-response";
import { convertXMLToJS, isEmpty } from "../../helpers/utils";
import { GlobalPostVoidLabelsRequest } from "./gp-void-labels-request";
import { mapRequest } from "./map-request";
import { mapResponse } from "./map-response";

export const VoidLabels = async (request: VoidLabelsRequest): Promise<VoidLabelsResponse> => {
    const voidLabelsRequest = request as GlobalPostVoidLabelsRequest;
    let voidLabelsResponse: VoidResponse[] = null;
    const voidRequests = voidLabelsRequest.void_requests;

    if (!isEmpty(voidRequests)) {
        voidLabelsResponse = [];
        for (const voidRequest of voidRequests) {
            if (!isEmpty(voidRequest)) {
                const thirdPartyRequest = mapRequest(voidLabelsRequest, voidRequest.tracking_number);
                const response = await processApiRequest<string>(thirdPartyRequest);
                const responseInJS = convertXMLToJS(response, thirdPartyRequest.operationName) as VoidLabelsApiResponse;
                const mappedResponse = mapResponse(responseInJS, voidRequest.void_request_id);
                voidLabelsResponse.push(mappedResponse);
            }
        }
    }

    return {
        void_responses: voidLabelsResponse
    };
}
