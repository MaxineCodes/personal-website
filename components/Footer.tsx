import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="text-(--color-text)"
            style={{ backgroundColor: "var(--color-base)" }}>

            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col justify-between gap-8 md:flex-row">
                    {/* Brand section */}
                    <div>
                        <Link href="/">
                            <h3 className="text-lg font-semibold text-(--color-rose) transition-colors hover:text-(--color-love)">
                                ItsMaxine.eu
                            </h3>
                        </Link>
                        <p className="mt-2 text-sm">Maxine Meijboom</p>
                        <p className="mt-1 text-sm (--color-overlay)">
                            Software Developer &amp; Technical 3D Artist
                        </p>
                    </div>

                    {/* About Me section */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/aboutme">
                            <h3 className="text-lg font-semibold text-(--color-rose) transition-colors hover:text-(--color-love)">
                                About Me
                            </h3>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="transition-colors hover:text-(--color-rose)">
                            Portfolio
                        </Link>
                        <Link
                            href="/resume"
                            className="transition-colors hover:text-(--color-rose)">
                            Resume
                        </Link>
                        <Link
                            href="/contact"
                            className="transition-colors hover:text-(--color-rose)">
                            Contact
                        </Link>
                    </nav>

                    {/* Compendium section */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/compendium">
                            <h3 className="text-lg font-semibold text-(--color-rose) transition-colors hover:text-(--color-love)">
                                Compendium
                            </h3>
                        </Link>
                        <Link
                            href="/compendium"
                            className="transition-colors hover:text-(--color-rose)">
                            Currently Unavailable
                        </Link>
                    </nav>

                    {/* Connect section */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/contact">
                            <h3 className="text-lg font-semibold text-(--color-rose) transition-colors hover:text-(--color-love)">
                                Connect
                            </h3>
                        </Link>
                        <p className="">contact@ItsMaxine.eu</p>
                        <Link
                            href="https://www.linkedin.com/in/maxinemeijboom"
                            className="transition-colors text-(--color-foam)  hover:text-(--color-pine)">
                            linkedin.com/in/maxinemeijboom
                        </Link>
                        <Link
                            href="https://github.com/MaxineCodes"
                            className="transition-colors text-(--color-foam) hover:text-(--color-pine)">
                            github.com/MaxineCodes
                        </Link>
                        <Link
                            href="https://www.artstation.com/maxine3d"
                            className="transition-colors text-(--color-foam)  hover:text-(--color-pine)">
                            artstation.com/maxine3D
                        </Link>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 text-center">
                    <hr
                        className="border-0"
                        style={{ borderTop: "1px solid var(--color-muted)" }}
                    />
                    <p className="mt-4 text-sm text-(--color-muted)">
                        © {currentYear} Maxine Meijboom. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
