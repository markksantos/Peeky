import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import Screenshots from "@/components/sections/Screenshots";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import SkipToContent from "@/components/ui/SkipToContent";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <Screenshots />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
