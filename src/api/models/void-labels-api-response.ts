export interface VoidLabelsApiResponse {
    errorCode?: { text: string }
    errorMessage?: { text: string } | [{ text: string }]
    statusCode?: { text: string }
}