export interface AppState {
  isLoading: boolean;
  userInput: {};
  data: API_RESPONSE;
}

export interface API_OPTIONS {
  lon?: string;
  lat?: string;
  date?: string;
  dim?: number;
  cloud_score?: string;
  dataset?: string;
  address?: string;
}

export interface API_RESPONSE {
  date: string;
  id: string;
  resource: { dataset: string; planet: string };
  service_version: string;
  url: string;
}
