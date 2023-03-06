import {
  PackageAttribute,
  PackageType,
  RequiredToShipEnum,
} from '@shipengine/connect-carrier-api';

export const SmallFlatRateBox: PackageType = {
  // DO NOT CHANGE THIS ID AFTER PUBLISHING
  Id: "2edde465-b8c4-4751-a967-81355ad359b8",
  Name: "Small Flat Rate Box",
  CarrierPackageTypeCode: "small_flat_rate_box-packaging",
  Description: "Small Flat Rate Box",
  PackageAttributes: [PackageAttribute.International],
  RequiredToShip: [RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]
};
