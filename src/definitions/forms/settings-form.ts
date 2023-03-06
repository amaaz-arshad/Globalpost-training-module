const JsonSchema = {
  type: "object",
  title: "Update GP Connect Configuration",
  required: ["username", "password"],
  properties: {
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
  },
  description: "Update your account.",
};

const UiSchema = {
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

export const SettingsFormSchema = {
  JsonSchema,
  UiSchema,
};
