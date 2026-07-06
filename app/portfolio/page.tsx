import Link from "next/link";
import Image from "next/image";

const recentProjects = [
    {
        id: 1,
        title: "Abandoned Environment",
        thumbnail: "/media/unfinished_environment_thumbnail.png",
    },
    {
        id: 2,
        title: "Bubbles RT",
        thumbnail: "/media/bubbles_rt_thumbnail.png",
    },
    {
        id: 3,
        title: "Book & Quill",
        thumbnail: "/media/booknquil_thumbnail.png",
    },
];

const recentBlogs = [
    {
        id: 1,
        title: "My First Blog Post",
        description: "Getting started with writing about what I learn.",
    },
    {
        id: 2,
        title: "Debian Setup Guide",
        description: "How I set up my Debian development environment.",
    },
    {
        id: 3,
        title: "Pika",
        description: "A quick render study.",
    },
];

const skills = {
    Development: [
        "C/C++", "Python", "PyMEL/MEL", "Lua", "HTML/CSS", "OpenGL",
        "Unity3D", "Unreal Engine 4/5", "Git", "Docker", "Linux", "Visual Studio", "PyCharm",
    ],
    "3D DCC": [
        "ZBrush", "Autodesk Maya", "Blender", "3DCoat", "Substance Painter",
        "Substance Designer", "Marmoset Toolbag", "Houdini", "Photoshop", "Illustrator", "Krita",
    ],
    "Project Management & Business": [
        "Scrum", "PowerBI", "GitHub Projects", "Jira", "Autodesk Shotgun", "Confluence",
    ],
};

const languages = [
    { label: "🇳🇱 Dutch", variant: "success" },
    { label: "🇬🇧 English", variant: "success" },
    { label: "Frisian", variant: "lavender" },
    { label: "🇯🇵 Japanese", variant: "lavender" },
    { label: "🇨🇳 Mandarin", variant: "warning" },
    { label: "🇩🇪 German", variant: "warning" },
];

const badgeVariants: Record<string, string> = {
    success: "bg-[#4ecdc4] text-[#221f2c]",
    warning: "bg-[#FFD166] text-[#221f2c]",
    lavender: "bg-[#E9D4FF] text-[#221f2c]",
};

