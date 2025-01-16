import Footer from "@/components/footer";
import { HeroScrollDemo } from "@/components/Hero";
import Mail from "@/components/mailing";
import Navbar from "@/components/navbar";
import Carousel from "@/components/portfolio";
import VideoPage from "@/components/videos";
import MixPlaylist from "@/components/chart";
import TeamMembersPage from "@/components/members";
import Gallery from "@/components/gallery";
import Service from "@/components/services";
import Cultures from "@/components/cultures";
import { url } from "inspector";
export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col bg-black" 
      style={{backgroundImage: "url('/paper_texture_back_2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed'}}>
        <Navbar />
        <HeroScrollDemo />
        <VideoPage />
        <Mail />
        <MixPlaylist />
        <Service />
        <Gallery />
        <Cultures />
        <TeamMembersPage />
        <Carousel />
        <Footer />
      </div>
    </main>
  );
}