import { PackageAttribute, RequiredToShipEnum } from "@shipengine/connect-carrier-api";
import { LegalFlatRateEnvelope } from '../../../src/definitions/packaging'

describe("Check Legal Flat Rate Envelope package definitions properties", () => {
    test("Check Id", () => {
        const result = LegalFlatRateEnvelope.Id;
        expect(result).toBe("62c13825-9b8b-4ff8-80ba-a2315f61521a");
    });

    test("Check Name", () => {
        const result = LegalFlatRateEnvelope.Name;
        expect(result).toBe("Legal Flat Rate Envelope");
    });

    test("Check CarrierPackageTypeCode", () => {
        const result = LegalFlatRateEnvelope.CarrierPackageTypeCode;
        expect(result).toBe("legal_flat_rate_envelope-packaging");
    });

    test("Check Description", () => {
        const result = LegalFlatRateEnvelope.Description;
        expect(result).toBe("Legal Flat Rate Envelope");
    });

    test("Check PackageAttributes", () => {
        const result = LegalFlatRateEnvelope.PackageAttributes;
        expect(result).toStrictEqual([PackageAttribute.International]);
    });

    test("Check RequiredToShip", () => {
        const result = LegalFlatRateEnvelope.RequiredToShip;
        expect(result).toStrictEqual([RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]);
    });
});
