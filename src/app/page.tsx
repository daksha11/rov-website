import Footer from "@/components/footer";
import { HeroScrollDemo } from "@/components/Hero";
import Mail from "@/components/mail";
import Navbar from "@/components/navbar";
import Carousel from "@/components/portfolio";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <HeroScrollDemo />
        <Mail />
        <Carousel />
        <Footer />
      </div>
    </main>
  );
}