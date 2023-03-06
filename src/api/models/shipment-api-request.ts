import { ApiBaseAddress, ApiCustomsItem, ApiOrder, ApiPackage } from "./common-api"

export interface ShipmentApiRequest {
    return?: ApiBaseAddress
    from: ApiRequestAddress
    to: ApiRequestAddress
    package: ApiPackage
    order?: ApiOrder
    customs: ApiRequestCustoms
    insurance_amount?: number
    service: string
    TestLabelFlag?: boolean
}

export interface ApiRequestAddress extends ApiBaseAddress {
    address_line1: string
    city: string
    postal_code: string
    country: string
}

export interface ApiRequestCustoms {
    contents: string
    non_delivery?: string
    description?: string
    customs_items: ApiCustomsItem[]
}





