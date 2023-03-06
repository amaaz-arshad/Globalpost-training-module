import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostPlusPickup: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "5b15505f-a83b-46b2-bfe3-c991f54f9636",
    Name: "GlobalPost Plus | Pickup",
    Abbreviation: "GPPlusPU",
    Code: "gp_plus_pu",
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
