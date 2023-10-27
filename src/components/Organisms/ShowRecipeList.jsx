import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShowRecipeList = () => {
  const showData = JSON.parse(localStorage.getItem("recipeData")) || [];

  return (
    <div>
      <p className="text-xl font-serif">List of recipes:- </p>
      <div className="flex flex-row flex-wrap gap-3">
        {showData.map((field, index) => {
          return (
            <Link key={index} to={`/recipes/recipe-details/${field.id}`}>
              <div className="p-4 m-2 bg-slate-300 hover:bg-slate-500 w-52 text-center min-w-full">
                <img
                  src="https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png"
                  alt="blank images"
                />
                <p>{field.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShowRecipeList;
