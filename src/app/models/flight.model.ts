export interface Crew {
  job: string;
  name: string;
}

export interface Flight {
  additionalInformation: string;
  code: string;
  crew: [];
  departureTime: string;
  destination: string;
  origin: string;
  returnTime: string;
  key: string;
}

export interface Flights {
  flights: Flight[];
}
