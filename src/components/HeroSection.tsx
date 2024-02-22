import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full h-full px-[5vw] mt-8 lg:mt-0  gap-5 text-white flex flex-col justify-center items-center">
        <h1 className="text-7xl text-center font-bold leading-none tracking-tighter">
          Welcome to Harmony Hub: Elevate Your Music Skills!
        </h1>
        <p className="text-center px-[10vw]">
          Welcome to Harmony Hub, your ultimate destination for unlocking your
          musical potential! Dive into our platform and embark on an enriching
          journey through our diverse range of music courses. Whether you are a
          beginner or an experienced musician.
        </p>
        <Button borderRadius="1.75rem" className=" bg-transparent">
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
