export const LoginFormFields = {
  EMAIL: "email",
  PASSWORD: "password",
} as const;

export type LoginFormField = (typeof LoginFormFields)[keyof typeof LoginFormFields];

export type ValidationFn = (value: string) => string | null;
