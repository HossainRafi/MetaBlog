import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-primary py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
          {/* about section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div className="mt-5">
              <p className="text-base">
                <strong>Email:</strong> info@meta.net
              </p>
              <p className="text-base">
                <strong>Phone:</strong> 880 123 456 789
              </p>
            </div>
          </div>

          {/* quick links */}
          <div className="md:pl-16">
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-secondary">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary">
                  Author
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/*  category */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary">
                  Travel
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondary">
                  Economy
                </Link>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div>newsletter</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
