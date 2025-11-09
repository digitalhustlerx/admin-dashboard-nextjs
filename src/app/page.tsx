import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import Pricing from "@/components/landing/Pricing";
import RecentLaunches from "@/components/landing/RecentLaunches";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <RecentLaunches />
      <FinalCTA />
      <Footer />
    </main>
  );
}
