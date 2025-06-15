import React from "react";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-coral-red" />
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon className="size-5 text-coral-red" />
          </div>
        )}
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-white bg-opacity-50 rounded-lg border border-white-700
     text-gray-500 placeholder-gray-500 transition duration-200 focus:none focus:outline-none"
      />
    </div>
  );
};

export default Input;
