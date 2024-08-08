import React, { useState } from "react";
import "./Modal.css"; // Correctly import the CSS file
import { RiCloseLine } from "react-icons/ri";
import Meal from "../../assets/Meal.jpg";
import { MdStar } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaBowlFood, FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import ProfilePic from "../../assets/Profile.jpg";

const Modal = ({ setIsOpen }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal bg-green-200">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <div className="flex flex-col justify-center gap-3 text-black">
              <img src={Meal} alt="meal" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-center"> Salmon</div>
                <div className="flex flex-row gap-1 justify-center text-yellow-400">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </div>
                <div className="text-xs flex justify-center">
                  Cooked by people with similar preferences
                </div>
                <div className="flex flex-row gap-4 justify-center">
                  <div className="flex gap-1 items-center">
                    <IoTimeOutline />
                    <div className="text-sm">20 min</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaBowlFood />
                    <div>2 servings</div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={handleFavoriteClick}
                      className="flex rounded-full bg-white"
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
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <img
                    src={ProfilePic}
                    alt="Food"
                    className="h-10 w-10 rounded-full border-4 border-white bg-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium text-base">Jill Anderson</div>
                    <div className="font-light text-sm">Amateur Cook</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">Ingredients</div>
                  <ul className="list-disc list-inside">
                    <li>4 salmon fillets</li>
                    <li>2 tablespoons olive oil</li>
                    <li>1/2 teaspoon black pepper</li>
                    <li>2 cloves garlic, minced</li>
                  </ul>
                </div>
                <div className="pb-3">
                  <div className="font-bold">How to cook it:</div>
                  <div className="pb-10">
                    To cook the salmon, preheat your oven to 400°F (200°C) and
                    line a baking sheet with parchment paper or grease it
                    lightly with olive oil. Place the salmon fillets on the
                    sheet, drizzle with olive oil, and season with salt, pepper,
                    and minced garlic. Arrange lemon slices on and around the
                    fillets. Bake for 12-15 minutes until the salmon flakes
                    easily with a fork. Remove from the oven, sprinkle with
                    fresh parsley, and serve hot with your favorite sides.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalActions ">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
