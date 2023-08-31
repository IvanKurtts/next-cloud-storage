export interface LoginFormDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  token: string;
}

export type RegisterFormDto = {
  email: string;
  fullname: string;
  password: string;
};

export type RegisterResponseDto = LoginResponseDto;

export interface User {
  id: number;
  email: string;
  fullname: string;
  password: string;
}
