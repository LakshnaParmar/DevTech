import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full flex justify-center items-center py-22 px-4 bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-sky-950 mb-6">
          Contact Us
        </h2>
         <div className="w-20 h-1 bg-red-500 mx-auto my-5"></div>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          Have a question or want to work together? Fill out the form below, and
          we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-sky-950 text-white py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-sky-900 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
