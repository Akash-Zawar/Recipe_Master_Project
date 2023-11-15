import { Link } from "react-router-dom";

const ShowRecipeList = () => {
  const showData = JSON.parse(localStorage.getItem("recipeData")) || [];

  return (
    <div className="flex justify-center">
      <div className="flex flex-row flex-wrap gap-10 my-10 w-2/3 justify-center ">
        {showData.map((field, index) => {
          return (
            <Link
              key={index}
              to={`/recipes/recipe-details/${encodeURIComponent(field.id)}`}>
              <div className=" bg-slate-300 hover:bg-slate-500 text-center min-w-full">
                <img
                  src={field.images[0].description}
                  alt="blank images"
                  className="h-52 w-44"
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
