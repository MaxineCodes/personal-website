"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
    { href: "/aboutme", label: "About Me" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-50 w-full shadow-md backdrop-blur-sm"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-base) 85%, transparent)" }}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
                {/* Brand */}
                <Link href="/"
                    className="text-lg font-bold text-(--color-rose) transition-colors hover:text-(--color-love)">
                    ItsMaxine.eu
                </Link>

                {/* Desktop nav */}
                <div className="hidden gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                    isActive
                                        ? "bg-(--color-surface) text-(--color-rose)"
                                        : "text-(--color-text) hover:bg-(--color-surface)/50 hover:text-(--color-rose)"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                </div>

                {/* Mobile hamburger button */}
                <ThemeToggle />
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="rounded-md p-2 text-(--color-text) transition-colors hover:bg-(--color-surface) md:hidden"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {mobileOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            {mobileOpen && (
                <div className="md:hidden">
                    <div
                        className="flex flex-col gap-1 px-4 pb-4 sm:px-6"
                        style={{ backgroundColor: "var(--color-bg-0)" }}
                    >
                        {navLinks.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-(--color-surface) text-(--color-rose)"
                                            : "text-(--color-text) hover:bg-(--color-surface)/50 hover:text-(--color-rose)"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}
