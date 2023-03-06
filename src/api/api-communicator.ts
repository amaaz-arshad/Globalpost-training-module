import { BaseApiRequest } from "./base-api-request";
import axios from "axios";
import { getErrorDetails, getErrorMessage } from "../helpers/utils";
import { ExternalServerError, UnauthorizedError } from "@shipengine/connect-runtime";
import { logRequest, logResponse } from "./logger";
import { CarrierApiOperation } from "../helpers/constants";

export async function processApiRequest<T>(request: BaseApiRequest): Promise<T> {
    try {
        logRequest(request);
        const axiosInstance = axios.create(request);
        const response = await axiosInstance.request(request);
        logResponse(response.data);
        return response.data;
    } catch (err) {
        logResponse(err);
        return processError(err, request.operationName);
    }
}

const processError = (err: any, endPointName: CarrierApiOperation) => {
    if (endPointName === CarrierApiOperation.Register && err.response?.status === 401) {
        throw new UnauthorizedError(getErrorMessage(err, endPointName), getErrorDetails(err));
    }
    throw new ExternalServerError(getErrorMessage(err, endPointName), getErrorDetails(err));
};
