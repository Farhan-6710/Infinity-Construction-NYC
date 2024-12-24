import ServicesForm from "./ServicesForm";
import ServicesAbout from "./ServicesAbout";

const ContactSection = () => {
  return (
    <>
      {/* About and Form Section */}
      <div className="flex flex-col gap-6 bg-accent dark:bg-gray-900 py-12 border-b border">
        <div>
          <div className="text-center mb-4">
            <h2
              className="text-3xl sm:text-5xl text-tertiary dark:text-white font-bold"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Contact Us
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* About Section */}
          <div className="w-full lg:w-1/2">
            <ServicesAbout />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <ServicesForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
