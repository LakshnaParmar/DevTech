import React from "react";
import hero1 from "../assets/hero1.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] pt-16 sm:pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero1}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30 animate-[zoomIn_8s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[92%] sm:w-[85%] md:w-[70%] mx-auto text-center sm:text-left px-4 sm:px-8 md:px-12 py-12 sm:py-20 md:py-28">
        <h1 className="text-[1.1rem] sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight">
          Smart SaaS Solutions That Help Your Business Grow
        </h1>

        <p className="text-gray-200 text-[0.7rem] sm:text-sm md:text-lg lg:text-xl py-3 sm:py-6">
          At{" "}
          <span className="text-yellow-500 font-semibold cursor-pointer hover:text-yellow-300 transition-colors">
            DevTech Solutions Provider
          </span>
          , we turn your ideas into reliable, scalable, and easy-to-use SaaS
          products designed to boost efficiency and drive real business growth.
        </p>

        <div className="flex justify-center sm:justify-start">
          <NavLink to="/contact">
            <button
              className="
                relative overflow-hidden
                bg-gradient-to-r from-yellow-500 to-yellow-500 
                text-slate-900 font-semibold
                px-6 sm:px-10 py-2 sm:py-3 rounded-full
                text-[0.7rem] sm:text-base mt-2
                shadow-md transition-all duration-500
                hover:shadow-[0_0_25px_rgba(250,204,21,0.6)]
                hover:from-yellow-300 hover:to-yellow-400
                hover:-translate-y-1
                before:content-[''] before:absolute before:top-0 before:left-[-100%]
                before:w-full before:h-full
                before:bg-gradient-to-r before:from-white/30 before:to-transparent
                before:transition-all before:duration-500 hover:before:left-[100%]
              "
            >
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      {/* Keyframes for zoom animation (Tailwind custom animation inline style) */}
      <style>{`
        @keyframes zoomIn {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
