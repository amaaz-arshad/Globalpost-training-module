export const VoidLabelsResponse = {
    status: 200,
    data: `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
       <ns2:cancelSkybillResponse xmlns:ns2="http://cxf.tracking.soap.chronopost.fr/">
          <return>
             <errorCode>0</errorCode>
             <statusCode>0</statusCode>
          </return>
       </ns2:cancelSkybillResponse>
    </soap:Body>
 </soap:Envelope>
 `
};