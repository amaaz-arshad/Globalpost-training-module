import {
    PackageAttribute,
    PackageType,
    RequiredToShipEnum
} from '@shipengine/connect-carrier-api';

export const Packages: PackageType = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "c3e7b97e-7be4-4589-9df9-77fef70f9e05",
    Name: "Packages",
    CarrierPackageTypeCode: "package-packaging",
    Description: "Package(s)",
    PackageAttributes: [PackageAttribute.International],
    RequiredToShip: [RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions],
};
