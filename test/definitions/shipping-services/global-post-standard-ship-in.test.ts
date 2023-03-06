import { GlobalPostStandardShipIn } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Standard | Ship In service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostStandardShipIn.Id;
        expect(result).toBe("89107a78-2486-47cb-a53c-ded930f8e1c0");
    });

    test("Check Name", () => {
        const result = GlobalPostStandardShipIn.Name;
        expect(result).toBe("GlobalPost Standard | Ship-In");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostStandardShipIn.Abbreviation;
        expect(result).toBe("GPStandardSI");
    });

    test("Check Code", () => {
        const result = GlobalPostStandardShipIn.Code;
        expect(result).toBe("gp_standard_si");
    });

    test("Check International", () => {
        const result = GlobalPostStandardShipIn.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostStandardShipIn.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostStandardShipIn.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostStandardShipIn.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostStandardShipIn.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostStandardShipIn.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
