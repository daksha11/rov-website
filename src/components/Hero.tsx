"use client";
import Image from "next/image";
import { ContainerScroll } from "./ui/controller-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden" style={{ marginBottom: "0" }} id="home">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black dark:text-white">
              The Ultimate Studio Experience <br />
              <span className="text-xl sm:text-2xl md:text-[3rem] font-bold mt-1 leading-none">
                Where Hits Matter
              </span>
            </h1>
          </>
        }
        backgroundImage="" // Add this line
      >
        {/* Responsive Image Container */}
        <div className="w-full h-full relative aspect-[16/9]">
          {/* Desktop Image */}
          <Image
            src="/image0.jpg" // Default image for desktop
            alt="hero"
            fill // Use `fill` to make the image cover the container
            className="rounded-2xl object-cover hidden md:block"
            draggable={false}
            priority
          />
          {/* Mobile Image */}
          <Image
            src="/image0_phone.png" // Image for mobile
            alt="hero"
            fill // Use `fill` to make the image cover the container
            className="rounded-2xl object-cover block sm:hidden"
            draggable={false}
            priority
          />
        </div>
      </ContainerScroll>
    </div>
  );
}