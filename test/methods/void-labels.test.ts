import { VoidLabelsRequest } from "@shipengine/connect-carrier-api";
import { VoidLabels } from "../../src/methods/void-labels/void-labels";

let request: VoidLabelsRequest;
jest.mock("../../src/api/api-communicator.ts");

beforeEach(() => {
    request = {
        transaction_id: "adbc24ff-550f-4b8b-af4c-9c62d8edb6f6",
        void_requests: [
            {
                ship_from: {
                    address_lines: ["string"],
                    city_locality: "string",
                    postal_code: "string",
                    country_code: "string"
                },
                tracking_number: "875438",
                void_request_id: "090078601"
            }
        ],
        metadata: {
            username: "bb4440bb-f0cf-4231-a86e-b8414fc0f0e5",
            password: "e1fe872f-a251-4a6a-9282-7efc68b69f84"
        }
    };
});

describe("Unit tests for VoidLabels function", () => {
    test("Check void label response", async () => {
        const result = await VoidLabels(request);
        expect(result).not.toBeUndefined();
    });
    test("Check void label response - void responses", async () => {
        const result = await VoidLabels(request);
        expect(result.void_responses).not.toBeUndefined();
    });
    test("Check void label response - void responses message", async () => {
        const result = await VoidLabels(request);
        expect(result.void_responses[0].message).toBe("Success");
    });
    test("Check void label response - void responses errors", async () => {
        const result = await VoidLabels(request);
        expect(result.void_responses[0].errors).toBeNull();
    });
    test("Check void label response - return correct number of void response", async () => {
        request.void_requests.push({
            ship_from: {
                postal_code: "string",
                country_code: "string"
            },
            tracking_number: "00011111",
            void_request_id: "9999932232"
        })
        const result = await VoidLabels(request);
        expect(result.void_responses.length).toBe(2);
    });
});