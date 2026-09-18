import {getAllCompendiumArticleSlugs, getCompendiumArticleBySlug} from "@/libraries/compendiumParser";
import {notFound} from "next/navigation";
import {Breadcrumb} from "@/components/compendium/Breadcrumb";

export function generateStaticParams() {
    const slugs = getAllCompendiumArticleSlugs();
    return slugs.map((slug) => ({ slug: slug.split("/").filter(Boolean) }));
}

export default async function CompendiumPage({params,}:
{ params: Promise<{ slug: string[] }>; }) {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
        notFound();
    }

    const slugString = slug.join("/");
    const CompendiumArticle = await getCompendiumArticleBySlug(slugString);

    if (!CompendiumArticle) {
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

                {/* Breadcrumb navigation */}
                <Breadcrumb slug={slug} title={CompendiumArticle.title} />

                {/* two-column layout */}
                <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

                    {/* ----- Left: Navigation ----- */}
                    <main className="flex flex-col gap-6">
                        <div className="card rounded-xl p-6 shadow-lg sm:p-8">
                            <div
                                /* Using .markdown-content from the CSS */
                                className="markdown-content"
                                dangerouslySetInnerHTML={{ __html: CompendiumArticle.content }}
                            />
                        </div>
                    </main>

                    {/* ----- Middle: Content ----- */}
                    <main className="flex flex-col gap-6">
                        <div className="card rounded-xl p-6 shadow-lg sm:p-8">
                            <div
                                /* Using .markdown-content from the CSS */
                                className="markdown-content"
                                dangerouslySetInnerHTML={{ __html: CompendiumArticle.content }}
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
                                        {CompendiumArticle.dateCreated && <span>{CompendiumArticle.dateCreated}</span>}
                                    </p>
                                    <p className="mt-2 text-s (--color-overlay)">
                                        {CompendiumArticle.dateEdited && <span>{CompendiumArticle.dateEdited}</span>}
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