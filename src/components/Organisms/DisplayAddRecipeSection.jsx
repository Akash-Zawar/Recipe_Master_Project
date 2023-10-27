import AddRecipeForm from "./AddRecipeForm";

import { Link } from "react-router-dom";
import Header from "./header";

const DisplayAddRecipeSection = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="bg-sky-400 w-80 h-screen">
          <button className="border-b-2 w-full p-2 bg-sky-700 ">
            Add Recipe
          </button>
          <Link to="/recipes">
            <button className="border-b-2 w-full p-2 hover:bg-sky-700 ">
              Show Recipe
            </button>
          </Link>
        </div>
        <div className="bg-slate-50 h-screen w-10/12">
          <AddRecipeForm />
        </div>
      </div>
    </>
  );
};

export default DisplayAddRecipeSection;