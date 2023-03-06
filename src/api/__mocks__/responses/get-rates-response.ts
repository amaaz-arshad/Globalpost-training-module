export const GetRatesResponse = {
  status: 200,
  data: {
    currency: "USD",
    rates: [
      {
        service: "gp_plus",
        price: 31.37,
        delivery_days: "10-30",
        delivery_date: "08/17/2022 00:00:00",
        package: {
          type: "flat",
          length: 5.5,
          width: 5,
          height: 3.5,
          dimension_unit: "cm",
          weight: 2.4,
          weight_unit: "lb"
        },
        surcharges: null,
        extra_services: null,
        insurance: {
          price: 0,
          amount_purchased: 0,
          amount_included: 0,
          amount_insured: 0
        },
        custom: {
          contents: "gift",
          customs_items: [
            {
              item_value: 1,
              description: "item 1",
              quantity: 1,
              weight: 1.1,
              weight_unit: "oz",
              hs_tariff: "69120091",
              origin_country: "US",
              sku: "CheekPalette DreamSe",
              url: null
            }
          ],
          country_requirements: {
            colony: null,
            buyer_tax_id: null,
            arbn: null,
            passport_number: "abc",
            passport_issue_date: null,
            passport_expiry: "2020-01-01T00:00:00"
          },
          license_number: null,
          certificate_number: null,
          invoice_number: null,
          description: "abc",
          comments: null,
          signer: null,
          non_delivery: "abandon",
          internal_transaction_number: null
        }
      }
    ],
    errors: []
  }
};