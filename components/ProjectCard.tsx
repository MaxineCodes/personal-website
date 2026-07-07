import Link from "next/link";
import Image from "next/image";
import type { ProjectMeta } from "@/libraries/projectParser";

interface ProjectCardProps {
    project: ProjectMeta;
    /** Show a "Featured" badge on the card */
    showFeaturedBadge?: boolean;
    /** Limit the number of tags shown (default: 3) */
    maxTags?: number;
}

export default function ProjectCard({
                                        project,
                                        showFeaturedBadge = false,
                                        maxTags = 3,
                                    }: ProjectCardProps) {
    return (
        <Link
            href={`/app/(main)/portfolio/${project.slug}`}
            className="card-dark block overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Thumbnail — square */}
            <div className="relative aspect-square w-full overflow-hidden">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Featured badge */}
                {showFeaturedBadge && project.featured && (
                    <span className="absolute right-2 top-2 rounded-full bg-[var(--color-yellow)] px-2.5 py-1 text-xs font-semibold text-[var(--color-bg-0)] shadow-md">
            ★ Featured
          </span>
                )}
            </div>

            {/* Info */}
            <div className="p-4">
                <h5 className="mb-2 font-medium text-[var(--color-text-light)]">
                    {project.title}
                </h5>

                {/* Meta line: role · duration · date */}
                {(project.date) && (
                    <p className="mb-2 text-xs text-[var(--color-bg-3)]">
                        {project.date && <span>{project.date}</span>}
                    </p>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, maxTags).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-[var(--color-lavender)] px-2 py-0.5 text-xs font-medium text-[var(--color-bg-0)]"
                            >
                {tag}
              </span>
                        ))}
                        {project.tags.length > maxTags && (
                            <span className="px-1 text-xs text-[var(--color-bg-3)]">
                +{project.tags.length - maxTags}
              </span>
                        )}
                    </div>
                )}
            </div>
        </Link>
    );
}
