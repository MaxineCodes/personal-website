import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="text-[var(--color-text-light)]"
            style={{ backgroundColor: "var(--color-bg-0)" }}>

            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col justify-between gap-8 md:flex-row">
                    {/* Brand section */}
                    <div>
                        <Link href="/">
                            <h3 className="text-lg font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-pink)]">
                                ItsMaxine.eu
                            </h3>
                        </Link>
                        <p className="mt-2 text-sm">Maxine Meijboom</p>
                        <p className="mt-1 text-sm text-[var(--color-bg-3)]">
                            Software Developer &amp; Technical 3D Artist
                        </p>
                    </div>

                    {/* About Me section */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/aboutme">
                            <h3 className="text-lg font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-pink)]">
                                About Me
                            </h3>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="transition-colors hover:text-[var(--color-primary)]">
                            Portfolio
                        </Link>
                        <Link
                            href="/resume"
                            className="transition-colors hover:text-[var(--color-primary)]">
                            Resume
                        </Link>
                        <Link
                            href="/contact"
                            className="transition-colors hover:text-[var(--color-primary)]">
                            Contact
                        </Link>
                    </nav>

                    {/* Compendium section */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/compendium">
                            <h3 className="text-lg font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-pink)]">
                                Compendium
                            </h3>
                        </Link>
                        <Link
                            href="/compendium"
                            className="transition-colors hover:text-[var(--color-primary)]">
                            Currently Unavailable
                        </Link>
                    </nav>

                    {/* Connect section */}
                    <nav className="flex flex-col gap-2">
                        <Link href="/contact">
                            <h3 className="text-lg font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-pink)]">
                                Connect
                            </h3>
                        </Link>
                        <p className="">contact@ItsMaxine.eu</p>
                        <Link
                            href="https://www.linkedin.com/in/maxinemeijboom"
                            className="transition-colors text-[var(--color-light-green)] hover:text-[var(--color-secondary)]">
                            linkedin.com/in/maxinemeijboom
                        </Link>
                        <Link
                            href="https://github.com/MaxineCodes"
                            className="transition-colors text-[var(--color-light-green)] hover:text-[var(--color-secondary)]">
                            github.com/MaxineCodes
                        </Link>
                        <Link
                            href="https://www.artstation.com/maxine3d"
                            className="transition-colors text-[var(--color-light-green)] hover:text-[var(--color-secondary)]">
                            artstation.com/maxine3D
                        </Link>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 text-center">
                    <hr
                        className="border-0"
                        style={{ borderTop: "1px solid var(--color-bg-3)" }}
                    />
                    <p className="mt-4 text-sm text-[var(--color-bg-3)]">
                        © {currentYear} Maxine Meijboom. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
