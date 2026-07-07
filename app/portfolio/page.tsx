import Link from "next/link";
import Image from "next/image";
import { getAllProjects, type ProjectMeta } from "@/libraries/projectParser";

export default function PortfolioPage() {
    const projects = getAllProjects();

    return (
        <div className="min-h-screen bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/pine-forest.svg')" }}>
            <div className="mx-auto px-4 py-8 sm:px-6">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                        Portfolio
                    </h1>
                    <p className="mt-2 text-base text-[var(--color-bg-3)]">
                        My projects and work
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid gap-6 sm:grid-cols-5 lg:grid-cols-4">
                    {projects.map((project: ProjectMeta) => (
                        <Link
                            key={project.slug}
                            href={`/portfolio/${project.slug}`}
                            className="card-light overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    /*className="object-cover"*/
                                    /*sizes="(max-width: 768px) 100vw, 33vw"*/
                                />
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h2 className="mb-2 text-lg font-semibold text-[var(--color-text-dark)]">
                                    {project.title}
                                </h2>
                                <p className="mb-3 text-sm text-[var(--color-bg-3)]">
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags && project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-[var(--color-lavender)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-bg-0)]"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
