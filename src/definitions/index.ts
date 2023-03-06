import { CarrierAppMetadata } from '@shipengine/connect-carrier-api';
import { GlobalPostCarrier } from './global-post';

export const Metadata: CarrierAppMetadata = {
  // DO NOT CHANGE THIS ID AFTER PUBLISHING
  Id: "01f34734-4fb3-4c6a-a878-ab86c492daca",
  Name: "Globalpost",
  Carriers: [GlobalPostCarrier],
};
