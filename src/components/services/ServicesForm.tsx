import React from "react";

const ServicesForm: React.FC = () => {
  return (
    <div
      className="p-6 lg:p-12 text-black dark:text-white"
      style={{
        fontFamily: "var(--font-forum)",
      }}
    >
      <h2 className="mb-8 text-2xl font-semibold lg:text-4xl">Get in Touch</h2>
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 mt-2 rounded-lg text-black dark:text-white dark:bg-slate-950"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-2 rounded-lg text-black dark:text-white dark:bg-slate-950"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-lg">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Enter your message"
            className="w-full px-4 py-2 mt-2 rounded-lg text-black dark:text-white dark:bg-slate-950"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="py-3 px-4 bg-secondary transition-all duration-200 hover:bg-stone-900 text-white rounded-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicesForm;
