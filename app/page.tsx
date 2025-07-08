"use client";

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import {
    LanguageSwitcher,
    ThemeSwitch,
    ThemeToggle,
} from "@/components/shared/settings";

function RootPage() {
    const t = useTranslations("RootPage");

    return (
        <div
            className="min-h-dvh flex items-center justify-center 
            transition-all duration-300">
            <div className="max-w-3xl space-y-10">
                <h1 className="text-6xl font-semibold">Next.js Dark Mode</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, quia. Debitis repellendus quia repudiandae aspernatur,
                    ullam a molestiae voluptate harum? Nemo illo dignissimos
                    sunt molestiae culpa reprehenderit veniam in sapiente.
                </p>

                <div className="space-x-2">
                    <Button>Button 1</Button>
                    <Button variant="secondary">Button 2</Button>
                </div>

                <ThemeToggle />

                <ThemeSwitch />

                <div>
                    <p>Lang</p>
                    <p className="font-iran-yekan-x">{t("title")}</p>
                </div>

                <LanguageSwitcher />
            </div>
        </div>
    );
}

export default RootPage;
