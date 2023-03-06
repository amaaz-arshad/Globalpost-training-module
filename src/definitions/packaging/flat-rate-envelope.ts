import {
    PackageAttribute,
    PackageType,
    RequiredToShipEnum
} from '@shipengine/connect-carrier-api';

export const FlatRateEnvelope: PackageType = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "c06b10dd-df0f-4866-86a7-d932bfb7eed2",
    Name: "Flat Rate Envelope",
    CarrierPackageTypeCode: "flat_rate_envelope-packaging",
    Description: "Flat Rate Envelope",
    PackageAttributes: [
        PackageAttribute.International
    ],
    RequiredToShip: [RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions],
};
