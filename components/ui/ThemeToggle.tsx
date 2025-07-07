"use client";

import { Button } from "./button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <Button
            onClick={toggleTheme}
            size={"icon"}
            variant={"outline"}
            className="rounded-full  text-black dark:text-white">
            <FaSun className="absolute w-10 h-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />

            <FaMoon className="absolute w-10 h-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </Button>
    );
}

export default ThemeToggle;
