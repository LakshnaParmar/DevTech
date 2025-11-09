import React, { useState } from "react";
import {
  Cloud,
  Shield,
  PenTool,
  Database,
  BarChart3,
  RefreshCcw,
} from "lucide-react";
import { NavLink } from "react-router-dom"; // (use react-router-dom, not react-router)

const Services = () => {
  const services = [
    {
      title: "Custom SaaS Development",
      description:
        "End-to-end SaaS application design and development to meet your business goals with scalable cloud architecture.",
      icon: <Cloud className="w-10 h-10 text-sky-700" />,
    },
    {
      title: "Legacy System Migration",
      description:
        "Seamlessly move your legacy systems to modern cloud platforms without losing data or business continuity.",
      icon: <RefreshCcw className="w-10 h-10 text-sky-700" />,
    },
    {
      title: "UI/UX Design",
      description:
        "We create engaging, user-focused interfaces that enhance customer satisfaction and retention.",
      icon: <PenTool className="w-10 h-10 text-sky-700" />,
    },
    {
      title: "API Integration",
      description:
        "Integrate third-party services and systems for improved workflow, automation, and real-time data exchange.",
      icon: <Database className="w-10 h-10 text-sky-700" />,
    },
    {
      title: "Security & Compliance",
      description:
        "Keep your SaaS product secure with top-tier encryption, compliance, and privacy measures.",
      icon: <Shield className="w-10 h-10 text-sky-700" />,
    },
    {
      title: "SaaS Analytics",
      description:
        "Use advanced analytics to understand user behavior and make data-driven business decisions.",
      icon: <BarChart3 className="w-10 h-10 text-sky-700" />,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-sky-50 to-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-950">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto my-2"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base py-2">
          Empowering businesses through modern, secure, and high-performing IT
          solutions.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-[90%] sm:max-w-3xl md:max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 to-slate-700 shadow-lg rounded-2xl px-6 sm:px-10 py-12 sm:py-16 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
            >
              <div className="mb-6 p-4 rounded-full bg-sky-100 flex items-center justify-center shadow-inner hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 text-center px-6">
                {service.title}
              </h3>
              <p className="text-white text-center text-sm sm:text-base max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 bg-yellow-400 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-slate-950 hover:text-yellow-400 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 bg-yellow-400 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-slate-950 hover:text-yellow-400 transition"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2 sm:space-x-3">
          {services.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === current
                  ? "bg-yellow-400 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <NavLink to="/consultation">
          <button
            className="
              relative overflow-hidden
              bg-gradient-to-r from-yellow-400 to-yellow-500 
              text-slate-900 font-semibold 
              px-8 sm:px-10 py-3 
              rounded-full text-[0.8rem] sm:text-base 
              shadow-md transition-all duration-500
              hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]
              hover:from-yellow-300 hover:to-yellow-400
              hover:-translate-y-1
              before:content-[''] before:absolute before:top-0 before:left-[-100%]
              before:w-full before:h-full
              before:bg-gradient-to-r before:from-white/30 before:to-transparent
              before:transition-all before:duration-500 hover:before:left-[100%]
            "
          >
            Let’s Discuss Your Project
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Services;
