import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className="shadow-2xl bg-white min-h-[500px] group">
      {/* img */}
      <div className="overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image} // Make sure 'image' is the correct path to your image
          alt={name} // Provide alt text for accessibility
          width={500} // Specify the width of the image
          height={300} // Specify the height of the image
        />
      </div>
      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 text-black flex justify-center items-center uppercase font-medium tracking-[1px] text-base">
        Details
      </div>
    </div>
  );
};

export default Room;
