export interface RegisterApiRequest {
    username: string,
    password: string,
    address?: Address
}

interface Address {
    address_hash?: string,
    name?: string,
    company?: string,
    address_line1?: string,
    address_line2?: string,
    address_line3?: string,
    city?: string,
    state?: string,
    country?: string,
    province?: string,
    phone?: string,
    email?: string,
    postal_code?: string,
    postal_code_addon?: string
}
