import { GlobalPostEconomySinglePiece } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Economy | Single Piece service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostEconomySinglePiece.Id;
        expect(result).toBe("7b1fc6b6-40ca-4c2b-9e53-da8118cbcd60");
    });

    test("Check Name", () => {
        const result = GlobalPostEconomySinglePiece.Name;
        expect(result).toBe("GlobalPost Economy | Single Piece");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostEconomySinglePiece.Abbreviation;
        expect(result).toBe("GPEconomySP");
    });

    test("Check Code", () => {
        const result = GlobalPostEconomySinglePiece.Code;
        expect(result).toBe("gp_economy_sp");
    });

    test("Check International", () => {
        const result = GlobalPostEconomySinglePiece.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostEconomySinglePiece.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostEconomySinglePiece.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostEconomySinglePiece.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostEconomySinglePiece.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostEconomySinglePiece.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
