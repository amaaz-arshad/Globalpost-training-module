import { LabelFormatsEnum, LabelSizesEnum } from "@shipengine/connect-carrier-api";
import { GlobalPostCarrier } from "../../src/definitions/global-post";
import { Flat, FlatRateEnvelope, LegalFlatRateEnvelope, Packages, PaddedFlatRateEnvelope, SmallFlatRateBox, Tube } from "../../src/definitions/packaging";
import { GlobalPostEconomyPickup, GlobalPostEconomyShipIn, GlobalPostEconomySinglePiece, GlobalPostPlusPickup, GlobalPostPlusShipIn, GlobalPostPlusSinglePiece, GlobalPostStandardPickup, GlobalPostStandardShipIn, GlobalPostStandardSinglePiece } from "../../src/definitions/shipping-services";
import { CARRIER_TRACKING_URL, CARRIER_URL } from "../../src/helpers/constants";
import { RegistrationFormSchema, SettingsFormSchema } from "../../src/definitions/forms";

describe("Check carrier definitions properties", () => {
  test("Check Id", () => {
    const result = GlobalPostCarrier.Id;
    expect(result).toBe("33ac768e-d62b-43aa-898c-af482e767510");
  });

  test("Check name", () => {
    const result = GlobalPostCarrier.Name;
    expect(result).toBe("Globalpost");
  });

  test("Check Description", () => {
    const result = GlobalPostCarrier.Description;
    expect(result).toBe("Globalpost");
  });

  test("Check PackageTypes", () => {
    const expected = [Flat, Tube, Packages, FlatRateEnvelope, LegalFlatRateEnvelope, PaddedFlatRateEnvelope, SmallFlatRateBox];
    const result = GlobalPostCarrier.PackageTypes;
    expect(result).toStrictEqual(expected);
  });

  test("Check ShippingServices", () => {
    const expected = [
      GlobalPostEconomyPickup, GlobalPostEconomyShipIn, GlobalPostEconomySinglePiece,
      GlobalPostPlusPickup, GlobalPostPlusShipIn, GlobalPostPlusSinglePiece,
      GlobalPostStandardPickup, GlobalPostStandardShipIn, GlobalPostStandardSinglePiece
    ];
    const result = GlobalPostCarrier.ShippingServices;
    expect(result).toStrictEqual(expected);
  });

  test("Check ShippingOptions", () => {
    const result = GlobalPostCarrier.ShippingOptions;
    expect(result).toStrictEqual({});
  });

  test("Check DefaultSupportedCountries", () => {
    const expected = [
      {
        FromCountry: "US"
      }
    ];
    const result = GlobalPostCarrier.DefaultSupportedCountries;
    expect(result).toStrictEqual(expected);
  });

  test("Check DefaultLabelSizes", () => {
    const expected = [LabelSizesEnum.Inches4x6];
    const result = GlobalPostCarrier.DefaultLabelSizes;
    expect(result).toStrictEqual(expected);
  });

  test("Check LabelFormats", () => {
    const expected = [LabelFormatsEnum.PDF, LabelFormatsEnum.ZPL, LabelFormatsEnum.PNG];
    const result = GlobalPostCarrier.LabelFormats;
    expect(result).toStrictEqual(expected);
  });

  test("Check TrackingUrl", () => {
    const result = GlobalPostCarrier.TrackingUrl;
    expect(result).toBe(CARRIER_TRACKING_URL);
  });

  test("Check CarrierUrl", () => {
    const result = GlobalPostCarrier.CarrierUrl;
    expect(result).toBe(CARRIER_URL);
  });

  test("Check AccountModals", () => {
    const expected = { RegistrationFormSchema, SettingsFormSchema }
    const result = GlobalPostCarrier.AccountModals;
    expect(result).toStrictEqual(expected);
  });
});
