import { useState } from "react";
import AddRecipeForm from "./AddRecipeForm";
import ShowRecipeList from "./ShowRecipeList";
import { Link } from "react-router-dom";
import Header from "./header";
const DisplayShowRecipeSection = () => {
  // const [display, setDisplay] = useState(true);

  // const onAddRecipeClick = () => {
  //   setDisplay(true);
  // };
  // const onShowRecipeClick = () => {
  //   setDisplay(false);
  // };
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="bg-sky-400 w-80 h-screen">
          <Link to="/">
            <button className="border-b-2 w-full p-2 hover:bg-sky-700 ">
              Add Recipe
            </button>
          </Link>

          <button className="border-b-2 w-full p-2 bg-sky-700 ">
            Show Recipe
          </button>
        </div>
        <div className="bg-slate-50 h-screen w-10/12">
          <ShowRecipeList />
        </div>
      </div>
    </>
  );
};

export default DisplayShowRecipeSection;
