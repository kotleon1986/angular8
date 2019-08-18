export interface ApiResponse {
  success: boolean;
  message?: string | object;
  errors?: object;
  data?: object;
  token?: string;
}

export interface ErrorResponse {
  error: ApiResponse;
  status: number;
}

