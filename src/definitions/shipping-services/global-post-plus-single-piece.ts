import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostPlusSinglePiece: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "da2043ff-1a71-41b5-a84c-52c941c12753",
    Name: "GlobalPost Plus | Single Piece",
    Abbreviation: "GPPlusSP",
    Code: "gp_plus_sp",
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
