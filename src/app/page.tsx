import { HeroScrollDemo } from "@/components/Hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar/>
      <HeroScrollDemo/>
    </div>
  </main>
  );
}
