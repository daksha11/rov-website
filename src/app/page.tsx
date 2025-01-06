import Footer from "@/components/footer";
import { HeroScrollDemo } from "@/components/Hero";
import Mail from "@/components/mail";
import Navbar from "@/components/navbar";
import Carousel from "@/components/portfolio";
import VideoPage from "@/components/videos";
import RangeOfView from "@/components/mailing";
export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <HeroScrollDemo />
        <VideoPage />
        <RangeOfView />
        <Mail />
        <Carousel />
        <Footer />
      </div>
    </main>
  );
}