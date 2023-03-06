import {
    PackageAttribute,
    PackageType,
    RequiredToShipEnum
} from '@shipengine/connect-carrier-api';

export const LegalFlatRateEnvelope: PackageType = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "62c13825-9b8b-4ff8-80ba-a2315f61521a",
    Name: "Legal Flat Rate Envelope",
    CarrierPackageTypeCode: "legal_flat_rate_envelope-packaging",
    Description: "Legal Flat Rate Envelope",
    PackageAttributes: [
        PackageAttribute.International
    ],
    RequiredToShip: [RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions],
};
