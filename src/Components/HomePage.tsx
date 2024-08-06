import React from "react";
import Card from "./RecipeCard";
import Meal from "../assets/Meal.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-slate-200 p-10 gap-10 overflow-x-hidden w-full">
      <input
        type="search"
        className="h-8 rounded-lg p-4 max-w-full"
        placeholder="What do you want to cook today?"
      />
      <div>
        <h1>Recently Added</h1>
        <div className="overflow-x-auto max-w-full">
          <div className="inline-flex gap-5 w-max">
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            />
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            />
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            />
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            />
            <Card
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
      <div>
        <h1>Trending Recipes</h1>
        <div>Cooked by people with similar preferences</div>
        <div className="overflow-x-auto max-w-full">
          <div className="inline-flex gap-5 w-max">
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            />
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            />
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            />
            <Card
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
