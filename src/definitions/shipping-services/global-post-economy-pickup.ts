import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostEconomyPickup: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "bdb1245e-a3c3-498a-b78a-04e7f3b8a728",
    Name: "GlobalPost Economy | Pickup",
    Abbreviation: "GPEconomyPU",
    Code: "gp_economy_pu",
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
