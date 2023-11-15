import AddRecipeForm from "./AddRecipeForm";

import { Link } from "react-router-dom";
import Header from "./header";

const DisplayAddRecipeSection = () => {
  return (
    <>
      <div className="bg-slate-50 h-screen w-10/12">
        <AddRecipeForm />
      </div>
    </>
  );
};

export default DisplayAddRecipeSection;
