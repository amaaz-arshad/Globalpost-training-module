"use strict";

import { logger } from "@shipengine/connect-runtime";
import { BaseApiRequest } from "./base-api-request";

const logRequest = (request: BaseApiRequest) => {
  try {
    logger.info(`Sending ${request.operationName} Request to Globalpost API
      URL: ${request.url}
      Method: ${request.method ? request.method : ""}
      Headers: ${request.headers ? JSON.stringify(request.headers) : ""}
      QueryParameters: ${request.params ? request.params : ""}
      Body: ${request.data ? request.data : ""}`);
  } catch (e) {
    logger.info("Unable to generate request logs. " + (e.message ?? e));
  }
};

const logResponse = (response: unknown) => {
  try {
    logger.info(`Response Received from Globalpost API
      ${response ? JSON.stringify(response) : ""}`);
  } catch (e) {
    logger.info("Unable to generate response logs. " + (e.message ?? e));
  }
};

export { logRequest, logResponse };
