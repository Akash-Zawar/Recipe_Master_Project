import { useState } from "react";
import AddInputFieldType1 from "../Molecules/AddInputFieldType1";
import AddInputFieldType2 from "../Molecules/AddInputFieldType2";
import { v4 as uuidv4 } from "uuid";

const AddRecipeForm = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipeNameValidation, setRecipeNameValidation] = useState(true);

  const [keywords, setKeywords] = useState([]);
  const [keywordValidation, setKeywordValidation] = useState(true);

  const [categories, setCategories] = useState("");
  const [categoriesValidation, setCategoriesValidation] = useState(true);

  const [steps, setSteps] = useState([]);
  const [stepValidation, setStepValidation] = useState(true);

  const [images, setImages] = useState([]);
  const [imageValidation, setImageValidation] = useState(true);

  const [ingredients, setIngredients] = useState([{}]);
  const [ingredientValidation, setIngredientValidation] = useState(true);

  const RecipeData = {
    id: uuidv4(),
    name: recipeName,
    keywords: keywords,
    categories: categories,
    ingredients: ingredients,
    steps: steps,
    images: images,
  };

  const addName = (e) => {
    setRecipeName(e.target.value);
    console.log({ recipeName });
  };

  const addCategory = (e) => {
    setCategories(e.target.value);
    console.log({ recipeName });
  };

  const addKeywords = (key) => {
    setKeywords(key);
  };

  const addSteps = (key) => {
    setSteps(key);
  };

  const addImages = (key) => {
    setImages(key);
  };

  const addIngredients = (ingredients) => {
    setIngredients(ingredients);
  };
  const isValidString = (string) => {
    let regex = /^[a-zA-Z\s]+$/;
    return regex.test(string);
  };

  const formValidation = () => {
    let isValid = true;

    if (
      keywords.length === 0 ||
      keywords.some((key) => {
        return !key.description;
      })
    ) {
      setKeywordValidation(false);
      isValid = false;
    }
    if (
      images.length === 0 ||
      images.some((key) => {
        return !key.description;
      })
    ) {
      setImageValidation(false);
      isValid = false;
    }
    if (
      steps.length === 0 ||
      steps.some((key) => {
        return !key.description;
      })
    ) {
      setStepValidation(false);
      isValid = false;
    }
    if (recipeName.length === 0 || !isValidString(recipeName)) {
      setRecipeNameValidation(false);
      isValid = false;
    }

    if (categories.length === 0 || !isValidString(categories)) {
      setCategoriesValidation(false);
      isValid = false;
    }

    if (
      ingredients.length === 0 ||
      ingredients.some((ingredient) => {
        return !ingredient.name || !ingredient.quantity || !ingredient.units;
      })
    ) {
      setIngredientValidation(false);
      isValid = false;
    }

    if (isValid) {
      setKeywordValidation(true);
      setImageValidation(true);
      setStepValidation(true);
      setRecipeNameValidation(true);
      setIngredientValidation(true);
      setCategoriesValidation(true);
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (formValidation()) {
      const getData = JSON.parse(localStorage.getItem("recipeData")) || [];
      getData.push(RecipeData);
      localStorage.setItem("recipeData", JSON.stringify(getData));
      console.log("Form submitted!");
    } else {
      console.log("error");
    }
  };

  console.log({ recipeName, keywords, ingredients, steps, images });

  return (
    <div className="flex flex-col gap-4 py-5 mx-10 my-5 ">
      <div className="flex flex-row gap-10">
        <label> Name of Recipe </label>
        <input
          type="text"
          placeholder="Enter name of recipe"
          className="border-solid border-2 mx-2 border-slate-950 px-1"
          value={recipeName}
          onChange={addName}
        />
        {!recipeNameValidation && (
          <p style={{ color: "red" }}>Please enter valid recipe name.</p>
        )}
      </div>
      <div className="flex flex-row gap-10">
        <label> Category </label>
        <input
          type="text"
          placeholder="Enter category"
          className="border-solid border-2 mx-2 border-slate-950 px-1"
          value={categories}
          onChange={addCategory}
        />
        {!categoriesValidation && (
          <p style={{ color: "red" }}>Please enter valid Category.</p>
        )}
      </div>
      <div className="flex gap-5 items-start">
        <p>Keywords</p>
        <AddInputFieldType1
          btnName="+"
          placeholder="Add keywords related to Recipe"
          data={keywords}
          passData={addKeywords}
        />
        {!keywordValidation && (
          <p style={{ color: "red" }}>
            Please add at least one keyword or valid keyword.
          </p>
        )}
      </div>
      <div className="flex gap-5 items-start">
        <p>Ingredients</p>
        <AddInputFieldType2
          btnName={["+"]}
          placeholder={[
            "Enter Name of Ingredient",
            "Enter Quantity",
            "Enter Units",
          ]}
          data={ingredients}
          passData={addIngredients}
        />
        {!ingredientValidation && (
          <p style={{ color: "red" }}>
            Please add at least one valid ingredient set (Name, Quantity, and
            Units).
          </p>
        )}
      </div>
      <div className="flex gap-5 items-start">
        <p>Steps</p>
        <AddInputFieldType1
          btnName="+"
          placeholder="Enter Step"
          data={steps}
          passData={addSteps}
        />
        {!stepValidation && (
          <p style={{ color: "red" }}>Please add at least one valid step.</p>
        )}
      </div>
      <div className="flex gap-5 items-start">
        <p>Images</p>
        <AddInputFieldType1
          btnName="+"
          placeholder="Enter Image link"
          data={images}
          passData={addImages}
        />
        {!imageValidation && (
          <p style={{ color: "red" }}>
            Please add at least one valid image link.
          </p>
        )}
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-full"
          onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddRecipeForm;
