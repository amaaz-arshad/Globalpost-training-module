export interface GetServicePointsByAddressApiRequest {
    accountNumber: string
    password: string
    address: string[]
    zipCode: string
    city: string
    countryCode: string
    type: string
    service: string
    shippingDate: string
    maxPointChronopost: number
    maxDistanceSearch: number
}

export interface GetServicePointsByLatLongApiRequest {
    accountNumber: string
    password: string
    coordGeoLatitude: number
    coordGeoLongitude: number
    type: string
    service: string
    shippingDate: string
    maxPointChronopost: number
    maxDistanceSearch: number
}