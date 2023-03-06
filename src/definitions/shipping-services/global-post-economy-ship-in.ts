import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostEconomyShipIn: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "1816a7b4-86eb-4bd9-8524-c0accbea57dc",
    Name: "GlobalPost Economy | Ship-In",
    Abbreviation: "GPEconomySI",
    Code: "gp_economy_si",
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
