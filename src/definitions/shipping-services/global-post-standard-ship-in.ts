import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostStandardShipIn: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "89107a78-2486-47cb-a53c-ded930f8e1c0",
    Name: "GlobalPost Standard | Ship-In",
    Abbreviation: "GPStandardSI",
    Code: "gp_standard_si",
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
