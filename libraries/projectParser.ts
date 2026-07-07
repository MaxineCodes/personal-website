import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import remarkHtml from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export interface ProjectMeta {
    slug: string;
    title: string;
    date: string;
    thumbnail: string;
    description: string;
    banner?: string;
    tags?: string[];
    software?: string[];
    featured?: boolean;
}

export interface Project extends ProjectMeta{
    content: string;
}

// Get metadata for all projects
export function getAllProjects(): ProjectMeta[] {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);

    const projects = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                date: data.date ?? "",
                thumbnail: data.thumbnail ?? "",
                description: data.description,
                banner: data.banner,
                tags: data.tags ?? [],
                software: data.software ?? [],
                featured: data.featured ?? false,
            } as ProjectMeta;
        });

    // Sort by date
    return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get metadata and project content by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert .md to html
    const processedContent = await remark().use(remarkHtml).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        thumbnail: data.thumbnail ?? "",
        description: data.description,
        banner: data.banner,
        tags: data.tags ?? [],
        software: data.software ?? [],
        featured: data.featured ?? false,
        content: contentHtml,
    };
}


export function getAllProjectSlugs(): string[] {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    return fs
        .readdirSync(projectsDirectory)
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => fileName.replace(/\.md$/, ""));
}