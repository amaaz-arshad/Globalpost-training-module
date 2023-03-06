export const GetServicePointsResponse = {
    status: 200,
    data: `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns1:recherchePointChronopostInterResponse xmlns:ns1="http://cxf.rechercheBt.soap.chronopost.fr/">
            <return>
                <errorCode>0</errorCode>
                <errorMessage>Code retour OK</errorMessage>
                <listePointRelais>
                    <accesPersonneMobiliteReduite>true</accesPersonneMobiliteReduite>
                    <actif>true</actif>
                    <adresse1>5 PLACE DE LESPLANADE</adresse1>
                    <adresse2></adresse2>
                    <adresse3></adresse3>
                    <codePays>FR</codePays>
                    <codePostal>31450</codePostal>
                    <coordGeolocalisationLatitude>43.4580555</coordGeolocalisationLatitude>
                    <coordGeolocalisationLongitude>1.57416666</coordGeolocalisationLongitude>
                    <distanceEnMetre>0</distanceEnMetre>
                    <identifiant>8197P</identifiant>
                    <indiceDeLocalisation></indiceDeLocalisation>
                    <listeHoraireOuverture>
                        <horairesAsString>08:00-12:30</horairesAsString>
                        <jour>2</jour>
                        <listeHoraireOuverture>
                            <debut>08:00</debut>
                            <fin>12:30</fin>
                        </listeHoraireOuverture>
                    </listeHoraireOuverture>
                    <listeHoraireOuverture>
                        <horairesAsString>09:00-11:45</horairesAsString>
                        <jour>4</jour>
                        <listeHoraireOuverture>
                            <debut>09:00</debut>
                            <fin>11:45</fin>
                        </listeHoraireOuverture>
                        <listeHoraireOuverture>
                            <debut>13:00</debut>
                            <fin>15:30</fin>
                        </listeHoraireOuverture>
                    </listeHoraireOuverture>
                </listePointRelais>
                <qualiteReponse>1</qualiteReponse>
                <wsRequestId></wsRequestId>
            </return>
        </ns1:recherchePointChronopostInterResponse>
    </soap:Body>
</soap:Envelope>
`
};