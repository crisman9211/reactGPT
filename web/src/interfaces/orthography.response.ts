export interface OrthographyResponse {
  userScore: number;
  errors:    Error[];
  message:   string;
}

export interface Error {
  original:  string;
  corrected: string;
}
