import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      {/* desktop menu and mobile menu button */}
      <div className="container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
        {/* logo */}
        <div>
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>

        {/* menu items */}
        <ul className="md:flex hidden space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* search and theme toggler */}
        <div className="md:flex hidden items-center space-x-4">
          {/* search */}
          <Search />

          {/* theme toggler */}
        </div>
      </div>

      {/* mobile menu items */}
      <div className="hidden">Mobile menu items</div>
    </nav>
  );
};

export default Navbar;
