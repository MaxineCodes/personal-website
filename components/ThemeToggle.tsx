"use client";

import { useState, useEffect } from "react";

type Theme = "base" | "moon" | "dawn";

const themes: { value: Theme; label: string; icon: string }[] = [
    { value: "base", label: "Base", icon: "🌙" },
    { value: "moon", label: "Moon", icon: "🌗" },
    { value: "dawn", label: "Dawn", icon: "☀️" },
];

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("base");
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme") as Theme | null;
        if (saved && themes.some((t) => t.value === saved)) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        } else {
            document.documentElement.setAttribute("data-theme", "base");
        }
    }, []);

    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        setOpen(false);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    if (!mounted) {
        return (
            <button className="rounded-md p-2 text-[var(--color-text-light)]" aria-label="Theme">
                <span className="block h-5 w-5" />
            </button>
        );
    }

    const current = themes.find((t) => t.value === theme);

    return (
        <div className="relative">
            {/* Toggle button — shows current theme icon */}
            <button
                onClick={() => setOpen(!open)}
                className="rounded-md p-2 text-(--color-text) transition-colors hover:bg-(--color-surface)/50 hover:text-(--color-rose)"
                aria-label="Select theme"
                aria-expanded={open}
            >
                <span className="text-lg">{current?.icon}</span>
            </button>

            {/* Dropdown menu */}
            {open && (
                <>
                    {/* Click-outside backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setOpen(false)}
                    />

                    {/* Menu */}
                    <div
                        className="absolute right-0 z-50 mt-2 min-w-[140px] overflow-hidden rounded-lg shadow-xl"
                        style={{ backgroundColor: "var(--color-base)" }}
                    >
                        {themes.map((t) => (
                            <button
                                key={t.value}
                                onClick={() => changeTheme(t.value)}
                                className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                                    t.value === theme
                                        ? "text-(--color-rose)"
                                        : "text-(--color-text) hover:bg-(--color-surface)"
                                }`}
                            >
                                <span className="text-base">{t.icon}</span>
                                <span>{t.label}</span>
                                {t.value === theme && (
                                    <span className="ml-auto text-(--color-rose)">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
