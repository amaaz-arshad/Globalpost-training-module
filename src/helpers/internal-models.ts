export interface Metadata {
    username?: string;
    password?: string;
    ticket?: string;
}

export interface RegistrationInfo extends IAddress {
    address_hash?: string
    address?: string
    postal_code_addon?: string
}

export interface IAddress {
    name?: string
    company?: string
    address_line2?: string
    address_line3?: string
    city?: string
    state?: string
    country?: string
    province?: string
    phone?: string
    email?: string
    postal_code?: string
}

export interface ErrorCodeAndMessage {
    message?: string;
    externalErrorCode?: string;
}

export interface DimensionObj {
    dimensions: {
        length: number
        width: number
        height: number
    },
    unit: string
}

export interface WeightObj {
    weight: number,
    unit: string
}
