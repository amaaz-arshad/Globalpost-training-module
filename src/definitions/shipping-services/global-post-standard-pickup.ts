import {
    ShippingService,
    LabelSizesEnum,
    ServiceGradeEnum,
    ServiceAttributesEnum,
    ConfirmationTypeEnum,
} from '@shipengine/connect-carrier-api';

export const GlobalPostStandardPickup: ShippingService = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "11bb3462-34a2-477f-a7ee-4ae5a840dcc8",
    Name: "GlobalPost Standard | Pickup",
    Abbreviation: "GPStandardPU",
    Code: "gp_standard_pu",
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
