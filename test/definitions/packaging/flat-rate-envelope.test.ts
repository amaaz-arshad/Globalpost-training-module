import { PackageAttribute, RequiredToShipEnum } from "@shipengine/connect-carrier-api";
import { FlatRateEnvelope } from '../../../src/definitions/packaging'

describe("Check Flat Rate Envelope package definitions properties", () => {
    test("Check Id", () => {
        const result = FlatRateEnvelope.Id;
        expect(result).toBe("c06b10dd-df0f-4866-86a7-d932bfb7eed2");
    });

    test("Check Name", () => {
        const result = FlatRateEnvelope.Name;
        expect(result).toBe("Flat Rate Envelope");
    });

    test("Check CarrierPackageTypeCode", () => {
        const result = FlatRateEnvelope.CarrierPackageTypeCode;
        expect(result).toBe("flat_rate_envelope-packaging");
    });

    test("Check Description", () => {
        const result = FlatRateEnvelope.Description;
        expect(result).toBe("Flat Rate Envelope");
    });

    test("Check PackageAttributes", () => {
        const result = FlatRateEnvelope.PackageAttributes;
        expect(result).toStrictEqual([PackageAttribute.International]);
    });

    test("Check RequiredToShip", () => {
        const result = FlatRateEnvelope.RequiredToShip;
        expect(result).toStrictEqual([RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]);
    });
});
