import React from "react";
import ProfilePic from "../assets/Profile.jpg";
import RecipeCard from "./RecipeCard";
import Meal from "../assets/Meal.jpg";

const Profile = () => {
  return (
    <div className="bg-slate-200 flex flex-col p-20 gap-5 w-screen">
      <div className="flex flex-row bg-orange-200 p-5 gap-6 items-center">
        <img
          src={ProfilePic}
          alt="Profile picture"
          className="h-48 w-48 rounded-full border-4 border-white"
        />
        <div className="flex flex-row items-center gap-28 ">
          <div className="flex flex-col gap-1 ">
            <div className="text-2xl font-bold">Jill Anderson</div>
            <div className="flex justify-center font-bold text-base text-red-600">
              UI Designer
            </div>
          </div>
          <div className="flex flex-col break w-64 ">
            <div className="flex justify-center text-xl font-bold  ">
              {" "}
              Description{" "}
            </div>
            <div className="font-normal">
              Hi there! I'm Jill, an enthusiastic home cook who loves to
              experiment in the kitchen. I don't have any formal culinary
              training, but my passion for cooking and trying out new recipes
              keeps my kitchen buzzing with activity.
            </div>
          </div>
          <div className="flex flex-row gap-28 bg-red-200 p-5 items-center rounded-lg">
            <div className="flex flex-col">
              <div className=" font-bold">
                Age: <span className="font-light">26</span>
              </div>
              <div className=" font-bold">
                Status: <span className="font-light">Single</span>
              </div>
              <div className=" font-bold">
                Location: <span className="font-light"> Brooklyn</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="font-bold flex justify-center">
                {" "}
                Categories prefered:
              </div>
              <div className="grid grid-cols-2 gap-4 ">
                <div className="bg-red-700 text-white rounded-lg flex justify-center p-1">
                  Organized
                </div>
                <div className="bg-red-700 text-white rounded-lg flex justify-center p-1">
                  Healthy
                </div>
                <div className="bg-red-700 text-white rounded-lg flex justify-center p-1">
                  Good-Food
                </div>
                <div className="bg-red-700 text-white rounded-lg flex justify-center p-1">
                  Spicy
                </div>
                <div className="bg-red-700 text-white rounded-lg flex justify-center p-1">
                  Italian
                </div>
                <div className="bg-red-700 text-white rounded-lg flex justify-center p-1">
                  Weight-loss
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center text-3xl font-semibold">
          Favourite Recipes
        </div>
        <div className="grid grid-cols-5 gap-y-7">
          <RecipeCard
            background={"bg-green-200"}
            image={Meal}
            timeToCook={"20 Minutes"}
            title={"Salmon"}
            rating={3.8}
            ingredients={"Salmon,onion,olive"}
            category={"Healthy"}
          />
          <RecipeCard
            background={"bg-green-200"}
            image={Meal}
            timeToCook={"20 Minutes"}
            title={"Salmon"}
            rating={3.8}
            ingredients={"Salmon,onion,olive"}
            category={"Healthy"}
          />{" "}
          <RecipeCard
            background={"bg-green-200"}
            image={Meal}
            timeToCook={"20 Minutes"}
            title={"Salmon"}
            rating={3.8}
            ingredients={"Salmon,onion,olive"}
            category={"Healthy"}
          />{" "}
          <RecipeCard
            background={"bg-green-200"}
            image={Meal}
            timeToCook={"20 Minutes"}
            title={"Salmon"}
            rating={3.8}
            ingredients={"Salmon,onion,olive"}
            category={"Healthy"}
          />{" "}
          <RecipeCard
            background={"bg-green-200"}
            image={Meal}
            timeToCook={"20 Minutes"}
            title={"Salmon"}
            rating={3.8}
            ingredients={"Salmon,onion,olive"}
            category={"Healthy"}
          />{" "}
          <RecipeCard
            background={"bg-green-200"}
            image={Meal}
            timeToCook={"20 Minutes"}
            title={"Salmon"}
            rating={3.8}
            ingredients={"Salmon,onion,olive"}
            category={"Healthy"}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
