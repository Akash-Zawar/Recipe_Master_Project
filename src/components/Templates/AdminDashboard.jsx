import React from "react";
import Header from "../Organisms/header";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <Link to="/add-recipes">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-full">
          Add Recipes Form
        </button>
      </Link>
    </>
  );
};

export default AdminDashboard;
