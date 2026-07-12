import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/libraries/projectParser";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import Spacer from "@/components/Spacer";

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
    { label: "🇳🇱 Dutch", color: "var(--color-foam)" },
    { label: "🇬🇧 English", color: "var(--color-foam)" },
    { label: "Frisian", color: "var(--color-iris)" },
    { label: "🇯🇵 Japanese", color: "var(--color-iris)" },
    { label: "🇩🇪 German", color: "var(--color-iris)" },
    { label: "🇨🇳 Mandarin", color: "var(--color-gold)" },
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

        /* Pine-Forest Wallpaper */
        <div className="pine-forest-bg min-h-screen">

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
                    <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-(--color-overlay)/30 shadow-lg">
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

                    {/* Title badge */}
                    <p
                        className="inline-block rounded px-3 py-2 text-base text-(--override-base-color-text)"
                        style={{ backgroundColor: "var(--override-base-color-base)" }}
                    >
                        Software Developer, Technical 3D Artist
                    </p>

                    {/* buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button text={"View My Work"} href={"/portfolio"} variant={"bold"}/>
                        <Button text={"Say Hello"} href={"/contact"} variant={"disabled"}/>
                    </div>
                </div>
            </section>

            {/* ===== Content sections below the banner ===== */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

                {/* ===== About Me Section ===== */}
                <section className="mt-10">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Text card */}
                        <div className="card p-8">
                            <h2 className="mb-4 text-xl font-semibold text-(--color-rose)">
                                About Me
                            </h2>
                            <p className="mb-3 text-base leading-relaxed">
                                Hi, I&apos;m Maxine, a software developer from the Netherlands
                                with a huge passion for 3D graphics, rendering engines,
                                mathematics and optimization.
                            </p>
                            <p className="mb-3 text-sm leading-relaxed">
                                Currently studying Software Engineering at the Hanze University
                                of Applied Science.
                            </p>
                            <p className="mb-3 text-sm leading-relaxed text-(--color-subtle)">
                                Having started as a freelancer in 3D game art and moving more
                                towards programming as time goes on, I see myself as a software
                                engineer who can bridge gaps between art and code.
                            </p>
                            <p className="text-sm leading-relaxed text-(--color-subtle)">
                                Or simply put.. When artists and designers come up with crazy
                                impossible ideas, I come up with crazy implementations to make
                                it possible!
                            </p>

                            {/* Hobbies & Interests */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <h6 className="mb-2 text-xs font-semibold (--color-overlay)">
                                        🎮 Hobbies
                                    </h6>
                                    <ul className="space-y-1 text-sm text-(--color-text)">
                                        <li>Gaming</li>
                                        <li>3D Sculpting &amp; Texturing</li>
                                        <li>Swimming</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="mb-2 text-xs font-semibold (--color-overlay)">
                                        🎵 Interests
                                    </h6>
                                    <ul className="space-y-1 text-sm text-(--color-text)">
                                        <li>Animation &amp; Anime</li>
                                        <li>Coffee</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="mt-6">
                                <h6 className="mb-2 text-xs font-semibold (--color-overlay)">
                                    🔠 Languages
                                </h6>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((lang) => (
                                        <span
                                            key={lang.label}
                                            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-(--color-highlight-low)"
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
                        <h2 className="mb-2 text-2xl font-bold text-(--color-rose)">
                            Latest Work
                        </h2>
                        <h4 className="text-sm (--color-overlay)">
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

                    <Button text={"View All Projects"} href={"/portfolio"}/>
                </section>

                {/* ===== Latest Blogs Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-(--color-rose)">
                            Latest Blogs
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Placeholder — replace with blog parser when ready */}
                        <div className="card p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <h5 className="mb-2 font-medium text-(--color-rose)">
                                Blog posts coming soon
                            </h5>
                            <p className="mb-3 text-sm (--color-overlay)">
                                I&apos;m working on writing about what I learn. Check back soon!
                            </p>
                        </div>
                    </div>

                    <Button text={"View all blogs!"} href={""} variant={"disabled"}/>
                </section>

                {/* ===== Skills Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-(--color-rose)">
                            Skills
                        </h2>
                        <h4 className="text-sm text-(--color-subtle)">
                            Tools and technologies I work with
                        </h4>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {Object.entries(skills).map(([category, items]) => (
                            <div
                                key={category}
                                className="card p-5 shadow-md transition-all duration-300">
                                <h5 className="mb-3 font-medium text-(--color-rose)">
                                    {category}
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-(--color-surface) px-3 py-1 text-xs font-medium text-(--color-text)"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== Spacer ===== */}
                <Spacer/>
            </div>
        </div>
    );
}
