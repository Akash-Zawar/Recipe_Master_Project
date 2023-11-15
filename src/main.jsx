import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DisplayAddRecipeSection from "./components/Organisms/DisplayAddRecipeSection";
import DisplayRecipe from "./components/Organisms/DisplayRecipe";
import ListRecipeSection from "./components/Organisms/ListRecipeSection";
import HomePage from "./components/Templates/HomePage";
import AboutUs from "./components/Templates/AboutUs";
import ContactUs from "./components/Templates/ContactUs";
import AdminDashboard from "./components/Templates/AdminDashboard";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/add-recipes",
    element: <DisplayAddRecipeSection />,
  },
  {
    path: "/recipes",
    element: <ListRecipeSection />,
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
