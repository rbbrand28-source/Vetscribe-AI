import Hero from "@/components/hero";
import Features from "@/components/features";
import SocialProof from "@/components/social-proof";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Features />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
