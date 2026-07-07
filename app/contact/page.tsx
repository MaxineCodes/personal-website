import Link from "next/link";
import Image from "next/image";

export default function Home()
{
    return(
        <div className="min-h-screen bg-cover bg-fixed bg-no-repeat" >
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
                {/* ===== Page Title ===== */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-[#E3D2D0] sm:text-5xl">
                        Contact
                    </h1>
                    <p className="mt-3 text-lg text-[#CCCFE3]">
                        Currently empty...  :(
                    </p>
                </div>
            </div>
        </div>
    );
}
