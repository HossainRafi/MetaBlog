import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="my-16">
      <div className="text-center mb-8">
        {/* banner heading */}
        <h1 className="text-4xl font-semibold mb-4">Meta Blog</h1>

        {/* add and manage blog button */}
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <li>
            <Link
              to="/"
              className="bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add-blog"
              className="bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary"
            >
              Add New Blog
            </Link>
          </li>
          <li>
            <Link
              to="/manage-blog"
              className="bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary"
            >
              Manage Blog
            </Link>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default Banner;
