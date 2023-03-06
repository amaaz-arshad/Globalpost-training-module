import { RegisterRequest } from "@shipengine/connect-carrier-api";
import { Register } from "../../src/methods/register/register";
jest.mock("../../src/api/api-communicator.ts");

let request: RegisterRequest;

beforeEach(() => {
    request = {
        transaction_id: "adbc24ff-550f-4b8b-af4c-9c62d8edb6f6",
        registration_info: {
            name: "user"
        }
    };
});

describe("Unit tests for Register function", () => {
    test("Check register response", async () => {
        const result = await Register(request);
        expect(result).not.toBeUndefined();
    });

    test("Check register response - credentials", async () => {
        const result = await Register(request);
        expect(result.credentials).not.toBeUndefined();
    });

    test("Check register response - metadata", async () => {
        const result = await Register(request);
        expect(result.metadata).not.toBeUndefined();
    });
});