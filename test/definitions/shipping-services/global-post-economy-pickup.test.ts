import { GlobalPostEconomyPickup } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Economy | Pickup service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostEconomyPickup.Id;
        expect(result).toBe("bdb1245e-a3c3-498a-b78a-04e7f3b8a728");
    });

    test("Check Name", () => {
        const result = GlobalPostEconomyPickup.Name;
        expect(result).toBe("GlobalPost Economy | Pickup");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostEconomyPickup.Abbreviation;
        expect(result).toBe("GPEconomyPU");
    });

    test("Check Code", () => {
        const result = GlobalPostEconomyPickup.Code;
        expect(result).toBe("gp_economy_pu");
    });

    test("Check International", () => {
        const result = GlobalPostEconomyPickup.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostEconomyPickup.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostEconomyPickup.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostEconomyPickup.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostEconomyPickup.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostEconomyPickup.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
