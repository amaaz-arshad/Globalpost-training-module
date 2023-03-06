export const CreateLabelResponse = {
  status: 200,
  data: {
    currency: "USD",
    errors: null,
    label: [
      "XlhBDQoKXlBPTgpeUFJDCl5MSDAsMF5GUwpeTEwxMjE4Cl5NRDAKXk1OWQpeTEgwLDBeRlMKXkxIMCwwXkZTCl5NRDBeTU5ZCl5MSDAsMF5GUwpeRk83MDAsODBeQTBOLDM0LDM5XkNJMTNeRkQwMV5GUwpeRk8wLDE1MF5HQjg4MCwzLDNeRlMKXkZPMzAsMTcwXkEwTiwyMiwyMF5DSTEzXkZERnJvbTogXkZTCl5GTzEwMCwxNzBeQ0kyOF5BME4sMjIsMjBeRkRTVFJJTkdeRlMKXkZPMTAwLDE5MF5DSTI4XkEwTiwyMiwyMF5GRFBPREdPUklUU0EgQ0QgTk86MzEvQV5GUwpeRk8xMDAsMjEwXkNJMjheQTBOLDIyLDIwXkZEw4dBTktBWUFeRlMKXkZPMTAwLDIzMF5DSTEzXkEwTk4sMjIsMjBeRkReRlMKXkZPMTAwLDI1MF5DSTI4XkEwTiwyMiwyMF5GRExPUyBBTkdFTEVTLCBDQSwgOTAwMDFeRlMKXkZPMTAwLDI3MF5DSTI4XkEwTiwyMiwyMF5GRFVOSVRFRCBTVEFURVNeRlMKXkZPNDUwLDE1MF5HQjAsMTc3LDJeRlMKXkZPNDgwLDIxM15BME4sMjIsMjJeQ0kxM15GREN1c3RvbWVyIFJlZmVyZW5jZSAxXkZTCl5GTzQ4MCwyNDBeQ0kxM15BME5OLDIyLDIzXkZEQU1aTjEyMzQ1Njc4MF5GUwpeRk8wLDMyNV5HQjgzMCwyLDJeRlMKXkZPMzAsMzMwXkEwTiwyOCwyNV5DSTEzXkZEVG86IF5GUwpeRk8zMCwzNjBeQ0kyOF5BME4sMjgsMjVeRkRBU0ReRlMKXkZPMzAsMzkwXkNJMjheQTBOLDI4LDI1XkZEUE9ER09SSVRTQSBDRCBOTzozMS9BXkZTCl5GTzMwLDQyMF5DSTI4XkEwTiwyOCwyNV5GRMOHQU5LQVlBXkZTCl5GTzMwLDQ1MF5DSTI4XkEwTiwyOCwyNV5GRENPTE9OWV5GUwpeRk8zMCw0ODBeQ0kyOF5BME4sMjgsMjVeRkRMQU5HRU5CVVJHLCBTS15GUwpeRk8zMCw1MTBeQTBOLDI4LDI1XkNJMTNeRkQzMDQwMF5GUwpeRk8zMCw1NDBeQ0kxM15BME5OLDI4LDI1XkZETUVYSUNPXkZTCl5GTzAsNTcwXkdCODgwLDIsMl5GUwpeRk8zMCw1ODBeQTBOLDIyLDIwXkNJMTNeRkRQYWNrYWdlIFdlaWdodDogMi40MCBsYl5GUwpeRk81NDAsNTgwXkEwTiwyMiwyMF5DSTEzXkZEU2hpcCBEYXRlOiAwNy8xOC8yMDIyXkZTCl5GTzAsNjEwXkdCODgwLDIsMl5GUwpeRk8wLDYxMF5HQjg4MCwyLDJeRlMKXkZPNTUsNjUwXkdCNzAwLDIsOF5GUwpeRk81NSw3NDBeQlkzLDMuMF5CQ04sMTU1LE4sWSxOXkZEUlJEMDEwOTA5MjMwODgwNzU0XkZTCl5GTzIyNSw5MzBeQTBOLDMxLDM5XkNJMTNeRkRSUkQwMTA5MDkyMzA4ODA3NTReRlMKXkZPNTUsOTgwXkdCNzAwLDIsOF5GUwpeRk8wLDEwMzBeR0I4ODAsMiwyXkZTCl5QUTEsMCwwLE4KXlhaDQo="
    ],
    shipment: {
      customs: {
        certificate_number: null,
        comments: null,
        contents: "document",
        country_requirements: null,
        customs_items: [
          {
            description: "this is custom item desc",
            hs_tariff: "",
            item_value: 1,
            origin_country: "",
            quantity: 1,
            sku: "",
            url: null,
            weight: 2.4,
            weight_unit: "lb"
          }
        ],
        description: "this is custom item desc",
        internal_transaction_number: null,
        invoice_number: null,
        license_number: null,
        non_delivery: "abandon",
        signer: null
      },
      extra_services: null,
      from: {
        address_hash: null,
        address_line1: "string",
        address_line2: "",
        address_line3: "",
        city: "Los Angeles",
        company: "string",
        country: "US",
        email: "string",
        name: "string",
        phone: "string",
        postal_code: "90001",
        postal_code_addon: null,
        province: "CA",
        state: "CA"
      },
      insurance_amount: 0,
      order: {
        cost_code: null,
        order_id: "AMZN123456780",
        reference_data: null
      },
      package: {
        dimension_unit: "cm",
        height: 3.5,
        length: 5.5,
        type: "flat",
        weight: 2.4,
        weight_unit: "lb",
        width: 5
      },
      return: {
        address_hash: null,
        address_line1: "Podgoritsa Cd No:31/A",
        address_line2: "Çankaya",
        address_line3: "",
        city: "Los Angeles",
        company: "string",
        country: "US",
        email: "sda@email.com",
        name: "",
        phone: "string",
        postal_code: "90001",
        postal_code_addon: null,
        province: "CA",
        state: "CA"
      },
      service: "gp_plus",
      ship_date: "2022-07-18T00:00:00+00:00",
      to: {
        address_hash: null,
        address_line1: "Podgoritsa Cd No:31/A",
        address_line2: "Çankaya",
        address_line3: "Colony",
        city: "Langenburg",
        company: "string",
        country: "MX",
        email: "sda@email.com",
        name: "asd",
        phone: "string",
        postal_code: "30400",
        postal_code_addon: null,
        province: "SK",
        state: "SK"
      }
    },
    shipment_id: "d74ead41-e19f-439c-a01b-515fafd8adfe",
    total_amount: 31.37,
    tracking_number: "RRD010909230880754"
  }
};