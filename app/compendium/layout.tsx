import CompendiumHeader from "@/components/compendium/Header";
import CompendiumFooter from "@/components/compendium/Footer";
import Footer from "@/components/Footer"

export default function MainLayout(
    { children, }:
    { children: React.ReactNode; }) {
  return (
      <div className="flex min-h-screen flex-col">
        <CompendiumHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
  );
}
