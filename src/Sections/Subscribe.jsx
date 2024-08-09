import React, { useState } from "react";
import Button from "../Components/Button";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setIsSuccess(true);
      setMessage("Subscription successful! Thank you for signing up.");
    } else {
      setIsSuccess(false);
      setMessage("Please enter a valid email address.");
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000); // 3000ms = 3 seconds
  };

  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates </span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Subscribe@nike.com"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" onClick={handleSubmit} />
        </div>
      </div>
      {message && (
        <p
          className={`mt-4 text-lg ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
};

export default Subscribe;
