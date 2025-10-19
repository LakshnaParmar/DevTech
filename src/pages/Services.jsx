import React from "react";
import logo from '../assets/logo.webp'
const Services = () => {
  const services = [
    {
      title: "Custom SaaS Development",
      description:
        "End-to-end development of tailored SaaS applications designed to solve your specific business challenges.",
      img: logo,
    },
    {
      title: "Legacy System Migration",
      description:
        "Seamlessly transition your outdated systems to modern, cloud-based SaaS solutions without disrupting operations.",
      img: logo,
    },
    {
      title: "UI/UX Design",
      description:
        "Create intuitive, engaging user experiences that keep your customers coming back for more.",
      img: logo,
    },
    {
      title: "API Integration",
      description:
        "Connect your SaaS platform with third-party services and systems for enhanced functionality and data flow.",
      img: logo,
    },
    {
      title: "Security & Compliance",
      description:
        "Implement robust security measures and ensure your SaaS solution meets industry regulations and standards.",
      img: logo,
    },
    {
      title: "SaaS Analytics",
      description:
        "Gain valuable insights into user behavior and performance metrics to optimize your SaaS product.",
      img: logo,
    }
  ];

  return (
    <section className="py-25">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto my-5"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer comprehensive SaaS development solutions tailored to your
          unique business needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-sky-950 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
