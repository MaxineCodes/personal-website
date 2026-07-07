import Link from "next/link";
import Image from "next/image";

export default function Home()
{
    return(
        <div className="min-h-screen bg-cover bg-fixed bg-no-repeat" >
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
                {/* ===== Page Title ===== */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-(--color-pink) sm:text-5xl">
                        Compendium
                    </h1>
                    <p className="mt-3 text-lg text-(--color-text-light)">
                        Currently empty...  :(
                    </p>
                </div>
            </div>
        </div>
    );
}
