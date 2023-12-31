import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full ">
      {/* icon */}
      <div className="absolute z-5 pr-8 ">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <ReactDatePicker
        className="w-full h-full text-black "
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
