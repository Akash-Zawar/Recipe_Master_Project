import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-14 z-50 bg-yellow-200 flex flex-row justify-between px-4">
      <div>
        <p className=" px-2.5 font-serif py-1.5 text-3xl text-sky-850">
          Recipe Master
        </p>
      </div>
      <div className="flex flex-row gap-5 p-2 m-2">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about-us">
          <p>About Us</p>
        </Link>
        <Link to="/contact-us">
          <p>Contact Us</p>
        </Link>
        <Link to="/admin-dashboard">
          <p>Admin Dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
