"use client";
import React from "react";
import { ContainerScroll } from "./ui/controller-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
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
      >
        <Image
          src="/image0.jpg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
