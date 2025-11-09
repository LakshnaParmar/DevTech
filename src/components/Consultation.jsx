import React from "react";
import { NavLink } from "react-router-dom";
import { Lightbulb, Cog, ShieldCheck } from "lucide-react";
import hero from "../assets/hero.png";

const Consultation = () => {
  return (
    <section className="relative w-full flex items-center h-auto min-h-[300px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[500px] pt-16 sm:pt-20 overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-20 md:py-28 text-center sm:text-left">
        <h1 className="text-[1.2rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
          Let’s Discuss Your Project
        </h1>

        <p className="text-yellow-400 text-[0.8rem] sm:text-base md:text-lg font-medium mt-3 mb-6">
          Transform your ideas into powerful digital solutions with DevTech.
        </p>

        <p className="text-gray-200 text-[0.75rem] sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl">
          Whether you’re a startup or an established enterprise, our team of
          experts is ready to turn your vision into scalable, secure, and
          user-friendly digital products that fuel real business growth.
        </p>

        {/* Key Highlights with Icons */}
        <div className="text-gray-300 text-[0.8rem] sm:text-sm md:text-base mb-10 space-y-4">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Lightbulb className="text-yellow-400 w-5 h-5" />
            <span>Personalized IT Consultation & Strategy Planning</span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Cog className="text-yellow-400 w-5 h-5" />
            <span>End-to-End Product Development with SaaS Expertise</span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="text-yellow-400 w-5 h-5" />
            <span>24/7 Security & Support to Keep Your Business Running</span>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-start">
          <NavLink to="/contact">
            <button
              className="
                relative overflow-hidden
                bg-gradient-to-r from-yellow-400 to-yellow-500 
                text-slate-900 font-semibold
                px-6 sm:px-10 py-2 sm:py-3 rounded-full
                text-[0.75rem] sm:text-base mt-2
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
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
