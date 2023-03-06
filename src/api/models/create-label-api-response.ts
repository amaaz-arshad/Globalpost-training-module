import { ApiBaseAddress, ApiOrder, ApiPackage, ApiResponseCustoms, MultipleErrors, SingleError, } from "./common-api"

export interface CreateLabelApiResponse {
    shipment_id: string
    tracking_number: string
    total_amount?: number
    currency?: string
    label: string[]
    shipment?: ApiShipment
    errors?: SingleError[] | MultipleErrors
}

interface ApiShipment {
    from?: ApiResponseAddress
    return?: ApiResponseAddress
    to?: ApiResponseAddress
    package?: ApiPackage
    order?: ApiResponseOrder
    insurance_amount?: number
    service?: string
    ship_date?: string
    customs?: ApiResponseCustoms
}

export interface ApiResponseAddress extends ApiBaseAddress {
    address_hash?: string
    postal_code_addon?: string
}

interface ApiResponseOrder extends ApiOrder {
    cost_code?: string
}

