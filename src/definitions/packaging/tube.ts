import {
  PackageAttribute,
  PackageType,
  RequiredToShipEnum
} from '@shipengine/connect-carrier-api';

export const Tube: PackageType = {
  // DO NOT CHANGE THIS ID AFTER PUBLISHING
  Id: "94e559e5-a388-40fb-9a53-57d111284b38",
  Name: "Tube",
  CarrierPackageTypeCode: "tube-packaging",
  Description: "Tube",
  PackageAttributes: [
    PackageAttribute.International
  ],
  RequiredToShip: [RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions],
};
