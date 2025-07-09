"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/schemas/auth";
import { useSignupStore } from "@/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { Button, CardContent, CardFooter, Input, Label } from "@/components/ui";

function Step6_Account() {
    const t = useTranslations("Forms.Signup");
    const schema = signupSchema(t).account;

    const { update, back, data } = useSignupStore();

    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: data.username,
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (values: FormData) => {
        update({ username: values.username, password: values.password });
        // TODO: send all data to your backend here
        alert("✅ Signup complete! You can now send the data to your API.");
    };

    return (
        <>
            <CardContent>
                <form
                    id="step6-form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="username">{t("fields.username")}</Label>
                        <Input
                            id="username"
                            autoComplete="username"
                            placeholder={t("fields.username")}
                            {...register("username")}
                        />
                        {errors.username && (
                            <span className="text-destructive text-sm">
                                {errors.username.message}
                            </span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">{t("fields.password")}</Label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="******"
                            {...register("password")}
                        />
                        {errors.password && (
                            <span className="text-destructive text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirmPassword">
                            {t("fields.confirmPassword")}
                        </Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="******"
                            autoComplete="new-password"
                            {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && (
                            <span className="text-destructive text-sm">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
                <Button
                    type="button"
                    onClick={back}
                    variant="outline"
                    className="w-full">
                    {t("buttons.back")}
                </Button>

                <Button type="submit" form="step6-form" className="w-full">
                    {t("buttons.submit")}
                </Button>
            </CardFooter>
        </>
    );
}

export default Step6_Account;
