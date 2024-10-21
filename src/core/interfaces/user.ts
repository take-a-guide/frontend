export interface UserData {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  user_type_id: number;
  isLogged: boolean;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserSignUpData {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface UserUpdateData {
  cpf: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
}

export interface UserDeleteData {
  cpf: string;
}
