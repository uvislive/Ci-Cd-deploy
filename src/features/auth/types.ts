// features/auth/types.ts
export type LoginData = {
  email: string;
  password: string;
};

export type ForgotPasswordData = {
  email: string;
};

export type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
};
