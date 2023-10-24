import { useState } from "react";
import AddInputField from "../Molecules/AddInputField";

const AddRecipeForm = () => {
  return (
    <div className="flex flex-col gap-4 mx-2 my-2">
      <div className="flex flex-row gap-10">
        <label> Name of Recipe </label>
        <input type="text" placeholder="Enter name of recipe" />
      </div>
      <div>
        <AddInputField
          btnName="Add Ingredients"
          placeholder="Enter Name of Ingredient"
        />
      </div>
      <div>
        <AddInputField btnName="Add Steps" placeholder="Enter Step" />
      </div>
    </div>
  );
};

export default AddRecipeForm;
