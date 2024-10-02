import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  onClick,
  type,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-gray-300`
            : "bg-coral-red text-white border-coral-red hover:bg-red-500"
        } rounded-full w-full`}
      onClick={onClick}
      type={type}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="Arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
