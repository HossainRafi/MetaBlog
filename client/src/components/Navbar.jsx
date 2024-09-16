const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      {/* desktop menu and mobile menu button */}
      <div className="container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
        {/* logo */}
        <div>
          <a href="/">
            <img src="/logo.png" alt="logo" />
          </a>
        </div>

        {/* menu items */}
        <div>menu</div>

        {/* search and theme toggler */}
        <div>search and theme</div>
      </div>

      {/* mobile menu items */}
      <div className="hidden">Mobile menu items</div>
    </nav>
  );
};

export default Navbar;
