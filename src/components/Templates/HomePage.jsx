import React from "react";
import Header from "../Organisms/header";
import ShowRecipeList from "../Organisms/ShowRecipeList";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="">
        <img
          src="https://img.freepik.com/free-photo/top-view-fresh-vegetables-various-spices-small-bowls-wooden-spoons-table-free-space_140725-147473.jpg?size=626&ext=jpg"
          alt="Homepage-background"
          className="h-96 w-screen object-cover"
        />
      </div>
      <ShowRecipeList />
    </div>
  );
};

export default HomePage;
