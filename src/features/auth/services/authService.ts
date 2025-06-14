import type { ChangePasswordData, ForgotPasswordData, LoginData } from "../types";

export const login = async (data: LoginData) => {
  console.log('Logging in with', data);
};

export const forgotPassword = async (data: ForgotPasswordData) => {
  console.log('Sending reset link to', data);
};

export const changePassword = async (data: ChangePasswordData) => {
  console.log('Changing password with', data);
};