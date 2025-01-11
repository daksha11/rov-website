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
export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <HeroScrollDemo />
        <VideoPage />
        <Mail />
       {/* <MixPlaylist />
        <Gallery />
        <Service />
        <Cultures />
        <TeamMembersPage /> */}
        <Carousel />
        <Footer />
      </div>
    </main>
  );
}