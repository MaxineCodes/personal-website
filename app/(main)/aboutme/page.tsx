import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/libraries/projectParser";
import ProjectCard from "@/components/ProjectCard";

const skills = {
    "Development": [
        "C/C++", "Python", "PyMEL/MEL", "Lua", "HTML/CSS", "OpenGL",
        "Unity3D", "Unreal Engine 4/5", "Git", "Docker", "Linux",
        "Visual Studio", "PyCharm",
    ],
    "Digital Content Creation": [
        "ZBrush", "Autodesk Maya", "Blender", "3DCoat", "Substance Painter",
        "Substance Designer", "Marmoset Toolbag", "Houdini", "Photoshop",
        "Illustrator", "Krita",
    ],
    "Project Management & Business": [
        "Scrum", "PowerBI", "GitHub Projects", "Jira", "Autodesk Shotgun",
        "Confluence",
    ],
};

const languages = [
    { label: "🇳🇱 Dutch", color: "var(--color-success)" },
    { label: "🇬🇧 English", color: "var(--color-success)" },
    { label: "Frisian", color: "var(--color-lavender)" },
    { label: "🇯🇵 Japanese", color: "var(--color-lavender)" },
    { label: "🇩🇪 German", color: "var(--color-lavender)" },
    { label: "🇨🇳 Mandarin", color: "var(--color-warning)" },
];

export default function Home() {
    // Get featured projects from .md files
    const allProjects = getAllProjects();
    const featuredProjects = allProjects
        .filter((p) => p.featured)
        .slice(0, 3);
    // Fallback: if no featured projects, show the 3 most recent
    const projectsToShow = featuredProjects.length > 0
        ? featuredProjects
        : allProjects.slice(0, 48);

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-bg-darker)",
                backgroundImage: "url('/images/pine-forest.svg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
        }}>
            {/* ===== Hero / Full-Width Banner Section ===== */}
            <section className="relative flex min-h-[500px] w-screen flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 text-center">
                {/* Banner background */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/images/banner.jpg"
                        alt="Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Hero content */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                    {/* Avatar */}
                    <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-[var(--color-bg-3)]/30 shadow-lg">
                        <Image
                            src="/images/profile_icon.jpg"
                            alt="Profile-Icon"
                            width={150}
                            height={150}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>

                    {/* Terminal typewriter greeting */}
                    <div className="terminal">
                        <h1 className="typewriter text-2xl sm:text-3xl">
                            Hi, I am Maxine
                        </h1>
                    </div>

                    {/* Role badge */}
                    <p
                        className="inline-block rounded px-3 py-2 text-base text-[var(--color-text-light)]"
                        style={{ backgroundColor: "var(--color-bg-0)" }}
                    >
                        Software Developer, Technical 3D Artist
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/portfolio"
                            className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg-0)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-light-green)] hover:shadow-lg"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg-0)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-light-green)] hover:shadow-lg"
                        >
                            Say Hello
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== Content sections below the banner ===== */}
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

                {/* ===== About Me Section ===== */}
                <section className="mt-10">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Text card */}
                        <div className="card-dark p-8">
                            <h2 className="mb-4 text-xl font-semibold text-[var(--color-primary)]">
                                About Me
                            </h2>
                            <p className="mb-3 text-base leading-relaxed text-[var(--color-text-light)]">
                                Hi, I&apos;m Maxine, a software developer from the Netherlands
                                with a huge passion for 3D graphics, rendering engines,
                                mathematics and optimization.
                            </p>
                            <p className="mb-3 text-sm leading-relaxed text-[var(--color-bg-4)]">
                                Currently studying Software Engineering at the Hanze University
                                of Applied Science.
                            </p>
                            <p className="mb-3 text-sm leading-relaxed text-[var(--color-bg-4)]">
                                Having started as a freelancer in 3D game art and moving more
                                towards programming as time goes on, I see myself as a software
                                engineer who can bridge gaps between art and code.
                            </p>
                            <p className="text-sm leading-relaxed text-[var(--color-bg-4)]">
                                Or simply put.. When artists and designers come up with crazy
                                impossible ideas, I come up with crazy implementations to make
                                it possible!
                            </p>

                            {/* Hobbies & Interests */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <h6 className="mb-2 text-xs font-semibold text-[var(--color-bg-3)]">
                                        🎮 Hobbies
                                    </h6>
                                    <ul className="space-y-1 text-sm text-[var(--color-text-light)]">
                                        <li>Gaming</li>
                                        <li>3D Sculpting &amp; Texturing</li>
                                        <li>Swimming</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="mb-2 text-xs font-semibold text-[var(--color-bg-3)]">
                                        🎵 Interests
                                    </h6>
                                    <ul className="space-y-1 text-sm text-[var(--color-text-light)]">
                                        <li>Animation &amp; Anime</li>
                                        <li>Coffee</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="mt-6">
                                <h6 className="mb-2 text-xs font-semibold text-[var(--color-bg-3)]">
                                    🔠 Languages
                                </h6>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((lang) => (
                                        <span
                                            key={lang.label}
                                            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-[var(--color-bg-0)]"
                                            style={{ backgroundColor: lang.color }}
                                        >
                                            {lang.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Profile image */}
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src="/images/character.jpg"
                                alt="Maxine"
                                width={600}
                                height={800}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* ===== Featured Projects Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                            Latest Work
                        </h2>
                        <h4 className="text-sm text-[var(--color-bg-3)]">
                            Featured Projects
                        </h4>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {projectsToShow.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                maxTags={2}
                            />
                        ))}
                    </div>

                    <div className="mt-4 text-center">
                        <Link
                            href="/portfolio"
                            className="inline-block rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg-0)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-light-green)] hover:shadow-lg"
                        >
                            {"<"} View All Projects {">"}
                        </Link>
                    </div>
                </section>

                {/* ===== Latest Blogs Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                            Latest Blogs
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Placeholder — replace with blog parser when ready */}
                        <div className="card-dark p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <h5 className="mb-2 font-medium text-[var(--color-primary)]">
                                Blog posts coming soon
                            </h5>
                            <p className="mb-3 text-sm text-[var(--color-bg-3)]">
                                I&apos;m working on writing about what I learn. Check back soon!
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <Link
                            href="/blog"
                            className="inline-block rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg-0)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-light-green)] hover:shadow-lg"
                        >
                            {"<"} View All Blog Posts {">"}
                        </Link>
                    </div>
                </section>

                {/* ===== Skills Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                            Skills
                        </h2>
                        <h4 className="text-sm text-[var(--color-bg-3)]">
                            Tools and technologies I work with
                        </h4>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {Object.entries(skills).map(([category, items]) => (
                            <div
                                key={category}
                                className="card-dark p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <h5 className="mb-3 font-medium text-[var(--color-primary)]">
                                    {category}
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-[var(--color-bg-2)] px-3 py-1 text-xs font-medium text-[var(--color-text-light)]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
