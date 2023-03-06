import {
  Carrier,
  LabelSizesEnum,
  LabelFormatsEnum,
} from "@shipengine/connect-carrier-api";
import { join } from "path";
import { Flat, Tube, FlatRateEnvelope, Packages, LegalFlatRateEnvelope, PaddedFlatRateEnvelope, SmallFlatRateBox } from "./packaging";
import { GlobalPostEconomyPickup, GlobalPostEconomyShipIn, GlobalPostEconomySinglePiece, GlobalPostPlusPickup, GlobalPostPlusShipIn, GlobalPostPlusSinglePiece, GlobalPostStandardPickup, GlobalPostStandardShipIn, GlobalPostStandardSinglePiece } from "./shipping-services";
import { RegistrationFormSchema, SettingsFormSchema } from "./forms";
import { CARRIER_TRACKING_URL, CARRIER_URL } from "../helpers/constants";

export const GlobalPostCarrier: Carrier = {
  // DO NOT CHANGE THIS ID AFTER PUBLISHING
  Id: "33ac768e-d62b-43aa-898c-af482e767510",
  Name: "Globalpost",
  Description: "Globalpost",
  PackageTypes: [Flat, Tube, Packages, FlatRateEnvelope, LegalFlatRateEnvelope, PaddedFlatRateEnvelope, SmallFlatRateBox],
  ShippingServices: [
    GlobalPostEconomyPickup, GlobalPostEconomyShipIn, GlobalPostEconomySinglePiece,
    GlobalPostPlusPickup, GlobalPostPlusShipIn, GlobalPostPlusSinglePiece,
    GlobalPostStandardPickup, GlobalPostStandardShipIn, GlobalPostStandardSinglePiece
  ],
  ShippingOptions: {},
  DefaultSupportedCountries: [
    {
      FromCountry: "US",
    }
  ],
  DefaultLabelSizes: [LabelSizesEnum.Inches4x6],
  LabelFormats: [LabelFormatsEnum.PDF, LabelFormatsEnum.ZPL, LabelFormatsEnum.PNG],
  TrackingUrl: CARRIER_TRACKING_URL,
  CarrierUrl: CARRIER_URL,
  Images: {
    Logo: join(__dirname, "../../assets/logo.svg"),
    Icon: join(__dirname, "../../assets/icon.svg"),
  },
  AccountModals: {
    RegistrationFormSchema,
    SettingsFormSchema,
  },
};
