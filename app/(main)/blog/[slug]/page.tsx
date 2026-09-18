import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogpostSlugs, getBlogpostBySlug } from "@/libraries/blogpostParser";
import type { Metadata } from "next";

export function generateStaticParams() {
    const slugs = getAllBlogpostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const Blogpost = await getBlogpostBySlug(slug);

    if (!Blogpost) {
        return { title: "Blogpost Not Found" };
    }

    return {
        title: `Maxine Meijboom: ${Blogpost.title}`,
        description: Blogpost.description,
    };
}

export default async function BlogpostPage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const Blogpost = await getBlogpostBySlug(slug);

    if (!Blogpost) {
        notFound();
    }

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                backgroundImage: "radial-gradient(var(--color-base) 2px, transparent 3px)",
                backgroundSize: "20px 20px",
            }}>
            <div className="mx-auto max-w-[90vw] xl:max-w-[1600px] px-4 py-6 sm:px-6">

                {/* Back link */}
                <Link
                    href="/blog"
                    className="mb-4 inline-block text-sm text-(--color-rose) transition-colors hover:text-(--color-iris)"
                >
                    ← Back to Blogs
                </Link>

                {/* two-column layout */}
                <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

                    {/* ----- Left: Content ----- */}
                    <main className="flex flex-col gap-6">
                        <div className="card rounded-xl p-6 shadow-lg sm:p-8">
                            <div
                                /* Using .markdown-content from the CSS */
                                className="markdown-content"
                                dangerouslySetInnerHTML={{ __html: Blogpost.content }}
                            />
                        </div>
                    </main>

                    {/* ----- Right: Metadata Sidebar ----- */}
                    <aside className="flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">

                        {/* Credit */}
                        <div className="card rounded-xl p-5 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="text-sm font-medium text-(--color-text)">
                                        Maxine Meijboom
                                    </p>
                                    <p className="text-xs (--color-overlay)">
                                        Software Developer & 3D Artist
                                    </p>
                                    <p className="mt-2 text-s (--color-overlay)">
                                        {Blogpost.date && <span>{Blogpost.date}</span>}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        {Blogpost.tags && Blogpost.tags.length > 0 && (
                            <div className="card rounded-xl p-5 shadow-lg">
                                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider (--color-overlay)">
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {Blogpost.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-(--color-overlay) px-2.5 py-1 text-xs text-(--color-text)"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    );
}
