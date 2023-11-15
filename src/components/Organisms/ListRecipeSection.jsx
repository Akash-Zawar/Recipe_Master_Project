import ShowRecipeList from "./ShowRecipeList";
import { Link } from "react-router-dom";
import Header from "./header";
const ListRecipeSection = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="bg-sky-400 w-80 h-screen">
          <Link to="/add-recipes">
            <button className="border-b-2 w-full p-2 hover:bg-sky-700 ">
              Add Recipe
            </button>
          </Link>

          <button className="border-b-2 w-full p-2 bg-sky-700 ">Recipes</button>
        </div>
        <div className="bg-slate-50 h-screen w-10/12">
          <ShowRecipeList />
        </div>
      </div>
    </>
  );
};

export default ListRecipeSection;
