"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Label, Switch } from "@/components/ui";

function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const t = useTranslations("Components.ThemeSwitch");

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className="flex items-center justify-center gap-2 w-fit l2r">
            <Switch
                id="dark-mode"
                onClick={toggleTheme}
                checked={theme === "dark"}
                className="cursor-pointer"
            />
            <Label htmlFor="dark-mode" className="cursor-pointer">
                {t("text")}
            </Label>
        </div>
    );
}

export default ThemeSwitch;
