import { getAllProjects, type ProjectMeta } from "@/libraries/projectParser";
import ProjectCard from "@/components/ProjectCard";

export default function PortfolioPage() {
    const projects = getAllProjects();

    return (
        /*<div className="min-h-screen bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/pine-forest.svg')" }}>*/
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                backgroundImage: "radial-gradient(var(--color-base) 2px, transparent 3px)",
                backgroundSize: "20px 20px",
        }}>
            <div className="mx-auto px-4 py-8 sm:px-6">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-(--color-rose) sm:text-4xl">
                        Portfolio
                    </h1>
                    <p className="mt-2 text-base text-(--color-overlay">
                        My projects and work
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid gap-6 sm:grid-cols-5 lg:grid-cols-4">
                    {projects.map((project: ProjectMeta) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            showFeaturedBadge
                            maxTags={3}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
