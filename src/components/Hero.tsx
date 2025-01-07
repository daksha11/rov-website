"use client";
import Image from "next/image";
import { ContainerScroll } from "./ui/controller-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden"
    style={{marginBottom: "0"}}>
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-6xl text-black dark:text-white">
            The Ultimate Studio Experience <br />
            <span className="text-2xl md:text-[3rem] font-bold mt-1 leading-none">
              Where Hits Matter
            </span>
          </h1>
        </>
      }
      backgroundImage=""  // Add this line
    >
      <Image
        src="/image0.jpg"
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover w-full h-full object-center"
        draggable={false}
      />
    </ContainerScroll>


      {/* Bright white line */}
      {/*<div className="w-full h-[2px] bg-white"></div>*/}

    </div>
  );
}
