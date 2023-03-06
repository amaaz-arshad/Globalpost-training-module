import {
    CreateLabelRequest,
    DimensionUnit,
    DocumentFormat,
    LabelLayouts,
    WeightUnit
} from "@shipengine/connect-carrier-api";
import { CreateLabel } from "../../src/methods/create-label/create-label";
jest.mock("../../src/api/api-communicator.ts");

let request: CreateLabelRequest;

beforeEach(() => {
    request = {
        metadata: {
            username: "bb4440bb-f0cf-4231-a86e-b8414fc0f0e5",
            password: "fefwr31d-43f3-g64f-g3ds-m83bd731n97c",
            ticket: "PYSeDwwQktr-yRtCRrfGwe6ihEYXsuyxkYads_YfHo9M0aY1Vtzggo3czT2sI0tNyA9GZA8rnMnSc3OlQYCggQee9dg0iK-x4OdRY9Oh0j1Bs8VLEkWgQaKyAUtywsEu"
        },
        transaction_id: "adbc24ff-550f-4b8b-af4c-9c62d8edb6f6",
        service_code: "string",
        ship_datetime: "2021-08-24T14:15:22Z",
        is_return_label: false,
        label_format: DocumentFormat.Pdf,
        label_layout: LabelLayouts.FourBySix,
        packages: [
            {
                package_code: "string",
                dimension_details: {
                    dimensions_in_centimeters: undefined,
                    source_dimensions: {
                        length: 30,
                        width: 30,
                        height: 30
                    },
                    source_dimension_unit: DimensionUnit.Centimeters,
                    dimensions_in_inches: undefined
                },
                weight_details: {
                    source_weight: 30,
                    source_weight_unit: WeightUnit.Kilograms
                },
                insured_value: {
                    amount: "0",
                    currency: ""
                }
            }
        ],
        ship_to: {
            address_lines: ["string"],
            city_locality: "string",
            postal_code: "string",
            country_code: "string"
        },
        ship_from: {
            address_lines: ["string"],
            city_locality: "string",
            postal_code: "string",
            country_code: "US"
        }
    };
});

describe("Check Create Label response handling", () => {
    test("Check label response", async () => {
        const result = await CreateLabel(request);
        expect(result).not.toBeUndefined();
    });

    test("Check label response - Metadata not undefined", async () => {
        const result = await CreateLabel(request);
        expect(result.metadata).not.toBeUndefined();
    });

    test("Check label response - Country code not case sensitive", async () => {
        request.ship_from.country_code = "us";
        const result = await CreateLabel(request);
        expect(result).not.toBeUndefined();
    });

    test("Check label response - Label format not case sensitive", async () => {
        request.label_format = "zpl" as DocumentFormat;
        const result = await CreateLabel(request);
        expect(result.documents?.[0]?.format).toBe(DocumentFormat.Zpl);
    });

    test("Check label response - Default label format will be PDF", async () => {
        request.label_format = undefined;
        const result = await CreateLabel(request);
        expect(result.documents?.[0]?.format).toBe(DocumentFormat.Pdf);
    });

});

describe("Check Create Label validations", () => {
    test("Check validation - Label size", async () => {
        request.label_layout = LabelLayouts.Letter;
        const result = await CreateLabel(request).catch((e) => e.message);
        expect(result).toBe("Only '4x6' label size is supported.");
    });

    test("Check validation - Shipping from country", async () => {
        request.ship_from.country_code = "PK";
        const result = await CreateLabel(request).catch((e) => e.message);
        expect(result).toBe("Shipping allowed from US only.");
    });
});