import React from "react";
const DisplayRecipeHeader = ({ recipeName }) => {
  return (
    <>
      {/* <div className="h-14 bg-amber-300">
        <p className="px-2.5 font-serif py-1.5 text-3xl text-sky-850">
          Recipe Title:- {recipeName}
        </p>
      </div> */}
      <div className="p-7">
        <span className="text-4xl font-bold font-serif">
          Recipe Name:- <span>{recipeName}</span>
        </span>
      </div>
    </>
  );
};

export default DisplayRecipeHeader;
