import Link from "next/link";
import Image from "next/image";
import {getAllCompendiumArticles} from "@/libraries/compendiumParser";
import type {CompendiumArticleMeta} from "@/libraries/compendiumParser";
import Button from "@/components/Button";

const compendiumArticles = getAllCompendiumArticles();

export default function Home()
{
    return(
        <div className="min-h-screen bg-cover bg-fixed bg-no-repeat" >
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
                {/* Page Title */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-(--color-pink) sm:text-5xl">
                        Compendium
                    </h1>
                    <p className="mt-3 text-lg text-(--color-text-light)">
                        Currently empty...  :(
                    </p>
                </div>
            </div>
            {/* grid */}
            <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-10">
                {compendiumArticles.map((article: CompendiumArticleMeta) => (
                    <Button
                        key={article.slug}
                        text={article.title}
                        href={"compendium/" + article.slug}
                    />
                ))}
            </div>
        </div>
    );
}
