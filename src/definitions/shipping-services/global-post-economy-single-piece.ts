import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostEconomySinglePiece: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "7b1fc6b6-40ca-4c2b-9e53-da8118cbcd60",
    Name: "GlobalPost Economy | Single Piece",
    Abbreviation: "GPEconomySP",
    Code: "gp_economy_sp",
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
