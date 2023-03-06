import { PackageAttribute, RequiredToShipEnum } from "@shipengine/connect-carrier-api";
import { SmallFlatRateBox } from '../../../src/definitions/packaging'

describe("Check Small Flat Rate Box package definitions properties", () => {
  test("Check Id", () => {
    const result = SmallFlatRateBox.Id;
    expect(result).toBe("2edde465-b8c4-4751-a967-81355ad359b8");
  });

  test("Check Name", () => {
    const result = SmallFlatRateBox.Name;
    expect(result).toBe("Small Flat Rate Box");
  });

  test("Check CarrierPackageTypeCode", () => {
    const result = SmallFlatRateBox.CarrierPackageTypeCode;
    expect(result).toBe("small_flat_rate_box-packaging");
  });

  test("Check Description", () => {
    const result = SmallFlatRateBox.Description;
    expect(result).toBe("Small Flat Rate Box");
  });

  test("Check PackageAttributes", () => {
    const result = SmallFlatRateBox.PackageAttributes;
    expect(result).toStrictEqual([PackageAttribute.International]);
  });

  test("Check RequiredToShip", () => {
    const result = SmallFlatRateBox.RequiredToShip;
    expect(result).toStrictEqual([RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]);
  });
});
