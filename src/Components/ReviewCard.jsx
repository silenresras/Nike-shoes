import React from "react";
import { star } from "../assets1/icons";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgUrl}
        alt="Customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p>{feedback}</p>
      <div className="mt-5 flex justify-center items-center">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
