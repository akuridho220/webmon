"use client";
import React, { useState, useEffect } from "react";

const ButtonTim = ({onSelect}) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleSelect = (value) => {
    onSelect(value);
  };

  const changeColor = (button) => {
    if (activeButton) {
      activeButton.classList.remove("bg-accent-800");
      activeButton.classList.add("bg-accent-700");
    }

    button.classList.remove("bg-accent-700");
    button.classList.add("bg-accent-800");

    setActiveButton(button);
  };

  useEffect(() => {
    const defaultButton = document.querySelector(".default-active");
    if (defaultButton) {
      changeColor(defaultButton);
    }
  }, [changeColor]);

  return (
    <div className="flex h-8 mt-10">
      <button
        className="w-1/2 p-2 flex items-center justify-center text-white  hover:bg-accent-900 focus:outline-none default-active rounded-l-xl"
        onClick={(e) => {changeColor(e.target); handleSelect('listing')}}
      >
        Listing
      </button>
      <button
        className="w-1/2 p-2 flex items-center justify-center text-white bg-accent-700 hover:bg-accent-900 focus:outline-none rounded-r-xl"
        onClick={(e) => {changeColor(e.target); handleSelect('sampel')}}
      >
        Sampel
      </button>
    </div>
  );
};

export default ButtonTim;
