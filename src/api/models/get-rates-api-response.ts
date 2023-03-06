import { ApiPackage, ApiResponseCustoms, MultipleErrors, SingleError } from "./common-api"

export interface GetRatesApiResponse {
    currency?: string,
    rates: ApiRates[]
    errors?: SingleError[] | MultipleErrors
}

interface ApiRates {
    service?: string
    price?: number
    delivery_days?: string
    delivery_date?: string
    package?: ApiPackage
    insurance?: ApiInsurance
    custom?: ApiResponseCustoms
}

interface ApiInsurance {
    price?: number
    amount_purchased?: number
    amount_included?: number
    amount_insured?: number
}