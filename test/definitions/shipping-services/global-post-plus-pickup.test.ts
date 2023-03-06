import { GlobalPostPlusPickup } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Plus | Pickup service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostPlusPickup.Id;
        expect(result).toBe("5b15505f-a83b-46b2-bfe3-c991f54f9636");
    });

    test("Check Name", () => {
        const result = GlobalPostPlusPickup.Name;
        expect(result).toBe("GlobalPost Plus | Pickup");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostPlusPickup.Abbreviation;
        expect(result).toBe("GPPlusPU");
    });

    test("Check Code", () => {
        const result = GlobalPostPlusPickup.Code;
        expect(result).toBe("gp_plus_pu");
    });

    test("Check International", () => {
        const result = GlobalPostPlusPickup.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostPlusPickup.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostPlusPickup.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostPlusPickup.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostPlusPickup.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostPlusPickup.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
