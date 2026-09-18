import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeFormat from 'rehype-format';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';


const blogpostsDirectory = path.join(process.cwd(), "content", "blogs");
const markdownProcessor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkDirective)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeFormat)
    .use(rehypeStringify);


export interface BlogpostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    featured?: boolean;
}
export interface Blogpost extends BlogpostMeta{
    content: string;
}


// Get metadata for all blogs
export function getAllBlogposts(): BlogpostMeta[] {
    if (!fs.existsSync(blogpostsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogpostsDirectory);

    const projects = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(blogpostsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                date: data.date ?? "",
                description: data.description,
                tags: data.tags ?? [],
                featured: data.featured ?? false,
            } as BlogpostMeta;
        });

    // Sort by date
    return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get metadata and blog content by slug
export async function getBlogpostBySlug(slug: string): Promise<Blogpost | null> {
    const fullPath = path.join(blogpostsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert .md to HTML
    const processedContent = await markdownProcessor.process(content);
    const contentHtml = String(processedContent);

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description,
        tags: data.tags ?? [],
        featured: data.featured ?? false,
        content: contentHtml,
    };
}


export function getAllBlogpostSlugs(): string[] {
    if (!fs.existsSync(blogpostsDirectory)) {
        return [];
    }

    return fs
        .readdirSync(blogpostsDirectory)
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => fileName.replace(/\.md$/, ""));
}