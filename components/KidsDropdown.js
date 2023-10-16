import React, { useContext } from "react";
import { RoomContext } from "@/context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronBarDown } from "react-icons/bs";

const lis = [
  { name: "0 Enfant" },
  { name: "1 Enfant" },
  { name: "2 Enfants" },
  { name: "3 Enfants" },
  { name: "4 Enfants" },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between text-black px-8">
        {kids === "0 Children" ? "No  Children" : kids}{" "}
        <BsChevronBarDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* items */}
      <Menu.Items
        as="ul"
        className="bg-white w-full text-black absolute flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(li.name)}
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
