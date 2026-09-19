import {getAllCompendiumArticleSlugs, getCompendiumArticleBySlug, getAllCompendiumArticlesMeta} from "@/libraries/compendiumParser";
import {notFound} from "next/navigation";
import {Breadcrumb} from "@/components/compendium/Breadcrumb";
import {Sidebar} from "@/components/compendium/Sidebar";
import {TableOfContents} from "@/components/compendium/TableOfContents";

export function generateStaticParams() {
    const slugs = getAllCompendiumArticleSlugs();
    return slugs.map((slug) => ({ slug: slug.split("/").filter(Boolean) }));
}

export default async function CompendiumPage({params,}:
{ params: Promise<{ slug: string[] }>; }) {
    // Slug
    const { slug } = await params;
    const slugString = slug.join("/");
    if (!slug || slug.length === 0) { notFound(); }

    // Article
    const CompendiumArticle = await getCompendiumArticleBySlug(slugString);
    if (!CompendiumArticle) { notFound(); }

    const AllCompendiumArticlesMeta = getAllCompendiumArticlesMeta();
    const AllCompendiumArticles = AllCompendiumArticlesMeta.map(a => ({ slug: a.slug, title: a.title }));

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                backgroundImage: "radial-gradient(var(--color-base) 2px, transparent 3px)",
                backgroundSize: "20px 20px",
            }}>
            <div className="mx-auto max-w-[90vw] xl:max-w-[1800px] px-4 py-6 sm:px-6">

                {/* Breadcrumb navigation */}
                <Breadcrumb slug={slug} title={CompendiumArticle.title} />

                {/* Three column layout */}
                <div className="grid gap-6 lg:grid-cols-[240px_1fr_240px]">

                    {/* LEFT: Wiki Navigation Sidebar */}
                    <aside className="hidden lg:block">
                        <Sidebar allArticles={AllCompendiumArticles} currentSlug={slugString} />
                    </aside>

                    {/* MIDDLE: Article Content */}
                    <main className="flex flex-col gap-6">
                        <div className="card rounded-xl p-6 shadow-lg sm:p-8">
                            <h1 className="text-3xl font-bold mb-6">{CompendiumArticle.title}</h1>
                            <div
                                className="markdown-content"
                                dangerouslySetInnerHTML={{ __html: CompendiumArticle.content }}
                            />
                        </div>
                    </main>

                    {/* RIGHT: Table of Contents */}
                    <aside className="hidden xl:block">
                        <TableOfContents htmlContent={CompendiumArticle.content} />
                    </aside>

                </div>
            </div>
        </div>
    );
}