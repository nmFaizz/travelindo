import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/ourServices/OurServices";
import PopularPackages from "@/components/popularPackages/PopularPackages";
import HiddenParadise from "@/components/hiddenParadise/HiddenParadise";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PopularPackages />
      <OurServices />
      <HiddenParadise />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
