import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/ourServices/OurServices";
import PopularPackages from "@/components/popularPackages/PopularPackages";
import HiddenParadise from "@/components/hiddenParadise/HiddenParadise";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="min-h-[700vh] overflow-hidden">
      <HeroSection />
      <PopularPackages />
      <OurServices />
      <HiddenParadise />
      <Testimonials />
    </main>
  );
}
