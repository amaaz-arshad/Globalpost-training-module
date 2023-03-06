import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostPlusShipIn: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "1dba57f8-020b-4f8f-bb86-df75a1c356ad",
    Name: "GlobalPost Plus | Ship-In",
    Abbreviation: "GPPlusSI",
    Code: "gp_plus_si",
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
