import { TrackingIdentifier, TrackingRequest } from "@shipengine/connect-carrier-api";
import { BaseApiRequest } from "../../api/base-api-request";
import { ParamsObj } from "../../api/models/track-api-request";
import { BASE_URL, CarrierApiOperation, TRACK_ENDPOINT } from "../../helpers/constants";
import { getUrl } from "../../helpers/utils";

export const mapRequest = (
    request: TrackingRequest
): BaseApiRequest => {
    return {
        method: "GET",
        url: getUrl(BASE_URL, TRACK_ENDPOINT),
        operationName: CarrierApiOperation.Track,
        params: getParams(request)
    };
};

const getParams = (request: TrackingRequest): ParamsObj => {
    const trackingId = getId(request.identifiers, "tracking_number") ?? "";
    const transactionId = getId(request.identifiers, "carrier_transaction_id");
    if (transactionId) {
        return {
            trackingNumber: trackingId,
            shipment_ids: trackingId,
            transaction_ids: transactionId
        }
    }
    return {
        trackingNumber: trackingId,
        shipment_ids: trackingId,
    }
}

const getId = (identifiers: TrackingIdentifier[], identifierType: string): string => {
    return identifiers?.find((identifier) => identifier.type === identifierType)?.value;
}