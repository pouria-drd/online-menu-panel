"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { signupSchema } from "@/schemas/auth";
import { useSignupStore } from "@/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, CardContent, CardFooter, Input, Label } from "@/components/ui";

function Step2_Email() {
    const t = useTranslations("Forms.Signup");
    const schema = signupSchema(t).email;

    const { update, next, back, data } = useSignupStore();

    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: data.email,
        },
    });

    const onSubmit = (values: FormData) => {
        update(values);
        next();
    };

    return (
        <>
            <CardContent>
                <form id="step2-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <Label htmlFor="email">{t("fields.email")}</Label>
                        <Input
                            id="email"
                            autoComplete="email"
                            placeholder={t("fields.email")}
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="text-destructive text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
                <Button type="submit" form="step2-form" className="w-full">
                    {t("buttons.next")}
                </Button>
                <Button
                    variant="outline"
                    onClick={back}
                    type="button"
                    className="w-full">
                    {t("buttons.back")}
                </Button>
            </CardFooter>
        </>
    );
}
export default Step2_Email;
