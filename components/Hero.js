import Link from "next/link";
import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-10rem]">
        <h1 className="text-4xl text-center mb-4 font-thin tracking-widest">
          BIENVENU À
        </h1>
        <h2 className="text-5xl font-normal text-center tracking-wider">
          {heading}
        </h2>
        <p className="py-5 text-xl font-light">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
