import { GlobalPostStandardPickup } from "../../../src/definitions/shipping-services";
import { ServiceGradeEnum, LabelSizesEnum, ServiceAttributesEnum, ConfirmationTypeEnum } from "@shipengine/connect-carrier-api";

describe("Check GlobalPost Standard | Pickup service definitions properties", () => {
    test("Check Id", () => {
        const result = GlobalPostStandardPickup.Id;
        expect(result).toBe("11bb3462-34a2-477f-a7ee-4ae5a840dcc8");
    });

    test("Check Name", () => {
        const result = GlobalPostStandardPickup.Name;
        expect(result).toBe("GlobalPost Standard | Pickup");
    });

    test("Check Abbreviation", () => {
        const result = GlobalPostStandardPickup.Abbreviation;
        expect(result).toBe("GPStandardPU");
    });

    test("Check Code", () => {
        const result = GlobalPostStandardPickup.Code;
        expect(result).toBe("gp_standard_pu");
    });

    test("Check International", () => {
        const result = GlobalPostStandardPickup.International;
        expect(result).toBeTruthy()
    });

    test("Check SupportedLabelSizes", () => {
        const result = GlobalPostStandardPickup.SupportedLabelSizes;
        expect(result).toStrictEqual([LabelSizesEnum.Inches4x6]);
    });

    test("Check SupportedCountries", () => {
        const expected = [
            {
                FromCountry: "US"
            }
        ];
        const result = GlobalPostStandardPickup.SupportedCountries;
        expect(result).toStrictEqual(expected);
    });

    test("Check Grade", () => {
        const expected = ServiceGradeEnum.Unspecified;
        const result = GlobalPostStandardPickup.Grade;
        expect(result).toBe(expected);
    });

    test("Check ServiceAttributes", () => {
        const result = GlobalPostStandardPickup.ServiceAttributes;
        expect(result).toStrictEqual([ServiceAttributesEnum.ManifestDigital]);
    });

    test("Check ConfirmationTypes", () => {
        const expected = [
            {
                Type: ConfirmationTypeEnum.None
            }
        ]
        const result = GlobalPostStandardPickup.ConfirmationTypes;
        expect(result).toStrictEqual(expected);
    });
});
