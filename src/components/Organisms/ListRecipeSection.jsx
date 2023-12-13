import { useState } from "react";
import HeaderV2 from "../../assets/Header/headerV2";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ListRecipeSection = () => {
  const [recipeData, setRecipeData] = useState(
    JSON.parse(localStorage.getItem("recipeData")) || []
  );
  const handleDelete = (recipeId) => {
    const updatedRecipeData = recipeData.filter(
      (recipe) => recipe.id !== recipeId
    );
    setRecipeData(updatedRecipeData);
    localStorage.setItem("recipeData", JSON.stringify(updatedRecipeData));
    toast.success("Recipe deleted successfully!");
  };

  console.log(recipeData);
  return (
    <>
      <HeaderV2 />
      <div>
        <p className="text-lg mx-10 my-2">Following is list of recipes: </p>
        <div className="flex flex-col">
          {recipeData.map((field, index) => {
            return (
              <div key={index}>
                <Link to={`/recipe-details/${encodeURIComponent(field.id)}`}>
                  <p className="list-decimal mx-20 my-4 hover:text-med-brown-coffee inline-block">
                    {index + 1}. {field.name}
                  </p>
                </Link>
                <Link
                  to={`/edit-recipe-details/${encodeURIComponent(field.id)}`}>
                  <button>✏️</button>
                </Link>
                <button onClick={() => handleDelete(field.id)}>🗑️</button>
              </div>
            );
          })}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default ListRecipeSection;

//Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio doloribus sunt id voluptates modi cum illum iure inventore quaerat debitis laborum voluptatibus nobis, error tempora amet, at sed eligendi harum?
