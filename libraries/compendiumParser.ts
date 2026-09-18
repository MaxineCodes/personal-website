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

const compendiumDirectory = path.join(process.cwd(), "content", "compendium");
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

export interface CompendiumArticleMeta {
    slug: string;
    title: string;
    dateCreated: string;
    dateEdited: string;
}

export interface CompendiumArticle extends CompendiumArticleMeta{
    content: string;
}

// Get metadata for all articles
export function getAllCompendiumArticles(): CompendiumArticleMeta[] {
    // Terminate early
    if (!fs.existsSync(compendiumDirectory)) {
        return [];
    }

    const articles: CompendiumArticleMeta[] = [];

    const walk = (dir: string, parentSlugParts: string[] = []) => {
        const entries = fs.readdirSync(dir, {withFileTypes: true});

        for (const entry of entries) {
            if (entry.isDirectory()) {
                // Recurse into subfolder, remembering its name for slugs
                walk(
                    path.join(dir, entry.name),
                    [...parentSlugParts, entry.name]
                );
            } else if (entry.isFile() && entry.name.endsWith(".md")) {
                const slug = [...parentSlugParts, entry.name.replace(/\.md$/, "")].join("/");
                const fileContents = fs.readFileSync(path.join(dir, entry.name), "utf8");
                const {data} = matter(fileContents);

                articles.push({
                    slug,
                    title: data.title ?? slug.split("/").pop()!,
                    dateCreated: data.dateCreated ?? "",
                    dateEdited: data.dateEdited ?? "",
                } as CompendiumArticleMeta);
            }
        }
    };

    walk(compendiumDirectory);
    return articles;
}

// Get metadata and article content by slug
export async function getCompendiumArticleBySlug(slug: string): Promise<CompendiumArticle | null> {
    const fullPath = path.join(compendiumDirectory, `${slug}.md`);
    // Terminate early
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
        dateCreated: data.date ?? "",
        dateEdited: data.thumbnail ?? "",
        content: contentHtml,
    };
}

export function getAllCompendiumArticleSlugs(): string[] {
    if (!fs.existsSync(compendiumDirectory)) {
        return [];
    }

    const slugs: string[] = [];

    const walk = (dir: string, parentSlugParts: string[] = []) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            if (entry.isDirectory()) {
                walk(
                    path.join(dir, entry.name),
                    [...parentSlugParts, entry.name]
                );
            } else if (entry.isFile() && entry.name.endsWith(".md")) {
                const slug = [...parentSlugParts, entry.name.replace(/\.md$/, "")].join("/");
                slugs.push(slug);
            }
        }
    };

    walk(compendiumDirectory);
    return slugs;
}