import React, { useState } from "react";

import { MdOutlineMonitorWeight, MdStar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import Modal from "./Modal/Modal";

interface RecipeCard {
  background: string;
  image: string;
  timeToCook: string;
  title: string;
  rating: number;
  ingredients: string;
  category: string;
}

const RecipeCard = ({
  image,
  timeToCook,
  title,
  rating,
  ingredients,
  category,
}: RecipeCard) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`flex flex-col bg-green-200 p-5 w-64 rounded-lg shadow-md gap-2`}
    >
      <div className="flex flex-col w-full relative">
        <div className="relative w-full h-24">
          <img src={image} className=" h-24 w-full" alt="Salmon" />
          <button
            onClick={handleFavoriteClick}
            className=" flex rounded-full bg-white w-4 h-4 absolute items-center top-2 right-2"
          >
            {isFavorite ? (
              <CiHeart
                width={10}
                height={10}
                style={{ padding: "2px" }}
                color="red"
              />
            ) : (
              <FaHeart
                width={7}
                height={7}
                style={{ padding: "3px" }}
                fill="red"
              />
            )}
          </button>
        </div>
        <div className="flex items-center justify-center w-1.5/4  rounded-lg gap-1 absolute bottom-2 left-2 bg-white px-1.5 ">
          <IoTimeOutline />
          <div className="text-sm">{timeToCook}</div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-md"> {title}</h1>
        <div className="flex items-center text-sm weig">
          <MdStar className="text-yellow-400 " />
          {rating}
        </div>
      </div>
      <div className="text-xs font-light">{ingredients}</div>
      <div className="flex flex-row gap-2 justify-between ">
        <div className="flex flex-row bg-green-400 text-xs rounded-md items-center p-1">
          {category}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-row bg-green-600 text-xs rounded-md items-center p-1"
        >
          {" "}
          More Info.
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};
export default RecipeCard;
