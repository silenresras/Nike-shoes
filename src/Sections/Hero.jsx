import React from "react";
import { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets1/icons";
import { statistics, shoes } from "../Constants";
import { bigShoe1 } from "../assets1/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="Home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-4 md:px-8 lg:px-10 xl:px-12 sm:px-6 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl sm:text-[72px] sm:leading-[82px] font-bold max-sm:text-4xl">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 max-sm:text-4xl">
            The New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 max-sm:text-4xl">
            Nike <span> </span>
          </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm max-sm:text-3xl">
          Discover stylish Nike Arrivals, Quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-8 sm:gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover">
        <img
          src={bigShoe1} // Updated to use state variable
          alt="shoe collection"
          width={500}
          height={400}
          className="object-contain relative z-10 max-sm:mb-40 max-xl:mb-60"
        />
        <div className="flex gap-4 max-sm:gap-2 absolute bottom-0 sm:left-[7%] mt-20 max-sm:px-5">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={setbigShoeImg}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
