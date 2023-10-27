import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShowRecipeList = () => {
  const showData = JSON.parse(localStorage.getItem("recipeData")) || [];

  return (
    <div>
      {showData.map((field, index) => {
        return (
          <Link key={index} to={`/show-recipe-list/recipe-details/${field.id}`}>
            <li>Recipe Name: {field.name}</li>
          </Link>
        );
      })}
    </div>
  );
};

export default ShowRecipeList;
