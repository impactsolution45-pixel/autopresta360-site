import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metiers from "@/components/Metiers";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Compliance from "@/components/Compliance";
import Screenshots from "@/components/Screenshots";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink">
      <Header />
      <Hero />
      <Metiers />
      <Features />
      <Pricing />
      <Compliance />
      <Screenshots />
      <Contact />
      <Footer />
    </main>
  );
}
