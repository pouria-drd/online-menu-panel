"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { signupSchema } from "@/schemas/auth";
import { useSignupStore } from "@/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, CardContent, CardFooter, Input, Label } from "@/components/ui";

function Step1_Name() {
    const t = useTranslations("Forms.Signup");
    const schema = signupSchema(t).name;

    const { update, next, data } = useSignupStore();

    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName,
        },
    });

    const onSubmit = (values: FormData) => {
        update(values);
        next();
    };

    return (
        <>
            <CardContent>
                <form id="step1-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="firstName">
                                {t("fields.firstName")}
                            </Label>
                            <Input
                                id="firstName"
                                autoComplete="given-name"
                                placeholder={t("fields.firstName")}
                                {...register("firstName")}
                            />
                            {errors.firstName && (
                                <span className="text-red-400 text-sm">
                                    {errors.firstName.message}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="lastName">
                                {t("fields.lastName")}
                            </Label>
                            <Input
                                id="lastName"
                                autoComplete="family-name"
                                placeholder={t("fields.lastName")}
                                {...register("lastName")}
                            />
                            {errors.lastName && (
                                <span className="text-destructive text-sm">
                                    {errors.lastName.message}
                                </span>
                            )}
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
                <Button type="submit" form="step1-form" className="w-full">
                    {t("buttons.next")}
                </Button>
            </CardFooter>
        </>
    );
}

export default Step1_Name;
