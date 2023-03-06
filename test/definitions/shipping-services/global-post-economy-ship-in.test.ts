import { GlobalPostEconomyShipIn } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Economy | Ship In service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostEconomyShipIn.Id;
        expect(result).toBe("1816a7b4-86eb-4bd9-8524-c0accbea57dc");
    });

    test("Check Name", () => {
        const result = GlobalPostEconomyShipIn.Name;
        expect(result).toBe("GlobalPost Economy | Ship-In");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostEconomyShipIn.Abbreviation;
        expect(result).toBe("GPEconomySI");
    });

    test("Check Code", () => {
        const result = GlobalPostEconomyShipIn.Code;
        expect(result).toBe("gp_economy_si");
    });

    test("Check International", () => {
        const result = GlobalPostEconomyShipIn.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostEconomyShipIn.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostEconomyShipIn.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostEconomyShipIn.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostEconomyShipIn.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostEconomyShipIn.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
