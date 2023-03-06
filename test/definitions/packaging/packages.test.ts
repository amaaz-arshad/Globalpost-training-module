import { PackageAttribute, RequiredToShipEnum } from "@shipengine/connect-carrier-api";
import { Packages } from '../../../src/definitions/packaging'

describe("Check Packages package definitions properties", () => {
    test("Check Id", () => {
        const result = Packages.Id;
        expect(result).toBe("c3e7b97e-7be4-4589-9df9-77fef70f9e05");
    });

    test("Check Name", () => {
        const result = Packages.Name;
        expect(result).toBe("Packages");
    });

    test("Check CarrierPackageTypeCode", () => {
        const result = Packages.CarrierPackageTypeCode;
        expect(result).toBe("package-packaging");
    });

    test("Check Description", () => {
        const result = Packages.Description;
        expect(result).toBe("Package(s)");
    });

    test("Check PackageAttributes", () => {
        const result = Packages.PackageAttributes;
        expect(result).toStrictEqual([PackageAttribute.International]);
    });

    test("Check RequiredToShip", () => {
        const result = Packages.RequiredToShip;
        expect(result).toStrictEqual([RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]);
    });
});
