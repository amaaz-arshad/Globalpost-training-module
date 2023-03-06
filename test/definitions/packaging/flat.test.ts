import { PackageAttribute, RequiredToShipEnum } from "@shipengine/connect-carrier-api";
import { Flat } from '../../../src/definitions/packaging'

describe("Check Flat package definitions properties", () => {
    test("Check Id", () => {
        const result = Flat.Id;
        expect(result).toBe("8f8865d5-1b77-4bf1-8585-886efbaf5205");
    });

    test("Check Name", () => {
        const result = Flat.Name;
        expect(result).toBe("Flat");
    });

    test("Check CarrierPackageTypeCode", () => {
        const result = Flat.CarrierPackageTypeCode;
        expect(result).toBe("flat-packaging");
    });

    test("Check Description", () => {
        const result = Flat.Description;
        expect(result).toBe("Flat");
    });

    test("Check PackageAttributes", () => {
        const result = Flat.PackageAttributes;
        expect(result).toStrictEqual([PackageAttribute.International]);
    });

    test("Check RequiredToShip", () => {
        const result = Flat.RequiredToShip;
        expect(result).toStrictEqual([RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]);
    });
});
