import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/ourServices/OurServices";
import PopularPackages from "@/components/popularPackages/PopularPackages";

export default function Home() {
  return (
    <main className="min-h-[400vh] overflow-hidden">
      <HeroSection />
      <PopularPackages />
      <OurServices />
    </main>
  );
}
