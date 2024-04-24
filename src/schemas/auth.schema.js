import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
});

export const registerSchema = z.object({
    username: z.string({
            required_error: "Username is required",
    }),
    email: z
        .string({
            required_error: "email is required",
        })
        .email({
            message: "Please enter a valid email address",
        }),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min (6,{
            message:"Must be at least 6 characters"
        }),
});