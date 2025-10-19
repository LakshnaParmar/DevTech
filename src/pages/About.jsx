import React from "react";
import aboutImg from '../assets/aboutImg.webp'

const About = () => {

    const testimonials = [
        {
            text: `"DevTech Digital transformed our business with their custom SaaS solution. Their team understood our needs perfectly and delivered a platform that has significantly improved our operational efficiency."`,
            author: "CEO, Technology Company",
        },
        {
            text: `"Working with DevTech Digital was a game-changer for our company. Their expertise in SaaS development helped us create a product that our customers love, and their ongoing support ensures we stay ahead of the curve."`,
            author: "Founder, Software Innovation Company",
        },
    ];

    return (
        <div>
            <div className="py-22 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
                    <div className="flex-1">
                        <img
                            src={aboutImg}
                            alt="About DevTech Digital"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>

                    <div className="flex-1 text-gray-700">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:text-center">About DevTech Digital</h2>
                        <p className="mb-4 leading-relaxed">
                            Founded with a passion for innovation and excellence, DevTech Digital
                            has been at the forefront of SaaS development since our inception. We
                            combine technical expertise with strategic thinking to deliver
                            solutions that not only meet but exceed our clients’ expectations.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            Our team of experienced developers, designers, and consultants work
                            collaboratively to transform complex challenges into elegant,
                            user-friendly software solutions that drive real business results.
                        </p>
                        <p className="leading-relaxed">
                            At DevTech Digital, we believe in building lasting partnerships with
                            our clients, understanding their unique needs, and delivering
                            solutions that help them stay ahead in today’s competitive digital
                            landscape.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-sky-950">
                        What Our Clients Say
                    </h2>
                    <div className="w-20 h-1 bg-red-500 mx-auto my-3"></div>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 px-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                        >
                            <p className="text-gray-700 italic mb-4">{item.text}</p>
                            <p className="text-sky-800 font-semibold text-sm">
                                - {item.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;





