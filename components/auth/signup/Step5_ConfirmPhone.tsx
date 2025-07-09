"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/schemas/auth";
import { useSignupStore } from "@/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { Button, CardContent, CardFooter, Input, Label } from "@/components/ui";

export default function Step5_ConfirmPhone() {
    const t = useTranslations("Forms.Signup");
    const schema = signupSchema(t).confirmCode;
    const { update, next, back, data } = useSignupStore();

    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (values: FormData) => {
        const mockCode = "123456";
        if (values.code !== mockCode) {
            setError("code", { message: t("errors.code") });
            return;
        }

        update({ phoneVerified: true });
        next();
    };

    return (
        <>
            <CardContent>
                <form id="step5-form" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-sm text-muted-foreground mb-2">
                        {t("steps.5")}: {data.phone}
                    </p>
                    <div className="grid gap-2">
                        <Label htmlFor="phone-code">{t("fields.code")}</Label>
                        <Input
                            id="phone-code"
                            type="number"
                            placeholder="123456"
                            autoComplete="one-time-code"
                            {...register("code")}
                        />
                        {errors.code && (
                            <span className="text-destructive text-sm">
                                {errors.code.message}
                            </span>
                        )}
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
                <Button type="submit" form="step5-form" className="w-full">
                    {t("buttons.next")}
                </Button>
                <Button
                    type="button"
                    onClick={back}
                    variant="outline"
                    className="w-full">
                    {t("buttons.back")}
                </Button>
            </CardFooter>
        </>
    );
}
