import { GetRatesRequest } from "@shipengine/connect-carrier-api";
import { GetRates } from "../../src/methods/get-rates/get-rates"
jest.mock("../../src/api/api-communicator.ts");

let request: GetRatesRequest;

beforeEach(() => {
    request = {
        transaction_id: "adbc24ff-550f-4b8b-af4c-9c62d8edb6f6",
        ship_datetime: "2019-08-24T14:15:22Z",
        is_return_label: false,
        packages: [
            {
                package_code: "string",
                insured_value: {
                    amount: "string",
                    currency: "string"
                },
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
            country_code: "string"
        }
    }
});

describe("Unit tests for GetRates function", () => {
    test("Check Get Rates response", async () => {
        const result = await GetRates(request);
        expect(result).not.toBeUndefined();
    });
});