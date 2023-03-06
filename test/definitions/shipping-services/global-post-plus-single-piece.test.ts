import { GlobalPostPlusSinglePiece } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Plus | Single Piece service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostPlusSinglePiece.Id;
        expect(result).toBe("da2043ff-1a71-41b5-a84c-52c941c12753");
    });

    test("Check Name", () => {
        const result = GlobalPostPlusSinglePiece.Name;
        expect(result).toBe("GlobalPost Plus | Single Piece");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostPlusSinglePiece.Abbreviation;
        expect(result).toBe("GPPlusSP");
    });

    test("Check Code", () => {
        const result = GlobalPostPlusSinglePiece.Code;
        expect(result).toBe("gp_plus_sp");
    });

    test("Check International", () => {
        const result = GlobalPostPlusSinglePiece.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostPlusSinglePiece.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostPlusSinglePiece.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostPlusSinglePiece.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostPlusSinglePiece.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostPlusSinglePiece.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
