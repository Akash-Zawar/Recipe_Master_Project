import { useState } from "react";
import AddRecipeForm from "./AddRecipeForm";
import ShowRecipeList from "./ShowRecipeList";

const DisplaySection = () => {
  const [display, setDisplay] = useState(true);

  const onAddRecipeClick = () => {
    setDisplay(true);
  };
  const onShowRecipeClick = () => {
    setDisplay(false);
  };
  return (
    <div className="flex flex-row">
      <div className="bg-sky-400 w-80 h-screen">
        <button
          className="border-b-2 w-full p-2 hover:bg-sky-700 "
          onClick={onAddRecipeClick}>
          Add Recipe
        </button>
        <button
          className="border-b-2 w-full p-2 hover:bg-sky-700 "
          onClick={onShowRecipeClick}>
          Show Recipe
        </button>
      </div>
      <div className="bg-slate-50 h-screen w-10/12">
        {display ? <AddRecipeForm /> : <ShowRecipeList />}
      </div>
    </div>
  );
};

export default DisplaySection;
