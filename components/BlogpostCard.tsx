import Link from "next/link";
import Image from "next/image";
import type { BlogpostMeta } from "@/libraries/blogpostParser";

interface BlogpostCardProps {
    blogpost: BlogpostMeta;
    /* Limit the number of tags shown (default: 3) */
    maxTags?: number;
}

export default function BlogpostCard({
                                        blogpost,
                                        maxTags = 3,
                                    }: BlogpostCardProps) {
    return (
        <Link
            href={`/blog/${blogpost.slug}`}
    className="card block overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

    {/* Info */}
    <div className="p-5">
    <h1 className="mb-3 font-large text-(--color-rose)">
        {blogpost.title}
        </h1>

    {/* Date */}
    {(blogpost.date) && (
        <p className="mb-1 text-xs text-(--color-subtle)">
            {blogpost.date && <span>{blogpost.date}</span>}
                    </p>
    )}

        {/* Tags */}
        {blogpost.tags && blogpost.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
                {blogpost.tags.slice(0, maxTags).map((tag) => (
                        <span
                            key={tag}
                    className="rounded-full bg-(--color-pine) px-2 py-0.5 text-xs font-medium text-(--override-base-color-text)"
                        >
                        {tag}
                        </span>
        ))}
            {blogpost.tags.length > maxTags && (
                <span className="px-1 text-xs text-(--color-foam)">
                    +{blogpost.tags.length - maxTags}
                    </span>
            )}
            </div>
        )}
        </div>
        </Link>
    );
    }
