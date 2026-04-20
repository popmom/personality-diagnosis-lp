import Hero from "@/components/Hero";
import Empathy from "@/components/Empathy";
import Pivot from "@/components/Pivot";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PageView from "@/components/PageView";
import InViewObserver from "@/components/InViewObserver";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <PageView />
      <InViewObserver />
      <Hero />
      <Empathy />
      <Pivot />
      <Benefits />
      <About />
      <Steps />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
