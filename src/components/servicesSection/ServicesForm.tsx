"use client"

import React, { useState } from "react";
import { Oval } from "react-loader-spinner"; // You can replace this with any loader of your choice.

const ServicesForm: React.FC = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for loading and response message
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      // Send form data to the backend API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setResponseMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-6 lg:p-12 lg:py-6 text-black dark:text-white"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <h2 className="mb-8 text-2xl font-semibold lg:text-4xl">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
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
            disabled={loading}
          >
            {loading ? (
              <Oval color="white" strokeWidth={5} height={24} width={92} secondaryColor="wheat" />
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-center text-lg">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ServicesForm;
