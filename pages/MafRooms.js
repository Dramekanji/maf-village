import React, { useContext, useEffect, useState } from "react";
import { RoomContext } from "@/context/RoomContext";
import Room from "@/components/Room";
import BookForm from "@/components/BookForm";

const MafRooms = () => {
  const { roomData } = useContext(RoomContext);

  return (
    <section className="py-24 mt-40">
      <div className="container mx-auto lg:px-0">
        <BookForm className="mb-10" />{" "}
        {/* Add margin bottom with the 'mb-8' class */}
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {roomData.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MafRooms;
