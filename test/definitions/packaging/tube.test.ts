import { PackageAttribute, RequiredToShipEnum } from "@shipengine/connect-carrier-api";
import { Tube } from '../../../src/definitions/packaging'

describe("Check Tube package definitions properties", () => {
  test("Check Id", () => {
    const result = Tube.Id;
    expect(result).toBe("94e559e5-a388-40fb-9a53-57d111284b38");
  });

  test("Check Name", () => {
    const result = Tube.Name;
    expect(result).toBe("Tube");
  });

  test("Check CarrierPackageTypeCode", () => {
    const result = Tube.CarrierPackageTypeCode;
    expect(result).toBe("tube-packaging");
  });

  test("Check Description", () => {
    const result = Tube.Description;
    expect(result).toBe("Tube");
  });

  test("Check PackageAttributes", () => {
    const result = Tube.PackageAttributes;
    expect(result).toStrictEqual([PackageAttribute.International]);
  });

  test("Check RequiredToShip", () => {
    const result = Tube.RequiredToShip;
    expect(result).toStrictEqual([RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]);
  });
});
