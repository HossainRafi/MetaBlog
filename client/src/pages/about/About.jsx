import NewsLetter from "./../home/NewsLetter";
import bannerImage_1 from "../../assets/mission-banner-1.jpg";
import bannerImage_2 from "../../assets/mission-banner-2.jpg";
import teamMember from "../../assets/team-member.jpg";
import Reveal from "./../../animation/Reveal";

const About = () => {
  return (
    <section className="pt-28 pb-5">
      <div className="container max-w-7xl px-4 mx-auto ">
        {/* hero */}
        <Reveal>
          <div className="text-center mb-20">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className="mt-5">
              Learn more about our company, our mission, and the team that
              drives us forward. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum nam libero obcaecati. Earum veniam
              debitis, repellendus omnis fugit sequi. Quia quaerat voluptatem,
              dolores vel officiis nulla corrupti nemo dolorem omnis?
            </p>
          </div>{" "}
        </Reveal>

        {/* mission */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                We are dedicated to providing the best solutions for our
                customers by focusing on quality, innovation, and customer
                satisfaction. Our mission is to help you succeed in the digital
                age by delivering reliable and impactful digital products and
                services.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nulla porro minima qui facilis ipsam molestiae sint mollitia
                facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto
                blanditiis consequuntur maxime!
              </p>
            </div>
            <div>
              <img
                src={bannerImage_1}
                className="w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200"
              />
            </div>
          </div>
        </Reveal>

        {/* vision */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-4">Our Vission</h2>
              <p className="mb-4">
                We are dedicated to providing the best solutions for our
                customers by focusing on quality, innovation, and customer
                satisfaction. Our mission is to help you succeed in the digital
                age by delivering reliable and impactful digital products and
                services.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nulla porro minima qui facilis ipsam molestiae sint mollitia
                facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto
                blanditiis consequuntur maxime!
              </p>
            </div>
            <div className="order-2 md:order-1">
              <img
                src={bannerImage_2}
                className="w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200"
              />
            </div>
          </div>
        </Reveal>

        {/* team section */}
        <Reveal>
          <div>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src={teamMember}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src={teamMember}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src={teamMember}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src={teamMember}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <NewsLetter />
        </Reveal>
      </div>
    </section>
  );
};

export default About;
