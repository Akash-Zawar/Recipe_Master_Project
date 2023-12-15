import { useState } from "react";
import { Link } from "react-router-dom";

const ShowRecipeList = () => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // let msg = false;
  console.log(search);

  const recipeData = JSON.parse(localStorage.getItem("recipeData")) || [];
  let showData = recipeData;
  if (search.length > 0) {
    showData = recipeData.filter((field) =>
      field.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  // if (showData.length === 0) {
  //   msg = true;
  // }
  // showData.length === 0 ? !msg : msg;
  const sorting = (e) => {
    let recipeNames = [];
    for (let i = 0; i < showData.length; i++) {
      recipeNames.push(showData[i].name.toLowerCase());
    }
    recipeNames.sort();
    console.log(recipeNames);
    showData = [];
    for (let i = 0; i < recipeNames.length; i++) {
      for (let j = 0; j < showData.length; j++) {
        if (recipeNames[i].toLowerCase() === showData[j].name.toLowerCase()) {
          showData.push(showData[j]);
        }
      }
    }
    console.log(sortedArray);
    if (e.target.value === "a->z") {
      showData = sortedArray;
      console.log("sort a-z");
    } else {
      showData = sortedArray.reverse();
      console.log("sort z-a");
    }
  };
  console.log(showData);
  return (
    <div>
      <div className="max-w-md mx-auto   rounded-lg  my-8">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300 bg-light-brown-coffee">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-black pr-2 bg-light-brown-coffee placeholder-black"
            type="text"
            id="search"
            placeholder="Search something.."
            value={search}
            onChange={onSearch}
          />
        </div>
      </div>
      <div>
        <select
          name="Sort"
          id="sorting"
          className="text-black m-10 w-24"
          onChange={sorting}>
          <option value="a->z">Sort a-z</option>
          <option value="z->a">Sort z-a</option>
        </select>
      </div>
      <div className="flex flex-row flex-wrap gap-12 my-10 mx-32 justify-center  ">
        {showData.length > 0 ? (
          showData.map((field, index) => {
            return (
              <Link
                key={index}
                to={`/recipe-details/${encodeURIComponent(field.id)}`}>
                <div className=" bg-brown-coffee text-center min-w-full transition ease-in-out b hover:-translate-y-1 hover:scale-110 duration-100">
                  <img
                    src={field.images[0].description}
                    alt="blank images"
                    className="h-52 w-44"
                  />
                  <p className="text-white">{field.name}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold mb-4">
              Didn't find what you are looking for?
            </p>
            <p className="text-lg">No issues</p>
            <p className="text-lg">You can add your own custom recipe</p>
            <p className="text-lg mb-8">Click the button below</p>
            <Link to="/add-recipes">
              <button className="bg-med-brown-coffee hover:bg-brown-coffee text-white font-bold py-2 px-4 m-2 rounded-full">
                Add Recipes Form
              </button>
            </Link>
          </div>
        )}
      </div>
      {/* // {msg && ( */}
      {/* //   <div className="flex flex-col items-center justify-center">
      //     <p className="text-2xl font-bold mb-4">
      //       Didn't find what you are looking for?
      //     </p>
      //     <p className="text-lg">No issues</p>
      //     <p className="text-lg">You can add your own custom recipe</p>
      //     <p className="text-lg mb-8">Click the button below</p>
      //     <Link to="/add-recipes">
      //       <button className="bg-med-brown-coffee hover:bg-brown-coffee text-white font-bold py-2 px-4 m-2 rounded-full">
      //         Add Recipes Form
      //       </button>
      //     </Link>
      //   </div>
      // )} */}
    </div>
  );
};

export default ShowRecipeList;
