export interface GetServicePointsApiResponse {
    errorCode?: { text: string }
    errorMessage?: { text: string }
    listePointRelais?: ListPoints | ListPoints[]
    qualiteReponse?: { text: string }
    wsRequestId?: { text: string }
}

export interface ListPoints {
    accesPersonneMobiliteReduite?: { text: boolean }
    actif?: { text: boolean }
    nom?: { text: string }
    adresse1?: { text: string }
    adresse2?: { text: string }
    adresse3?: { text: string }
    codePays: { text: string }
    codePostal: { text: string }
    localite?: { text: string }
    coordGeolocalisationLatitude?: { text: string }
    coordGeolocalisationLongitude?: { text: string }
    distanceEnMetre?: { text: string }
    identifiant?: { text: string }
    indiceDeLocalisation?: { text: string }
    listeHoraireOuverture: OperatingDays | OperatingDays[]
}

export interface OperatingDays {
    horairesAsString?: { text: string }
    jour?: { text: string }
    listeHoraireOuverture?: OperatingHours | OperatingHours[]
}

export interface OperatingHours {
    debut?: { text: string }
    fin?: { text: string }
}