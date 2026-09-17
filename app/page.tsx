import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";


const cards = [
  {
    title: "About Me",
    description: "Learn about me. :)",
    image: "/images/profile_icon.jpg",
    href: "/aboutme",
  },
  {
      title: "Portfolio",
      description: "My works over the years.",
      image: "/images/portfolio_screenshot.png",
      href: "/portfolio",
  },
  {
    title: "Digital Compendium",
    description: "A growing digital compendium of knowledge. General information, guides, tutorials and more.",
    image: "/images/placeholder.svg",
    href: "/compendium",
  },
  {
      title: "Tutorials",
      description: "Currently just the 404 page.",
      image: "/images/placeholder.svg",
      href: "/404",
  },

];

export default function Home() {
  return (
      /* Pine-Forest Wallpaper */
      <div className="pine-forest-bg min-h-screen">

        <header
            className="sticky top-0 "
            style={{ }}>
            <nav className="mx-auto flex items-center justify-end px-4 py-3 sm:px-6 max-w-7xl">
                <ThemeToggle />
            </nav>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">

          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-(--color-rose) sm:text-5xl">
              ItsMaxine.eu
            </h1>
            <p className="mt-3 text-lg text-(--color-text)">
              Software Developer · Technical 3D Artist · Student
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-3">
            {cards.map((card) => (
                <Link
                    key={card.title}
                    href={card.href}
                    className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-94 w-full overflow-hidden">
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw 50vw, 33vw"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#191724]/90 via-[#221f2c]/30 to-transparent" />
                  </div>

                  {/* Text content*/}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="mb-1.5 text-xl font-semibold text-[#ebbcba] transition-colors group-hover:text-[#eb6f92]">
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

        <Footer />

      </div>
  );
}
