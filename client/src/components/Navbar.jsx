import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { useContext, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //state for toggle menu
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // function for toggle menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <li onClick={toggleMobileMenu}>
            <NavLink
              to="/add-blog"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              Add Blog
            </NavLink>
          </li>
          <li onClick={toggleMobileMenu}>
            <NavLink
              to="/manage-blog"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              Manage Blog
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
          <div
            className={`w-12 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              darkMode ? "justify-end" : "justify-start"
            }`}
          >
            <button
              onClick={() => setDarkMode((darkMode) => !darkMode)}
              className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
            >
              {darkMode ? (
                <BsFillMoonStarsFill className="text-gray-500" />
              ) : (
                <BsSunFill className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>

        {/* mobile menu bar */}
        <div className="md:hidden block">
          <button onClick={toggleMobileMenu}>
            {isMenuOpen ? (
              <FaTimes className="size-6 text-gray-600" />
            ) : (
              <FaBars className="size-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 py-4">
            <li onClick={toggleMobileMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-secondary"
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-secondary"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink
                to="/add-blog"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-secondary"
                }
              >
                Add Blog
              </NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink
                to="/manage-blog"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-secondary"
                }
              >
                Manage Blog
              </NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-secondary"
                }
              >
                About
              </NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-secondary"
                }
              >
                Contact
              </NavLink>
            </li>

            {/* theme toggler */}
            <div
              className={`w-12 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                darkMode ? "justify-end" : "justify-start"
              }`}
            >
              <button
                onClick={() => setDarkMode((darkMode) => !darkMode)}
                className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
              >
                {darkMode ? (
                  <BsFillMoonStarsFill className="text-gray-500" />
                ) : (
                  <BsSunFill className="text-yellow-500" />
                )}
              </button>
            </div>

            {/* search */}
            <Search />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
