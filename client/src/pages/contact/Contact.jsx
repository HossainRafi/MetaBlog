import contactImg from "../../assets/contact-animation.gif";

const Contact = () => {
  return (
    <section className="pt-28 pb-5">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* left section */}
          <div className="space-y-4">
            <img src={contactImg} alt="" className="w-44" />
            <h3 className="text-xl font-semibold ">Contact Information</h3>
            <p>
              Feel free to reach out to us through the form or the contact
              information below:
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 1234 Street Name, City, Country
            </p>
          </div>

          {/* form section */}
          <div>form</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
