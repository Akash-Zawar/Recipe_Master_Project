import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Templates/Dashboard.jsx";
import DisplayRecipe from "./components/Organisms/DisplayRecipe.jsx";

import DisplayAddRecipeSection from "./components/Organisms/DisplayAddRecipeSection.jsx";
import DisplayShowRecipeSection from "./components/Organisms/DisplayShowRecipeSection.jsx";

const myRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Dashboard />,
  // },
  {
    path: "/",
    element: <DisplayAddRecipeSection />,
  },
  {
    path: "/recipes",
    element: <DisplayShowRecipeSection />,
  },
  {
    path: "/recipes/recipe-details/:id",
    element: <DisplayRecipe />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={myRouter} />
  </React.Fragment>
);
