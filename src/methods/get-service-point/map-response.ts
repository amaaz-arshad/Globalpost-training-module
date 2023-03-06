import { GetServicePointResponse } from "@shipengine/connect-carrier-api";
import { ExternalServerError } from "@shipengine/connect-runtime";
import { GetServicePointsApiResponse, ListPoints } from "../../api/models/get-service-points-api-response";
import { isEmpty } from "../../helpers/utils";
import { getServicePointsData } from "../common/service-points-map-response";

export const mapResponse = (
    response: GetServicePointsApiResponse
): GetServicePointResponse => {
    const listPoints = response.listePointRelais as ListPoints;
    if (!isEmpty(listPoints)) {
        return {
            service_point: getServicePointsData(listPoints)
        };
    }
    throw new ExternalServerError("Service point not returned from API.");
};