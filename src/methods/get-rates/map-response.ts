import { BillingCategories, GetRatesResponse, Rate } from "@shipengine/connect-carrier-api";
import { GetRatesApiResponse } from "../../api/models/get-rates-api-response";
import { convertToISO } from "../../helpers/utils";
import { GlobalPostGetRatesRequest } from "./gp-get-rates-request";

export const mapResponse = (
    request: GlobalPostGetRatesRequest,
    responseData: GetRatesApiResponse
): GetRatesResponse => {
    return {
        rates: getRates(request, responseData)
    };
};

const getRates = (request: GlobalPostGetRatesRequest, data: GetRatesApiResponse): Rate[] => {
    const requiredRates: Rate[] = [];
    data?.rates?.forEach(rate => {
        requiredRates.push({
            service_code: rate?.service ?? "",
            ship_datetime: convertToISO(request.ship_datetime),
            estimated_delivery_datetime: convertToISO(rate?.delivery_date),
            negotiated_rate: false,
            billing_line_items: [{
                billing_category: BillingCategories.Shipping,
                amount: {
                    amount: rate?.price?.toString() ?? "",
                    currency: data?.currency ?? ""
                }
            }]
        })
    });
    return requiredRates;
}