import { useParams } from "react-router-dom";

const DisplayRecipe = () => {
  const params = useParams();
  let recipeID = params.id;
  console.log(recipeID);

  const showData = JSON.parse(localStorage.getItem("recipeData")) || [];

  let currentRecipe = {};

  for (let i = 0; i < showData.length; i++) {
    if (showData[i].id == recipeID) {
      currentRecipe = showData[i];
    }
  }
  console.log({ currentRecipe });

  return (
    <>
      <p>Recipe Name: {currentRecipe.name}</p>
      <p>Keywords: {currentRecipe.keywords.join(", ")}</p>
      <p>Ingredients: {JSON.stringify(currentRecipe.ingredients)}</p>
      <p>Steps: {currentRecipe.steps.join(", ")}</p>
      <p>Images: {currentRecipe.images.join(", ")}</p>
    </>
  );
};

export default DisplayRecipe;
