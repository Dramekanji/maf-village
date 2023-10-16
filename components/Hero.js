import Link from "next/link";
import React from "react";
import BookForm from "./BookForm";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-5rem]">
        {" "}
        {/* Adjusted margin-top */}
        <h1 className="text-4xl text-center mb-4 font-thin tracking-widest mt-40">
          {" "}
          {/* Adjusted margin-top */}
          BIENVENUE À
        </h1>
        <h2 className="text-5xl font-normal text-center tracking-wider">
          {heading}
        </h2>
        <p className="py-5 text-xl font-light mt-4">
          {" "}
          {/* Adjusted margin-top */}
          {message}
        </p>
        <div className="container mx-auto">
          <div className="mt-4 lg:mt-40 p-4  lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 ">
            <div className="max-w-2xl mx-auto">
              {" "}
              <BookForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
