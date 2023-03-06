import {
    PackageAttribute,
    PackageType,
    RequiredToShipEnum
} from '@shipengine/connect-carrier-api';

export const Flat: PackageType = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "8f8865d5-1b77-4bf1-8585-886efbaf5205",
    Name: "Flat",
    CarrierPackageTypeCode: "flat-packaging",
    Description: "Flat",
    PackageAttributes: [PackageAttribute.International],
    RequiredToShip: [RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions],
};
