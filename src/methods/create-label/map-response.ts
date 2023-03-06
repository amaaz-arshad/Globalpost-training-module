import { BillingCategories, CreateLabelResponse, DocumentFormat, DocumentType } from "@shipengine/connect-carrier-api";
import { CreateLabelApiResponse } from "../../api/models/create-label-api-response";
import { convertToISO } from "../../helpers/utils";
import { GlobalPostCreateLabelRequest } from "./gp-create-label-request";

export const mapResponse = (
    responseData: CreateLabelApiResponse,
    request: GlobalPostCreateLabelRequest,
    labelFormat: DocumentFormat
): CreateLabelResponse => {
    return {
        transaction_id: request.transaction_id,
        metadata: request.metadata,
        documents: getDocuments(responseData?.label, labelFormat),
        packages: [{
            alternative_identifiers: [{
                type: "shipment_id",
                value: responseData?.shipment_id ?? ""
            }],
            tracking_number: responseData?.tracking_number ?? ""
        }],
        tracking_number: responseData?.tracking_number ?? "",
        estimated_delivery_datetime: convertToISO(responseData?.shipment?.ship_date),
        billing_line_items: [{
            billing_category: BillingCategories.Shipping,
            amount: {
                amount: responseData?.total_amount?.toString() ?? "",
                currency: responseData?.currency ?? ""
            }
        }]
    };
};

const getDocuments = (labels: string[], labelFormat: DocumentFormat) => {
    const documents = [];
    labels?.forEach(label => {
        documents.push({
            type: [DocumentType.Label],
            data: label ?? "",
            format: labelFormat ?? "",
        })
    });
    return documents;
}