import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets1/images";
import { arrowRight } from "../assets1/icons";
const SuperQuality = () => {
  return (
    <section
      id="About-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span>
          <span>{/*This is a pace created */} </span>Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experince, proving you with unmatched
          quality, innovation, and touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
        </div>
      </div>
      <div className="mt-10 flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={350}
          height={340}
          className="object-contain hover:scale-125"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
