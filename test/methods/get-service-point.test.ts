import { GetServicePointRequest } from "@shipengine/connect-carrier-api";
import { GetServicePoint } from "../../src/methods/get-service-point/get-service-point";

jest.mock("../../src/api/api-communicator.ts");

let request: GetServicePointRequest;

beforeEach(() => {
    request = {
        transaction_id: "0fec1e58-b197-4052-99cf-2218496c5482",
        service_point_id: "string",
        country_code: "string",
        metadata: {
            username: "bb4440bb-f0cf-4231-a86e-b8414fc0f0e5",
            password: "e1fe872f-a251-4a6a-9282-7efc68b69f84"
        }
    }
});

describe("Unit tests for Get Service Point function", () => {
    test("Check GetServicePoint response", async () => {
        const result = await GetServicePoint(request);
        expect(result).not.toBeUndefined();
    });
    test("Check GetServicePoint response - service point", async () => {
        const result = await GetServicePoint(request);
        expect(result.service_point).not.toBeUndefined();
    });
    test("Check GetServicePoint response - service point should not be an array", async () => {
        const result = await GetServicePoint(request);
        expect(Array.isArray(result.service_point)).toBeFalsy();
    });
    test("Check GetServicePoint response - service point id", async () => {
        const result = await GetServicePoint(request);
        expect(result.service_point.service_point_id).not.toBeUndefined();
    });
    test("Check GetServicePoint response - address", async () => {
        const result = await GetServicePoint(request);
        expect(result.service_point.address).not.toBeUndefined();
    });
    test("Check GetServicePoint response - hours of operation", async () => {
        const result = await GetServicePoint(request);
        expect(result.service_point.hours_of_operation).not.toBeUndefined();
    });
});