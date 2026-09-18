"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function CompendiumHeader() {
    return (
        <header
            className="sticky top-0 z-50 w-full shadow-md backdrop-blur-sm"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-base) 100%, transparent)" }}
        >
            <nav className="mx-auto grid max-w-8xl grid-cols-2 items-center px-4 py-3 sm:px-6">
                {/* Brand (left cell) */}
                <div className="flex items-center justify-self-start gap-0">
                    <Link href="/"
                          className="text-lg font-bold text-(--color-rose) transition-colors hover:text-(--color-love)">
                        ItsMaxine.eu
                    </Link>

                    <span className="text-lg font-bold text-(--color-text)">  /  </span>

                    <Link href="/compendium"
                          className="text-lg font-semibold text-(--color-foam) transition-colors hover:text-(--color-pine)">
                        Compendium
                    </Link>
                </div>

                {/* Theme toggle (right cell) */}
                <div className="justify-self-end">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
