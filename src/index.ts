import { CarrierApp } from '@shipengine/connect-carrier-api';
import {
  Register, GetRates, CreateLabel, Track, VoidLabels, GetServicePoint, GetServicePoints
} from './methods';
import { Metadata } from './definitions';

export default new CarrierApp({
  Metadata,
  Register,
  GetRates,
  CreateLabel,
  Track,
  VoidLabels,
  GetServicePoint,
  GetServicePoints
})
