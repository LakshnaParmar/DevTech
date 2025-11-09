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
    <section className="w-full flex justify-center items-center py-22 px-4 bg-gray-50 text-white">
      <div className="w-full max-w-2xl bg-gradient-to-tl from-slate-950 to-slate-500 shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
          Contact Us
        </h2>
         <div className="w-20 h-1 bg-yellow-500 mx-auto my-5"></div>
        <p className="text-center mb-8 text-sm sm:text-base">
          Have a question or want to work together? Fill out the form below, and
          we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-800 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-800 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-800 text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            // className="bg-gradient-to-br from-slate-950 hover:to-slate-500 hover:bg-gradient-to-tr hover:from-slate-950 to-slate-500 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-sky-900 transition-all duration-300 hover:text-yellow-400"
               className="
              relative overflow-hidden
              bg-gradient-to-r from-yellow-500 to-yellow-600 
              text-slate-900 font-semibold 
              px-8 sm:px-10 py-3 
              rounded-full text-[0.8rem] sm:text-base 
              shadow-md transition-all duration-500
              hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]
              hover:from-yellow-400 hover:to-yellow-500
              hover:-translate-y-1
              before:content-[''] before:absolute before:top-0 before:left-[-100%]
              before:w-full before:h-full
              before:bg-gradient-to-r before:from-white/30 before:to-transparent
              before:transition-all before:duration-500 hover:before:left-[100%]
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
