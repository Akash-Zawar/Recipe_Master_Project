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
import { Provider } from "react-redux";
import store from "./components/redux/store";
import EditRecipeDetails from "./components/Organisms/editRecipeDetails";

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
    path: "/recipe-details/:id",
    element: <DisplayRecipe />,
  },
  {
    path: "/edit-recipe-details/:id",
    element: <EditRecipeDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={myRouter} />
  </Provider>
);
