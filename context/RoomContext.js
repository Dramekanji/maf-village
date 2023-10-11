import React, { useContext, useState, useEffect, createContext } from "react";

import { roomData } from "../components/RoomData";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  console.log(rooms);
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export default RoomProvider;
