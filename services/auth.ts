import {
  LoginBody,
  LoginResponse,
  SignupBody,
  SignupResponse,
} from '@/types/auth';

import { baseApiInstance } from './base';

const apiPrefix = '/auth';

export const getMe = () => baseApiInstance.get(`${apiPrefix}/me`);

export const login = (data: LoginBody) =>
  baseApiInstance.post<LoginResponse>(`${apiPrefix}/login`, {
    ...data,
  });

export const signup = (data: SignupBody) =>
  baseApiInstance.post<SignupResponse>(`${apiPrefix}/signup`, {
    ...data,
  });

export const logout = () => baseApiInstance.post(`${apiPrefix}/logout`);
