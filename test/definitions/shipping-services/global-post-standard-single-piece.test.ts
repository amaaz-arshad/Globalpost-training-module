import { GlobalPostStandardSinglePiece } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Standard | Single Piece service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostStandardSinglePiece.Id;
        expect(result).toBe("4dfa60bf-10f9-48c7-a1e8-31b0123247de");
    });

    test("Check Name", () => {
        const result = GlobalPostStandardSinglePiece.Name;
        expect(result).toBe("GlobalPost Standard | Single Piece");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostStandardSinglePiece.Abbreviation;
        expect(result).toBe("GPStandardSP");
    });

    test("Check Code", () => {
        const result = GlobalPostStandardSinglePiece.Code;
        expect(result).toBe("gp_standard_sp");
    });

    test("Check International", () => {
        const result = GlobalPostStandardSinglePiece.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostStandardSinglePiece.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostStandardSinglePiece.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostStandardSinglePiece.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostStandardSinglePiece.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostStandardSinglePiece.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
