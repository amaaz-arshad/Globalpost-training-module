import { IAddress } from "../../helpers/internal-models";

export interface ApiBaseAddress extends IAddress {
    address_line1?: string
}

export interface ApiPackage {
    type: string
    length?: number
    width?: number
    height?: number
    weight: number
    dimension_unit?: string
    weight_unit: string
}

export interface ApiResponseCustoms {
    contents?: string
    customs_items?: ApiCustomsItem[]
    country_requirements?: CountryRequirements
    license_number?: string
    certificate_number?: string
    invoice_number?: string
    description?: string
    non_delivery?: string
    internal_transaction_number?: number
}

interface CountryRequirements {
    buyer_tax_id: string
    passport_number: string
    passport_issue_date: string
    passport_expiry: string
}

export interface ApiCustomsItem {
    sku?: string
    item_value: string
    description: string
    quantity: number
    weight: number
    weight_unit: string
    hs_tariff?: string
    origin_country?: string
    url?: string
}

export interface ApiOrder {
    order_id?: string
}

export interface SingleError {
    error: ErrorObj
}

export interface MultipleErrors {
    errors: SingleError[]
}

export interface ErrorObj {
    error_code?: string
    error_description?: string
    error_detail?: string
}
