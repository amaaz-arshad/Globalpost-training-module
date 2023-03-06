import {
    PackageAttribute,
    PackageType,
    RequiredToShipEnum
} from '@shipengine/connect-carrier-api';

export const PaddedFlatRateEnvelope: PackageType = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "8bb1440c-f541-4414-97d6-9dd0ee37df15",
    Name: "Padded Flat Rate Envelope",
    CarrierPackageTypeCode: "padded_flat_rate_envelope-packaging",
    Description: "Padded Flat Rate Envelope",
    PackageAttributes: [
        PackageAttribute.International
    ],
    RequiredToShip: [RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions],
};
