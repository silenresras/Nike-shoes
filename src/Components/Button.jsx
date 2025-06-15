import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  onClick,
  type,
  isLoading,
  loader: Loader, // Optionally pass a Loader component
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-gray-300`
            : "bg-coral-red text-white border-coral-red hover:bg-red-500"
        } rounded-full w-full ${
        isLoading ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={onClick}
      type={type}
      disabled={isLoading} // Disable button when loading
    >
      {isLoading ? (
        Loader ? (
          <Loader className="animate-spin mx-auto" />
        ) : (
          "Loading..."
        )
      ) : (
        <>
          {label}
          {iconUrl && (
            <img
              src={iconUrl}
              alt="Arrow right icon"
              className="ml-2 rounded-full w-5 h-5"
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
