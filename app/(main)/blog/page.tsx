import {getAllBlogposts, type BlogpostMeta, Blogpost} from "@/libraries/blogpostParser";
import BlogpostCard from "@/components/BlogpostCard";

export default function BlogpostPage() {
    const blogposts = getAllBlogposts();

    return (
        /*<div className="min-h-screen bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/pine-forest.svg')" }}>*/
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                backgroundImage: "radial-gradient(var(--color-base) 2px, transparent 3px)",
                backgroundSize: "20px 20px",
            }}>
            <div className="mx-4xl px-4 py-8 sm:px-6">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-(--color-rose) sm:text-4xl">
                        My Blog
                    </h1>
                    <p className="mt-2 text-base text-(--color-muted)">
                        Writings and ramblings.
                    </p>
                </div>

                {/* Blogposts grid */}
                <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-1">
                    {blogposts.map((blogpost: BlogpostMeta) => (
                        <BlogpostCard
                            key={blogpost.slug}
                            blogpost={blogpost}
                            maxTags={3}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}