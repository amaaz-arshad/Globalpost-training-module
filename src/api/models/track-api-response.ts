import { ErrorObj, MultipleErrors, SingleError } from "./common-api"

export interface TrackApiResponse {
    tracking_results: TrackingResults[]
    errors: SingleError[] | MultipleErrors
}

export interface TrackingResults {
    shipment_id: string
    tracking_number: string
    transaction_id: string
    service: string
    ship_date: string
    estimated_delivery_date: string
    destination: ApiLocation
    status_code: string,
    status_description: null,
    tracking_history: TrackingHistory[]
    error: SingleError | ErrorObj
}

export interface TrackingHistory {
    event_time: string
    event_code: string
    event_description: string
    event_location: ApiLocation
}

export interface ApiLocation {
    city: string
    state: string
    province: string
    postal_code: string
    country: string
}