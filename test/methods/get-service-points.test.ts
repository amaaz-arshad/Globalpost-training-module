import { GetServicePointsRequest } from "@shipengine/connect-carrier-api";
import { GetServicePoints } from "../../src/methods/get-service-points/get-service-points";
import { SearchRadiusUnit } from "@shipengine/connect-carrier-api/lib/models/service-points/search-radius-unit";

jest.mock("../../src/api/api-communicator.ts");

let request: GetServicePointsRequest;

beforeEach(() => {
    request = {
        service_code: "string",
        address: {
            geo: {
                lat: -31.9543,
                long: -120.9762
            },
            address_lines: [
                "string1",
                "string2"
            ],
            city_locality: "string",
            state_province: "string",
            postal_code: "string",
            country_code: "string"
        },
        search_radius: {
            radius_in_miles: 0,
            radius_in_kilometers: 0,
            source_radius: 5,
            source_radius_unit: SearchRadiusUnit.Miles
        },
        max_results: 3,
        transaction_id: "0fec1e58-b197-4052-99cf-2218496c5482",
        metadata: {
            username: "bb4440bb-f0cf-4231-a86e-b8414fc0f0e5",
            password: "e1fe872f-a251-4a6a-9282-7efc68b69f84",
        }
    }
});

describe("Unit tests for Get Service Point function", () => {
    test("Check GetServicePoint response", async () => {
        const result = await GetServicePoints(request);
        expect(result).not.toBeUndefined();
    });
    test("Check GetServicePoint response - service point", async () => {
        const result = await GetServicePoints(request);
        expect(result.service_points).not.toBeUndefined();
    });
    test("Check GetServicePoint response - service points should be an array", async () => {
        const result = await GetServicePoints(request);
        expect(Array.isArray(result.service_points)).toBeTruthy();
    });
    test("Check GetServicePoint response - service point id", async () => {
        const result = await GetServicePoints(request);
        expect(result.service_points[0].service_point_id).not.toBeUndefined();
    });
    test("Check GetServicePoint response - address", async () => {
        const result = await GetServicePoints(request);
        expect(result.service_points[0].address).not.toBeUndefined();
    });
    test("Check GetServicePoint response - hours of operation", async () => {
        const result = await GetServicePoints(request);
        expect(result.service_points[0].hours_of_operation).not.toBeUndefined();
    });
    test("Check GetServicePoint response - geo undefined", async () => {
        request.address.geo = undefined;
        const result = await GetServicePoints(request);
        expect(result).not.toBeUndefined();
    });
    test("Check GetServicePoint response - address lines undefined", async () => {
        request.address.address_lines = undefined;
        const result = await GetServicePoints(request);
        expect(result).not.toBeUndefined();
    });
});