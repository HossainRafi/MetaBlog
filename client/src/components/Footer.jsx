

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
          <div>links</div>

          {/*  category */}
          <div>category</div>

          {/* newsletter */}
          <div>newsletter</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
