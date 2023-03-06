import { PackageAttribute, RequiredToShipEnum } from "@shipengine/connect-carrier-api";
import { PaddedFlatRateEnvelope } from '../../../src/definitions/packaging'

describe("Check Padded Flat Rate Envelope package definitions properties", () => {
    test("Check Id", () => {
        const result = PaddedFlatRateEnvelope.Id;
        expect(result).toBe("8bb1440c-f541-4414-97d6-9dd0ee37df15");
    });

    test("Check Name", () => {
        const result = PaddedFlatRateEnvelope.Name;
        expect(result).toBe("Padded Flat Rate Envelope");
    });

    test("Check CarrierPackageTypeCode", () => {
        const result = PaddedFlatRateEnvelope.CarrierPackageTypeCode;
        expect(result).toBe("padded_flat_rate_envelope-packaging");
    });

    test("Check Description", () => {
        const result = PaddedFlatRateEnvelope.Description;
        expect(result).toBe("Padded Flat Rate Envelope");
    });

    test("Check PackageAttributes", () => {
        const result = PaddedFlatRateEnvelope.PackageAttributes;
        expect(result).toStrictEqual([PackageAttribute.International]);
    });

    test("Check RequiredToShip", () => {
        const result = PaddedFlatRateEnvelope.RequiredToShip;
        expect(result).toStrictEqual([RequiredToShipEnum.Weight, RequiredToShipEnum.Dimensions]);
    });
});
