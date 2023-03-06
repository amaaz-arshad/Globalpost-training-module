import { TrackingRequest } from "@shipengine/connect-carrier-api";
import { Track } from "../../src/methods/track/track";
jest.mock("../../src/api/api-communicator.ts");

let request: TrackingRequest;

beforeEach(() => {
    request = {
        transaction_id: "adbc24ff-550f-4b8b-af4c-9c62d8edb6f6",
        identifiers: [
            {
                type: "tracking_number",
                value: "12345678901234567890"
            },
            {
                type: "carrier_transaction_id",
                value: "US-12345678901234567890-1"
            }
        ]
    }
});

describe("Unit tests for Track function", () => {
    test("Check track response", async () => {
        const result = await Track(request);
        expect(result).not.toBeUndefined();
    });
});