import React from "react";
import hero from "../assets/hero.png";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <section className="relative w-full flex justify-center items-center h-[280px] sm:h-[350px] md:h-[450px] lg:h-[475px] pt-20 sm:pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[475px] object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] text-center py-20 sm:py-25 md:py-32 lg:py-40">
        <h1 className="text-[1.3rem] sm:text-2xl md:text-4xl lg:text-5xl font-bold text-sky-950 leading-snug">
          Innovative SaaS Solutions for Your Business
        </h1>

        <p className="text-gray-600 text-[0.75rem] sm:text-base md:text-lg lg:text-xl py-4 sm:py-8">
          At <span className="font-semibold text-sky-950">DevTech Digital</span>,
          we transform your ideas into powerful, scalable, and user-friendly
          software-as-a-service solutions that drive growth and efficiency.
        </p>

        <div className="flex justify-center items-center">
         <NavLink to='/contact'>
           <button className="bg-sky-950 text-white px-8 sm:px-8 py-2 sm:py-3 rounded-full text-[0.75rem] sm:text-base hover:bg-sky-900 transition-all duration-300 w-[140px] sm:w-auto">
            Get Started
          </button>
         </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
