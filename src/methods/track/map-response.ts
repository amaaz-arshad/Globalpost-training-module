import { StandardizedStatusCodes, TrackingResponse, TrackEvent } from "@shipengine/connect-carrier-api";
import { TrackApiResponse, TrackingHistory } from "../../api/models/track-api-response";
import { convertToISO } from "../../helpers/utils";

const trackingEvents = new Map([
    ["Shipment_tendered", StandardizedStatusCodes.Accepted],
    ["delivered", StandardizedStatusCodes.Delivered],
    ["in_transit", StandardizedStatusCodes.InTransit],
]);

export const mapResponse = (
    responseData: TrackApiResponse
): TrackingResponse => {
    const trackingResult = responseData?.tracking_results?.[0]
    return {
        tracking_info: {
            carrier_status_code: trackingResult?.status_code ?? "",
            carrier_status_description: trackingResult?.status_description ?? "",
            tracking_number: trackingResult?.tracking_number ?? "",
            standardized_status_code: mapStatusCode(trackingResult?.status_code),
            events: getEvents(trackingResult?.tracking_history)
        }
    };
};

const mapStatusCode = (code: string): StandardizedStatusCodes => {
    return trackingEvents.get(code) ?? StandardizedStatusCodes.Unknown;
};

const getEvents = (trackingHistory: TrackingHistory[]): TrackEvent[] => {
    const events: TrackEvent[] = [];
    trackingHistory?.forEach((history) => {
        const location = history?.event_location
        events.push({
            event_datetime_local: convertToISO(history?.event_time),
            event_code: history?.event_code ?? "",
            description: history?.event_description ?? "",
            status_code: mapStatusCode(history?.event_code),
            city: location?.city ?? "",
            state: location?.state ?? "",
            postal_code: location?.postal_code ?? "",
            country: location?.country ?? ""
        });
    });
    return events;
};