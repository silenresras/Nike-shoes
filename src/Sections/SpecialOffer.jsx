import React from "react";
import { offer } from "../assets1/images";
import Button from "../Components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="shoes"
          height={687}
          width={773}
          className="object-contain w-full"
        />
      </div>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          <span>{/*This is a pace created */} </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premiere selections to incredible savings, we
          offer unparralled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a real of possibilities designed to fullfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of expectation.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