export default function Home() {
    return (
        <div className="min-h-screen bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/pine-forest.svg')" }}>

            {/* ===== Hero / Full-Width Banner Section ===== */}
            <section className="relative flex min-h-[500px] w-screen flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 text-center">
                {/* Banner background — fills the entire section */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/images/banner.jpg"
                        alt="Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Hero content — sits above the banner */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                    {/* Avatar */}
                    <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white/20 shadow-lg">
                        <Image
                            src="/images/profile_icon.jpg"
                            alt="Maxine"
                            width={150}
                            height={150}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>

                    {/* Terminal typewriter greeting */}
                    <div
                        className="inline-block rounded-lg border border-white/10 px-5 py-3"
                        style={{ backgroundColor: "#221f2c" }}
                    >
                        <h1
                            className="overflow-hidden whitespace-nowrap border-r-2 border-[#FDFBF9] font-mono text-2xl text-[#FDFBF9] sm:text-3xl"
                            style={{
                                animation: "typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Hi, I am Maxine
                        </h1>
                    </div>

                    {/* Role badge */}
                    <p
                        className="inline-block rounded px-3 py-2 text-base text-[#FDFBF9]"
                        style={{ backgroundColor: "#221f2c" }}
                    >
                        Software Developer, Technical 3D Artist
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/portfolio"
                            className="rounded-lg bg-[#E3D2D0] px-6 py-3 font-medium text-[#221f2c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#59A67D] hover:shadow-lg"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-lg bg-[#E3D2D0] px-6 py-3 font-medium text-[#221f2c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#59A67D] hover:shadow-lg"
                        >
                            Say Hello
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== Content sections below the banner ===== */}
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">

                {/* ===== About Me Section ===== */}
                <section className="mt-10">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Text card */}
                        <div className="rounded-2xl bg-[#232137] p-8 text-[#FDFBF9]">
                            <h2 className="mb-4 text-xl font-semibold">About Me</h2>
                            <p className="mb-3 text-base leading-relaxed text-[#CCCFE3]">
                                Hi, I&apos;m Maxine, a software developer from the Netherlands
                                with a huge passion for 3D graphics, rendering engines,
                                mathematics and optimization.
                            </p>
                            <p className="mb-3 text-sm leading-relaxed text-[#CCCFE3]">
                                Currently studying Software Engineering at the Hanze University
                                of Applied Science.
                            </p>
                            <p className="mb-3 text-sm leading-relaxed text-[#CCCFE3]">
                                Having started as a freelancer in 3D game art and moving more
                                towards programming as time goes on, I see myself as a software
                                engineer who can bridge gaps between art and code.
                            </p>
                            <p className="text-sm leading-relaxed text-[#CCCFE3]">
                                Or simply put.. When artists and designers come up with crazy
                                impossible ideas, I come up with crazy implementations to make
                                it possible!
                            </p>

                            {/* Hobbies & Interests */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <h6 className="mb-2 text-xs font-semibold text-[#CCCFE3]/60">🎮 Hobbies</h6>
                                    <ul className="space-y-1 text-sm text-[#CCCFE3]">
                                        <li>Gaming</li>
                                        <li>3D Sculpting &amp; Texturing</li>
                                        <li>Swimming</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="mb-2 text-xs font-semibold text-[#CCCFE3]/60">🎵 Interests</h6>
                                    <ul className="space-y-1 text-sm text-[#CCCFE3]">
                                        <li>Animation &amp; Anime</li>
                                        <li>Coffee</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="mt-6">
                                <h6 className="mb-2 text-xs font-semibold text-[#CCCFE3]/60">🔠 Languages</h6>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((lang) => (
                                        <span
                                            key={lang.label}
                                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${badgeVariants[lang.variant]}`}
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

                {/* ===== Latest Work Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-[#E3D2D0]">Latest Work</h2>
                        <h4 className="text-sm text-[#CCCFE3]/60">Featured Projects</h4>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {recentProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group overflow-hidden rounded-xl bg-white/95 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-4">
                                    <h5 className="mb-3 font-medium text-[#221f2c]">{project.title}</h5>
                                    <Link
                                        href={`/portfolio/${project.id}`}
                                        className="inline-block rounded-lg bg-[#E3D2D0] px-4 py-2 text-sm font-medium text-[#221f2c] transition-colors hover:bg-[#59A67D]"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 text-center">
                        <Link
                            href="/portfolio"
                            className="inline-block rounded-lg bg-[#E3D2D0] px-6 py-3 font-medium text-[#221f2c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#59A67D] hover:shadow-lg"
                        >
                            View All Projects
                        </Link>
                    </div>
                </section>

                {/* ===== Latest Blogs Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-[#E3D2D0]">Latest Blogs</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {recentBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="rounded-xl bg-white/95 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <h5 className="mb-2 font-medium text-[#221f2c]">{blog.title}</h5>
                                <p className="mb-3 text-sm text-gray-600">{blog.description}</p>
                                <Link
                                    href={`/blog/${blog.id}`}
                                    className="inline-block rounded-lg bg-[#E3D2D0] px-4 py-2 text-sm font-medium text-[#221f2c] transition-colors hover:bg-[#59A67D]"
                                >
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 text-center">
                        <Link
                            href="/blog"
                            className="inline-block rounded-lg bg-[#E3D2D0] px-6 py-3 font-medium text-[#221f2c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#59A67D] hover:shadow-lg"
                        >
                            View All Posts →
                        </Link>
                    </div>
                </section>

                {/* ===== Skills Section ===== */}
                <section className="mt-12">
                    <div className="mb-6 text-center">
                        <h2 className="mb-2 text-2xl font-bold text-[#E3D2D0]">Skills</h2>
                        <h4 className="text-sm text-[#CCCFE3]/60">Tools and technologies I work with</h4>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {Object.entries(skills).map(([category, items]) => (
                            <div
                                key={category}
                                className="rounded-xl bg-white/95 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <h5 className="mb-3 font-medium text-[#221f2c]">{category}</h5>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-[#E9D4FF] px-3 py-1 text-xs font-medium text-[#221f2c]"
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
