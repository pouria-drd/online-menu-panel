"use client";

import { useTranslations } from "next-intl";
import { useSignupStore } from "@/stores/auth";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import {
    Step1_Name,
    Step2_Email,
    Step3_ConfirmEmail,
    Step4_Phone,
    Step5_ConfirmPhone,
    Step6_Account,
} from "@/components/auth/signup";

export default function SignupPage() {
    const t = useTranslations("Forms.Signup");
    const step = useSignupStore((s) => s.step);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1_Name />;

            case 2:
                return <Step2_Email />;

            case 3:
                return <Step3_ConfirmEmail />;

            case 4:
                return <Step4_Phone />;

            case 5:
                return <Step5_ConfirmPhone />;

            case 6:
                return <Step6_Account />;

            default:
                return <Step1_Name />;
        }
    };

    return (
        <div className="min-h-dvh flex items-center justify-center  p-4">
            <Card>
                <CardHeader>
                    <CardTitle>{t("title")}</CardTitle>
                    <CardDescription>{t("description")}</CardDescription>
                </CardHeader>
                {renderStep()}
            </Card>
        </div>
    );
}
