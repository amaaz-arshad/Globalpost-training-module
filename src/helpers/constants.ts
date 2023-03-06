export const BASE_URL = process.env.GLOBAL_POST_API_URL || "http://localhost:5000";
export const CARRIER_URL = "https://www.example.com/carrier/";
export const CARRIER_TRACKING_URL = "https://www.example.com/track/";

export const REGISTER_ENDPOINT = "api/users";
export const CREATE_LABEL_ENDPOINT = "api/shipments";
export const GET_RATES_ENDPOINT = "api/rates";
export const TRACK_ENDPOINT = "api/tracking";
export const GET_SERVICE_POINTS_ENDPOINT = "recherchebt-ws-cxf/PointRelaisServiceWSs";
export const GET_SERVICE_POINT_ENDPOINT = "recherchebt-ws-cxf/PointRelaisServiceWS";
export const VOID_LABELS_ENDPOINT = "tracking-cxf/TrackingServiceWS";

export const AES_SECRET_KEY = "f53c50e4ab798944a4debe237ec8ba67";
export const AES_IV = "f53c50e4ab798944";

export enum CarrierApiOperation {
    Register = "authentication",
    CreateLabel = "shipment",
    GetRates = "ratings",
    Track = "track",
    GetServicePoints = "get-service-points",
    GetServicePoint = "get-service-point",
    VoidLabels = "cancel-shipment"
}

export enum MethodName {
    ServicePointsByAddress = "cxf:recherchePointChronopostInter",
    ServicePointsByAddressResponse = "ns1:recherchePointChronopostInterResponse",
    ServicePointsByLatLong = "cxf:recherchePointChronopostParCoordonneesGeographiques",
    ServicePointsByLatLongResponse = "ns1:recherchePointChronopostParCoordonneesGeographiquesResponse",
    ServicePointById = "cxf:rechercheDetailPointChronopostInter",
    ServicePointByIdResponse = "ns1:rechercheDetailPointChronopostInterResponse",
    VoidLabels = "cxf:cancelSkybill",
    VoidLabelsResponse = "ns2:cancelSkybillResponse"
}

export const SOAPENV_XML_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
export const SERVICE_POINTS_NAMESPACE = "http://cxf.rechercheBt.soap.chronopost.fr/";
export const VOID_LABELS_NAMESPACE = "http://cxf.tracking.soap.chronopost.fr/";

// export const XML_OPENING_TAGS = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cxf="http://cxf.rechercheBt.soap.chronopost.fr/"><soapenv:Header/><soapenv:Body>`;
// export const XML_CLOSING_TAGS = `</soapenv:Body></soapenv:Envelope>`;
