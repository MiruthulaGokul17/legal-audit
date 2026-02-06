import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Features } from "@/components/home/Features";
import { Pricing } from "@/components/home/Pricing";
import { TrustBar } from "@/components/home/TrustBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main>
        <Hero />
        <Process />
        <Features />
        <TrustBar />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
