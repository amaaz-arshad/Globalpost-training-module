export const TrackResponse = {
  status: 200,
  data: {
    tracking_results: [
      {
        shipment_id: "",
        tracking_number: "UM611212285US",
        transaction_id: "",
        service: "GlobalPost",
        ship_date: null,
        estimated_delivery_date: null,
        destination: {
          city: "Ottawa",
          state: "  ",
          province: "",
          postal_code: "ON",
          country: "CA"
        },
        status_code: "in_transit",
        status_description: null,
        tracking_history: [
          {
            event_time: "2022-04-25T15:10:00Z",
            event_code: "Shipment_tendered",
            event_description: "Shipping Label Created",
            event_location: {
              city: "",
              state: "",
              province: "",
              postal_code: "90245",
              country: "US"
            }
          },
          {
            event_time: "2022-04-25T15:10:00Z",
            event_code: "",
            event_description: "",
            event_location: {
              city: "",
              state: "",
              province: "",
              postal_code: "90245",
              country: "US"
            }
          }
        ],
        error: null
      }
    ],
    errors: []
  }
};