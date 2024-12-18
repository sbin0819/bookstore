export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface SignupBody {
  email: string;
  password: string;
  username: string;
}

export type SignupResponse = LoginResponse;
