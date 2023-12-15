import { Link } from "react-router-dom";
import HeaderV2 from "../../assets/Header/headerV2";

const AdminDashboard = () => {
  return (
    <>
      <HeaderV2 />
      <div className="flex flex-col">
        <Link to="/add-recipes">
          <button className="bg-med-brown-coffee hover:bg-brown-coffee text-white font-bold py-2 px-4 m-2 rounded-full">
            Add Recipes Form
          </button>
        </Link>
        <Link to="/recipes">
          <button className="bg-med-brown-coffee hover:bg-brown-coffee text-white font-bold py-2 px-4 m-2 rounded-full w-40">
            List recipe
          </button>
        </Link>
      </div>
    </>
  );
};

export default AdminDashboard;
