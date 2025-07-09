"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/schemas/auth";
import { useSignupStore } from "@/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { Button, CardContent, CardFooter, Input, Label } from "@/components/ui";

function Step4_Phone() {
    const locale = useLocale();

    const t = useTranslations("Forms.Signup");
    const schema = signupSchema(t).phone;

    const { update, next, back, data } = useSignupStore();

    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            phone: data.phone,
        },
    });

    const onSubmit = (values: FormData) => {
        const fullPhone = `+98${values.phone}`;
        update({ phone: fullPhone });
        next();
    };

    return (
        <>
            <CardContent>
                <form id="step4-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2 l2r">
                        <Label
                            htmlFor="phone"
                            className={`${locale === "fa" ? "r2l" : "l2r"}`}>
                            {t("fields.phone")}
                        </Label>
                        <div className="flex items-center gap-2">
                            <span
                                className="p-1 aspect-square bg-muted border border-input
                                flex items-center justify-center
                                rounded-md text-sm text-center text-muted-foreground">
                                +98
                            </span>
                            <Input
                                id="phone"
                                type="tel"
                                autoComplete="tel"
                                placeholder="9123456789"
                                {...register("phone")}
                                className="flex-1"
                            />
                        </div>
                        {errors.phone && (
                            <span className="text-destructive text-sm">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
                <Button type="submit" form="step4-form" className="w-full">
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

export default Step4_Phone;
