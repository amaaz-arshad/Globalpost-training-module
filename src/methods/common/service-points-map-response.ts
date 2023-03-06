import { ServicePoint, WeeklyHoursOfOperation } from "@shipengine/connect-carrier-api/lib/models/service-points";
import { HoursOfOperation } from "@shipengine/connect-carrier-api/lib/models/service-points/hours-of-operation";
import { ListPoints, OperatingDays, OperatingHours } from "../../api/models/get-service-points-api-response";
import { isEmpty } from "../../helpers/utils";

const weekDays = new Map([
    [1, "monday"],
    [2, "tuesday"],
    [3, "wednesday"],
    [4, "thursday"],
    [5, "friday"],
    [6, "saturday"],
    [7, "sunday"],
]);

export function getServicePointsData(listPoints: ListPoints): ServicePoint {
    return {
        service_point_id: listPoints.identifiant?.text,
        address: {
            phone_number: "",
            company_name: listPoints.nom?.text ?? "",
            description: "",
            geo: {
                lat: Number(listPoints.coordGeolocalisationLatitude?.text) || null,
                long: Number(listPoints.coordGeolocalisationLongitude?.text) || null,
            },
            address_lines: [
                listPoints.adresse1?.text ?? "",
                listPoints.adresse2?.text ?? "",
                listPoints.adresse3?.text ?? "",
            ],
            postal_code: listPoints.codePostal?.text ?? "",
            city_locality: listPoints.localite?.text ?? "",
            state_province: listPoints.localite?.text ?? "",
            country_code: listPoints.codePays?.text ?? ""
        },
        hours_of_operation: getHoursOfOperation(listPoints.listeHoraireOuverture)
    }
}

function getHoursOfOperation(operatingDays: OperatingDays | OperatingDays[]): WeeklyHoursOfOperation {
    // if (isEmpty(operatingDays)) return null;
    if (!Array.isArray(operatingDays)) {
        operatingDays = [operatingDays];
    }
    const hoursOfOperation: WeeklyHoursOfOperation = {};
    const daysDone: number[] = [];
    operatingDays.forEach(operatingDay => {
        const day = Number(operatingDay?.jour?.text);
        if (operatingDay && day >= 1 && day <= 7) {
            daysDone.push(day);
            hoursOfOperation[weekDays.get(day)] = getOperatingHours(operatingDay.listeHoraireOuverture);
        }
    })
    for (let day = 1; day <= 7; day++) {
        if (!daysDone.includes(day)) {
            hoursOfOperation[weekDays.get(day)] = null;
        }
    }
    return hoursOfOperation;
}

function getOperatingHours(operatingHours: OperatingHours | OperatingHours[]): HoursOfOperation[] {
    if (isEmpty(operatingHours)) return null;
    if (!Array.isArray(operatingHours)) {
        return [getOperatingHoursData(operatingHours)];
    }
    const dailyOperatingHours: HoursOfOperation[] = [];
    operatingHours.forEach(hours => {
        dailyOperatingHours.push(getOperatingHoursData(hours));
    })
    return dailyOperatingHours;
}

function getOperatingHoursData(operatingHours: OperatingHours): HoursOfOperation {
    return {
        open: operatingHours?.debut?.text ?? "",
        close: operatingHours?.fin?.text ?? "",
    }
}
