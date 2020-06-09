export interface Flight {
  additionalInformation: string;
  code: string;
  crew: string;
  departureTime: string;
  destination: string;
  origin: string;
  returnTime: string;
  key: string;
}

export interface Flights {
  flights: Flight[];
}
