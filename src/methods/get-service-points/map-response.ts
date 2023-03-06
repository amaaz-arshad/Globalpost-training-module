import { GetServicePointsResponse } from "@shipengine/connect-carrier-api";
import { ServicePoint } from "@shipengine/connect-carrier-api/lib/models/service-points";
import { GetServicePointsApiResponse, ListPoints } from "../../api/models/get-service-points-api-response";
import { isEmpty } from "../../helpers/utils";
import { getServicePointsData } from "../common/service-points-map-response";

export const mapResponse = (
    response: GetServicePointsApiResponse
): GetServicePointsResponse => {
    return {
        service_points: getServicePoints(response.listePointRelais)
    };
};

function getServicePoints(listPoints: ListPoints | ListPoints[]): ServicePoint[] {
    if (isEmpty(listPoints)) return null;
    if (!Array.isArray(listPoints)) {
        return [getServicePointsData(listPoints)];
    }
    const servicePoints: ServicePoint[] = [];
    listPoints.forEach(point => {
        servicePoints.push(getServicePointsData(point));
    })
    return servicePoints;
}
