import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Brand section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">ItsMaxine.eu</h3>
                        <p className="mt-2 text-sm">Maxine Meijboom</p>
                        <p className="mt-2 text-sm">Software Developer & Technical 3D Artist</p>
                    </div>

                    {/* Links section */}
                    <nav className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-white">Navigation</h3>
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                        <Link href="/resume" className="hover:text-white transition-colors">Resume</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </nav>

                    {/* Connect section */}
                    <nav className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-white">Connect</h3>
                        <p className="">contact@ItsMaxine.eu</p>
                        <Link href="https://www.linkedin.com/in/maxinemeijboom" className="hover:text-white transition-colors">linkedin.com/in/maxinemeijboom</Link>
                        <Link href="https://github.com/MaxineCodes" className="hover:text-white transition-colors">github.com/MaxineCodes</Link>
                        <Link href="https://www.artstation.com/maxine3d" className="hover:text-white transition-colors">artstation.com/maxine3D</Link>
                    </nav>
                </div>
                <center>
                    <br></br>
                    <hr></hr>
                    <p className="mt-2 text-sm">© {currentYear} Maxine Meijboom. All rights reserved.</p>
                </center>
            </div>
        </footer>
    );
}
