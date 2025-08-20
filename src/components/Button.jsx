import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { getBtnColor } from "../utils";
import { BsArrowRight } from "react-icons/bs";

function Button({ label, themeButton }) {
  // Proper destructuring with array fallback
  const [buttonBg, iconBg] = getBtnColor(label) || ["white", "black"];

  if (themeButton) {
    return (
      <div
        style={{ backgroundColor: buttonBg }}
        className="flex gap-3 items-center justify-between overflow-hidden
       text-black rounded-full w-60 h-14"
      >
        <BsArrowRight
          size={40}
          color={buttonBg}
          style={{ backgroundColor: iconBg }}
          className="ml-2 bg-red rounded-full w-10 p-2 h-10"
        />
        <button className="flex-1 bg-secondary h-full text-gray-800 font-bold rounded-full">
          {label}
        </button>
      </div>
    );
  }

  return (
    <button
      className={`${
        label === "Portfolio"
          ? "bg-primary text-white"
          : "border-2 border-slate-900"
      } min-w-20 h-8 p-2 md:min-w-48 gap-4 md:h-14 rounded-full font-bold flex items-center justify-center`}
    >
      {label === "Portfolio" ? (
        <>
          {label} <FaArrowRight size={20} />
        </>
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
