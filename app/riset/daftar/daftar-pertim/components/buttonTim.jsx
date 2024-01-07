"use client";
import React, { useState, useEffect } from "react";

const ButtonTim = ({onSelect}) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleSelect = (value) => {
    onSelect(value);
  };

  const changeColor = (button) => {
    if (activeButton) {
      activeButton.classList.remove("opacity-100");
      activeButton.classList.add("opacity-50");
    }

    button.classList.remove("opacity-50");
    button.classList.add("opacity-100");

    setActiveButton(button);
  };

  useEffect(() => {
    const defaultButton = document.querySelector(".default-active");
    if (defaultButton) {
      changeColor(defaultButton);
    }
  }, []);

  return (
    <div className="flex h-8 mt-10">
      <button
        className="w-1/2 p-2 flex items-center justify-center text-white bg-[#d93f57] hover:opacity-80 focus:outline-none default-active opacity-50 rounded-l-xl"
        onClick={(e) => {changeColor(e.target); handleSelect('listing')}}
      >
        Listing
      </button>
      <button
        className="w-1/2 p-2 flex items-center justify-center text-white bg-[#d93f57] hover:opacity-80 focus:outline-none opacity-50 rounded-r-xl"
        onClick={(e) => {changeColor(e.target); handleSelect('sampel')}}
      >
        Sampel
      </button>
    </div>
  );
};

export default ButtonTim;
