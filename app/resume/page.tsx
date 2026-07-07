import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume — Maxine Meijboom",
    description: "Experience and qualifications of Maxine Meijboom, Software Developer & Technical 3D Artist.",
};

const education = [
    {
        title: "Software Engineering, Hanze University of Applied Sciences",
        period: "August 2025 - Present",
        details: ["Expected Graduation: 2029"],
        bullets: [
            "This website was built with the skills I have learned here. It's pretty great, I love learning.",
            "Currently a first year student. :)",
        ],
    },
];

const experience = [
    {
        title: "Unity Developer VR Graphics | SAVR B.V.",
        period: "Sep 2023 - Mar 2024",
        location: "Enschede, Overijssel, Netherlands",
        bullets: [
            "Implementing Oculus' built in VR tracking into the existing project.",
            "Optimising the Unity project disk size, as well as starting development on a custom render pipeline, designed to increase performance on WebGL for desktop and mobile with custom-built shaders and rendering features.",
        ],
    },
    {
        title: "Pipeline Technical Director | Katuni Animation",
        period: "August 2022 - Sep 2023",
        location: "Amsterdam, North Holland, Netherlands",
        bullets: [
            'Working on the technical pipeline side for the animated movie "Panda Bear in Africa," a co-production with the Danish AFilms.',
            "Responsibilities include:",
            "Maintaining and updating an animation pipeline.",
            "Setting up Shotgrid for animation film production.",
            "Tool development in Autodesk Maya.",
            "Writing and maintaining documentation.",
        ],
    },
];

const programmingSkills = [
    "C/C++", "Java", "OpenGL", "GLSL/HLSL", "Python", "Lua",
];

const dccSkills = [
    "ZBrush", "Blender", "Houdini", "Adobe Substance Suite",
    "Adobe Photoshop", "Adobe Illustrator", "Unity", "Unreal Engine 4/5",
];

export default function ResumePage() {
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
            <div
                className="card-dark p-6 shadow-lg mx-auto max-w-4xl px-4 py-8 sm:px-6"
                style={{ backgroundColor: "var(--color-bg-4)" }}>

                {/* ===== Page Header ===== */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-[var(--color-coral)] sm:text-4xl">
                        Resume
                    </h1>
                    <p className="mt-2 text-base text-[var(--color-bg-3)]">
                        My experience and qualifications
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    {/* ===== Left Column ===== */}
                    <div className="flex flex-col gap-6 md:col-span-2">

                        {/* Education Cards */}
                        <div className="card-light p-6 shadow-lg">
                            <h2 className="mb-4 text-xl font-semibold text-[var(--color-bg-0)]">
                                Education
                            </h2>
                            {education.map((edu) => (
                                <div key={edu.title}>
                                    <h3 className="text-base font-medium text-[var(--color-bg-0)]">
                                        {edu.title}
                                    </h3>
                                    <p className="mb-1 text-sm text-[var(--color-bg-3)]">{edu.period}</p>
                                    {edu.details.map((d) => (
                                        <p key={d} className="mb-3 text-sm text-[var(--color-bg-3)]">{d}</p>
                                    ))}
                                    {edu.bullets.map((b, i) => (
                                        <p key={i} className="mb-1 text-sm text-[var(--color-bg-0)]">
                                            {b}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Experience Cards */}
                        <div className="card-light p-4 shadow-lg flex flex-col gap-2">
                            <h2 className="text-xl font-semibold ">
                                Experience
                            </h2>
                            {experience.map((job) => (
                                <div key={job.title} className="card-light p-3 shadow-lg">
                                    <h3 className="text-base font-medium text-[var(--color-bg-0)]">
                                        {job.title}
                                    </h3>
                                    <p className="mb-1 text-sm text-[var(--color-bg-3)]">{job.period}</p>
                                    <p className="mb-3 text-sm text-[var(--color-bg-3)]">{job.location}</p>
                                    {job.bullets.map((b, i) => (
                                        <p key={i} className="mb-1 text-sm text-[var(--color-bg-0)]">
                                            {b}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== Right Column ===== */}
                    <div className="flex flex-col gap-6 md:col-span-1">

                        {/* Skills Card */}
                        <div className="card-light p-6 shadow-lg">
                            <h2 className="mb-4 text-xl font-semibold text-[var(--color-bg-0)]">
                                Skills
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="mb-1.5 text-xs font-semibold text-[var(--color-bg-3)]">
                                        Programming
                                    </h4>
                                    <ul className="space-y-1 text-sm text-[var(--color-bg-0)]">
                                        {programmingSkills.map((skill) => (
                                            <li key={skill}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="mb-1.5 text-xs font-semibold text-[var(--color-bg-3)]">
                                        3D DCC
                                    </h4>
                                    <ul className="space-y-1 text-sm text-[var(--color-bg-0)]">
                                        {dccSkills.map((skill) => (
                                            <li key={skill}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="card-light p-6 shadow-lg">
                            <h2 className="mb-4 text-xl font-semibold text-[var(--color-bg-0)]">
                                Contact
                            </h2>
                            <div className="space-y-1.5 text-sm text-[var(--color-bg-0)]">
                                <p>
                                    <span className="text-[var(--color-bg-3)]">E-Mail: </span>
                                    contact@ItsMaxine.eu
                                </p>
                                <p>
                                    <span className="text-[var(--color-bg-3)]">LinkedIn: </span>
                                    <Link
                                        href="https://www.linkedin.com/in/maxinemeijboom"
                                        className="text-[var(--color-secondary)] transition-colors hover:text-[var(--color-light-green)]"
                                    >
                                        linkedin.com/in/maxinemeijboom
                                    </Link>
                                </p>
                                <p>
                                    <span className="text-[var(--color-bg-3)]">Github: </span>
                                    <Link
                                        href="https://github.com/MaxineCodes"
                                        className="text-[var(--color-secondary)] transition-colors hover:text-[var(--color-light-green)]"
                                    >
                                        github.com/maxinecodes
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
