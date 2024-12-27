"use client";

import { useTheme } from "next-themes";
import { FC } from "react";
import clsx from "clsx";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleThemeToggle}
      className={clsx(
        "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
        theme === "light" ? "bg-yellow-500" : "bg-gray-800",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <SunFilledIcon size={24} />
      ) : (
        <MoonFilledIcon size={24} />
      )}
    </button>
  );
};
