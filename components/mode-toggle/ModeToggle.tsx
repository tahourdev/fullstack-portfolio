"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { IoIosSunny } from "react-icons/io";
import { RxMoon } from "react-icons/rx";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            variant="outline"
            type="button"
            size="icon"
            // className='border-[1px] border-solid border-border'
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <IoIosSunny size={24} className="hidden text-2xl dark:block dark:text-primary font-bold" />
            <RxMoon size={24} className="text-2xl text-neutral-800 dark:hidden dark:text-neutral-200" />
        </Button>
    );
}
