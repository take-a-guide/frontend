import { api } from '@/configs/rest/api';

import {
  UserLoginData,
  UserSignUpData,
  UserUpdateData,
  UserDeleteData,
} from '@/core/interfaces/user';

const login = async (data: UserLoginData) => {
  const response = await api.post(`/user/login`, data);
  return response.data.user;
};

const signUp = async (data: UserSignUpData) => {
  const response = await api.post(`/user/create`, data);
  console.log('response', response);
  return response;
};

const update = async (data: UserUpdateData) => {
  return await api.put(`/user/change`, data);
};

const del = async (data: UserDeleteData) => {
  return await api.delete(`/user/remove`, { data: data });
};

export const userServices = {
  login,
  signUp,
  update,
  del,
};
