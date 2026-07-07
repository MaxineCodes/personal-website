import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProjectSlugs, getProjectBySlug } from "@/libraries/projectParser";
import type { Metadata } from "next";

export function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `Maxine Meijboom: ${project.title}`,
        description: project.description,
    };
}

export default async function ProjectPage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-bg-darker)",
                backgroundImage: "radial-gradient(var(--color-bg-dark) 2px, transparent 3px)",
                backgroundSize: "20px 20px",
        }}>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">

                {/* Back link */}
                <Link
                    href="/portfolio"
                    className="mb-4 inline-block text-sm text-[var(--color-primary)] transition-colors hover:text-[var(--color-lavender)]"
                >
                    ← Back to Portfolio
                </Link>

                {/* ArtStation-style two-column layout */}
                <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

                    {/* ===== Left: Media + Content ===== */}
                    <main className="flex flex-col gap-6">
                        {/* Main media card (banner/video) */}
                        <div className="card-dark overflow-hidden rounded-xl shadow-xl">
                            {project.banner ? (
                                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                                    <Image
                                        src={project.banner}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, calc(100vw - 320px - 1.5rem)"
                                        priority
                                    />
                                </div>
                            ) : null}
                        </div>

                        {/* Markdown content card */}
                        <div className="card-dark rounded-xl p-6 shadow-lg sm:p-8">
                            <div
                                className="prose prose-sm max-w-none text-[var(--color-text-light)]
                                    prose-headings:text-[var(--color-bg-0)]
                                    prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3
                                    prose-h3:text-lg prose-h3:font-medium prose-h3:mt-5 prose-h3:mb-2
                                    prose-p:text-[var(--color-bg-0)] prose-p:leading-relaxed
                                    prose-a:text-[var(--color-secondary)]
                                    prose-img:rounded-lg prose-img:shadow-md
                                    prose-li:text-[var(--color-bg-0)]"
                                dangerouslySetInnerHTML={{ __html: project.content }}
                            />
                        </div>
                    </main>

                    {/* ===== Right: Metadata Sidebar ===== */}
                    <aside className="flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">
                        {/* Title block */}
                        <div className="card-dark p-5">
                            <div className="card-dark overflow-hidden">
                                {project.thumbnail ? (
                                    <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                                        <Image
                                            src={project.thumbnail}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 1024px) 100vw, calc(100vw - 320px - 1.5rem)"
                                            priority
                                        />
                                    </div>
                                ) : null}
                            </div>
                            <h1 className="text-xl font-bold text-[var(--color-text-light)] sm:text-2xl">
                                {project.title}
                            </h1>
                            <p className="mt-2 text-s text-[var(--color-bg-3)]">
                                {project.date && <span>{project.date}</span>}
                            </p>

                        </div>

                        {/* Description */}
                        <div className="card-dark rounded-xl p-5 shadow-lg">
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-bg-3)]">
                                Description
                            </h3>
                            <div className="flex items-center gap-3">
                                {project.description}
                            </div>
                        </div>

                        {/* Tags */}
                        {project.tags && project.tags.length > 0 && (
                            <div className="card-dark rounded-xl p-5 shadow-lg">
                                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-bg-3)]">
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-[var(--color-bg-2)] px-2.5 py-1 text-xs text-[var(--color-text-light)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Software */}
                        {project.software && project.software.length > 0 && (
                            <div className="card-dark rounded-xl p-5 shadow-lg">
                                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-bg-3)]">
                                    Software
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.software.map((sw) => (
                                        <span
                                            key={sw}
                                            className="rounded-md bg-[var(--color-bg-2)] px-2.5 py-1 text-xs text-[var(--color-text-light)]"
                                        >
                                            {sw}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Artist card — ArtStation shows the artist in the sidebar */}
                        <div className="card-dark rounded-xl p-5 shadow-lg">
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-bg-3)]">
                                Artist
                            </h3>
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="text-sm font-medium text-[var(--color-text-light)]">
                                        Maxine Meijboom
                                    </p>
                                    <p className="text-xs text-[var(--color-bg-3)]">
                                        Software Developer & 3D Artist
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
