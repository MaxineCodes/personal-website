import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "About Me",
    description: "Learn about me. :)",
    image: "/images/profile_icon.jpg",
    href: "/aboutme",
  },
  {
    title: "Digital Compendium",
    description: "A growing digital compendium of knowledge. General information, guides, tutorials and more.",
    image: "/images/placeholder.svg",
    href: "/compendium",
  },
];

export default function Home() {
  return (
      <div className="min-h-screen bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/pine-forest.svg')" }}>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">

          {/* ===== Page Title ===== */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-[#E3D2D0] sm:text-5xl">
              ItsMaxine.eu
            </h1>
            <p className="mt-3 text-lg text-[#CCCFE3]">
              Software Developer · Technical 3D Artist · Student
            </p>
          </div>

          {/* ===== 6 Large Image Buttons ===== */}
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {cards.map((card) => (
                <Link
                    key={card.title}
                    href={card.href}
                    className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-156 w-full overflow-hidden">
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw 50vw, 33vw"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#221f2c]/90 via-[#221f2c]/30 to-transparent" />
                  </div>

                  {/* Text content*/}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="mb-1.5 text-xl font-semibold text-[#FDFBF9] transition-colors group-hover:text-[#E3D2D0]">
                      {card.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[#CCCFE3]">
                      {card.description}
                    </p>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
}
