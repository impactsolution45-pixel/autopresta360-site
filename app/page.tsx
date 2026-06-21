import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Compliance from "@/components/Compliance";
import Screenshots from "@/components/Screenshots";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink">
      <Header />
      <Hero />
      <Features />
      <Compliance />
      <Screenshots />
      <Contact />
      <Footer />
    </main>
  );
}
