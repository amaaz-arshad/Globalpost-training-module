import { SettingsFormSchema } from "../../../src/definitions/forms";

describe("Check settings form structure", () => {
  test("Check title", () => {
    const result = SettingsFormSchema.JsonSchema.title;
    expect(result).toBe("Update GP Connect Configuration");
  });

  test("Check type", () => {
    const result = SettingsFormSchema.JsonSchema.type;
    expect(result).toBe("object");
  });

  test("Check description", () => {
    const result = SettingsFormSchema.JsonSchema.description;
    expect(result).toBe("Update your account.");
  });

  test("Check required properties", () => {
    const expected = ["username", "password"];
    const result = SettingsFormSchema.JsonSchema.required;
    expect(result).toStrictEqual(expected);
  });

  test("Check properties", () => {
    const expected = {
      username: {
        type: "string",
        title: "Username",
      },
      password: {
        type: "string",
        title: "Password",
      },
      address_hash: {
        type: "string",
        title: "Address Hash"
      },
      name: {
        type: "string",
        title: "Name"
      },
      company: {
        type: "string",
        title: "Company"
      },
      address: {
        type: "string",
        title: "Address"
      },
      address_line2: {
        type: "string",
        title: "Address Line 2"
      },
      address_line3: {
        type: "string",
        title: "Address Line 3"
      },
      city: {
        type: "string",
        title: "City"
      },
      state: {
        type: "string",
        title: "State"
      },
      country: {
        type: "string",
        title: "Country"
      },
      province: {
        type: "string",
        title: "Province"
      },
      phone: {
        type: "string",
        title: "Phone"
      },
      email: {
        type: "string",
        title: "Email"
      },
      postal_code: {
        type: "string",
        title: "Postal Code"
      },
      postal_code_addon: {
        type: "string",
        title: "Postal Code Addon"
      }
    };
    const result = SettingsFormSchema.JsonSchema.properties;
    expect(result).toStrictEqual(expected);
  });

  test("Check ui schema", () => {
    const expected = {
      "ui:order": [
        "username",
        "password",
        "address_hash",
        "name",
        "company",
        "address",
        "address_line2",
        "address_line3",
        "city",
        "state",
        "country",
        "province",
        "phone",
        "email",
        "postal_code",
        "postal_code_addon",
      ],
      username: {
        "ui:autofocus": true,
      },
      password: {
        "ui:widget": "password",
      },
    };
    const result = SettingsFormSchema.UiSchema;
    expect(result).toStrictEqual(expected);
  });
});