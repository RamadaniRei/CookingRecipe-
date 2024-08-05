import React from "react";
import Card from "../../Card";

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
        <div> Recepies added in the last 24 hours </div>
      </div>
      <div>
        <h1>Trending Recipes </h1>
        <div>Cooked by people with similar preferences</div>
      </div>
    </div>
  );
};

export default HomePage;
