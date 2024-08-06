import React from "react";
import Card from "./RecipeCard";
import Meal from "../assets/Meal.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full bg-slate-200 p-10 gap-10">
      <input
        type="search"
        className="h-8 rounded-lg p-4"
        placeholder="What do you want to cook today?"
      />
      <div>
        <h1> Recently Added</h1>
        <div className="overflow-x-auto">
          <div className="flex flex-row  gap-5 w-max">
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Trending Recipes </h1>
          <div>Cooked by people with similar preferences</div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-row  gap-5 w-max">
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
            <Card
              background={"bg-green-200"}
              image={Meal}
              timeToCook={"20 Minutes"}
              title={"Salmon"}
              rating={3.8}
              ingredients={"Salmon,onion,olive"}
              category={"Healthy"}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
