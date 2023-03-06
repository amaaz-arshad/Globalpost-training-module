import { GlobalPostPlusShipIn } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Plus | Ship In service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostPlusShipIn.Id;
        expect(result).toBe("1dba57f8-020b-4f8f-bb86-df75a1c356ad");
    });

    test("Check Name", () => {
        const result = GlobalPostPlusShipIn.Name;
        expect(result).toBe("GlobalPost Plus | Ship-In");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostPlusShipIn.Abbreviation;
        expect(result).toBe("GPPlusSI");
    });

    test("Check Code", () => {
        const result = GlobalPostPlusShipIn.Code;
        expect(result).toBe("gp_plus_si");
    });

    test("Check International", () => {
        const result = GlobalPostPlusShipIn.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostPlusShipIn.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostPlusShipIn.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostPlusShipIn.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostPlusShipIn.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostPlusShipIn.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
