import { useParams } from "react-router-dom";
import DisplayRecipeHeader from "./DisplayRecipeComponents/DisplayRecipeHeader";
import Header from "./header";
import DisplayIngredient from "./DisplayRecipeComponents/DisplayIngredient";
import RecipeImages from "./DisplayRecipeComponents/RecipeImages";
import DisplaySteps from "./DisplayRecipeComponents/DisplaySteps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeData } from "./Slice/showRecipe.Slice";

const DisplayRecipe = () => {
  const params = useParams();
  let recipeID = decodeURIComponent(params.id);
  console.log({ recipeID });
  const dispatch = useDispatch();
  const showData = JSON.parse(localStorage.getItem("recipeData")) || [];

  const data = useSelector((state) => state.recipeData);

  useEffect(() => {
    dispatch(getRecipeData(recipeID));
  }, [recipeID, dispatch]);

  console.log("data from display recipe", data);

  let currentRecipe = {};

  for (let i = 0; i < showData.length; i++) {
    if (showData[i].id == recipeID) {
      currentRecipe = showData[i];
    }
  }
  console.log({ currentRecipe });

  return (
    <>
      <div className="bg-slate-100 h-screen">
        <Header />
        <div className="w-100 bg-[url('')] ">
          <DisplayRecipeHeader recipeName={currentRecipe.name} />
          <div className="flex flex-row justify-center">
            <RecipeImages Image={currentRecipe.images} />
          </div>

          <div className="flex flex-row justify-center gap-60 item-start m-10">
            <DisplayIngredient ingredient={currentRecipe.ingredients} />
            <div className="mx-20">
              <DisplaySteps steps={currentRecipe.steps} />
            </div>
          </div>
        </div>
      </div>

      {/* <p>Recipe Name: {currentRecipe.name}</p>
      <p>Keywords: {currentRecipe.keywords.join(", ")}</p>
      <p>Ingredients: {JSON.stringify(currentRecipe.ingredients)}</p>
      <p>Steps: {currentRecipe.steps.join(", ")}</p>
      <p>Images: {currentRecipe.images.join(", ")}</p>
       */}
    </>
  );
};

export default DisplayRecipe;
