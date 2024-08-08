import React from "react";
import RecipeCard from "./RecipeCard";
import Meal from "../assets/Meal.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-slate-200 p-10 gap-10 overflow-x-hidden w-full">
      <input
        type="search"
        className="h-8 rounded-lg p-4 max-w-full"
        placeholder="What do you want to cook today?"
      />
      <div className="flex flex-col gap-10">
        <h1 className="font-semibold text-2xl">Recently Added</h1>
        <div className="overflow-x-auto max-w-full">
          <div className="inline-flex gap-5 w-max">
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
            />
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
            />
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
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">Trending Recipes</h1>
          <div>Cooked by people with similar preferences</div>
        </div>
        <div className="overflow-x-auto max-w-full">
          <div className="inline-flex gap-5 w-max">
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
            />
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
