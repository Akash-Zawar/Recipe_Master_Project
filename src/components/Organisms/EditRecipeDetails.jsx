import React from "react";
import { useParams } from "react-router";
import HeaderV2 from "../../assets/Header/headerV2";

const EditRecipeDetails = () => {
  const params = useParams();
  let recipeID = decodeURIComponent(params.id);
  const showData = JSON.parse(localStorage.getItem("recipeData")) || [];
  let currentRecipe = {};

  for (let i = 0; i < showData.length; i++) {
    if (showData[i].id == recipeID) {
      currentRecipe = showData[i];
    }
  }

  console.log(currentRecipe);
  return (
    <>
      <HeaderV2 />
      <div className="m-4">Edit Recipe Details</div>
      <p className="m-4">Recipe Name:- {currentRecipe.name}</p>
      <p className="m-4">Categories:- {currentRecipe.categories}</p>
      <p className="m-4">
        Keywords:{" "}
        {currentRecipe.keywords.map((field, index) => (
          <span key={index}> {field.description}</span>
        ))}
      </p>
      <p className="m-4">
        Steps: <button>✏️</button>
        {currentRecipe.steps.map((field, index) => (
          <p className="mx-4" key={index}>
            {" "}
            {field.description}
          </p>
        ))}
      </p>

      <p className="m-4">
        ingredients: <button>✏️</button>
        {currentRecipe.ingredients.map((field, index) => (
          <p className="mx-4" key={index}>
            {" "}
            {field.name} {field.quantity} {field.units}
          </p>
        ))}
      </p>
    </>
  );
};

export default EditRecipeDetails;
