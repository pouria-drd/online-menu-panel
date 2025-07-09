import { z } from "zod";

const signupSchema = (t: (key: string) => string) => ({
    name: z.object({
        firstName: z.string().min(2, t("errors.firstName")),
        lastName: z.string().min(2, t("errors.lastName")),
    }),

    email: z.object({
        email: z.string().email(t("errors.email")),
    }),

    confirmCode: z.object({
        code: z.string().length(6, t("errors.code")),
    }),

    phone: z.object({
        // +98 or 09
        // phone: z.string().regex(/^(\+98|0)?9\d{9}$/, t("errors.phone")),
        // only +98
        phone: z
            .string()
            .length(10, t("errors.phone"))
            .regex(/^9\d{9}$/, t("errors.phone")),
    }),

    account: z
        .object({
            username: z
                .string()
                .min(3, t("errors.username"))
                .regex(/^[a-z]{3,}[a-z0-9_]*$/, t("errors.username"))
                .transform((val) => val.toLowerCase()),
            password: z.string().min(6, t("errors.password")),
            confirmPassword: z.string(),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: t("errors.confirmPassword"),
            path: ["confirmPassword"],
        }),
});

export default signupSchema;
