import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    email: z.string().email().max(50, "Email must be at most 50 characters"),
    password: z
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email().max(50, "Email must be at most 50 characters"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(20, "Password must be at most 20 characters"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TLoginSchema = z.infer<typeof loginSchema>;

export type TUser = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type TLogin = {
  email: string;
  password: string;
};
