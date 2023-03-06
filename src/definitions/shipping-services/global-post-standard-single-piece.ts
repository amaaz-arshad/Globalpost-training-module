import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostStandardSinglePiece: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "4dfa60bf-10f9-48c7-a1e8-31b0123247de",
    Name: "GlobalPost Standard | Single Piece",
    Abbreviation: "GPStandardSP",
    Code: "gp_standard_sp",
    International: true,
    SupportedLabelSizes: [LabelSizesEnum.Inches4x6],
    SupportedCountries: [
        {
            FromCountry: "US",
        },
    ],
    Grade: ServiceGradeEnum.Unspecified,
    ServiceAttributes: [ServiceAttributesEnum.ManifestDigital],
    ConfirmationTypes: [
        {
            Type: ConfirmationTypeEnum.None
        }
    ]
};
