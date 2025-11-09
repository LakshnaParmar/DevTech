import React from "react";
import aboutImg from "../assets/aboutImg.webp";
import { Users, Target, Award } from "lucide-react";

const About = () => {
    const testimonials = [
        {
            text: `"Our clients appreciate our attention to detail, clear communication, and commitment to delivering quality results every time."`,
            author: "CEO, Technology Company",
        },
        {
            text: `"Our clients trust us for our professionalism, transparent process, and dedication to delivering high-quality digital solutions that drive real business growth."`,
            author: "Founder, Software Innovation Company",
        },
    ];

    return (
        <section className=" text-white overflow-hidden">
            {/* About Section */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 py-25">
                {/* Image */}
                <div className="flex-1 relative group">
                    <img
                        src={aboutImg}
                        alt="About DevTech Solutions Provider"
                        className="rounded-2xl  shadow-lg w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-5">
                    <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-sky-950">
                        About
                    </h2>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2 mb-5"></div>

                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                        At <span className="text-yellow-400 font-semibold">DevTech Solutions Provider</span>, we help businesses
                        grow through innovative digital solutions. From SaaS products to
                        enterprise software, we combine strategy, design, and technology to
                        create experiences that deliver real results.
                    </p>

                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                        Our team of talented developers, designers, and strategists work
                        hand-in-hand to transform your ideas into scalable, secure, and
                        engaging products that make a lasting impact.
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                        <div className="flex flex-col items-center text-center">
                            <Users className="w-10 h-10 text-yellow-400 mb-2 " />
                            <h4 className="font-semibold text-white">Experienced Team</h4>
                            <p className="text-gray-500 text-sm">
                                Passionate professionals who care about your success.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Target className="w-10 h-10 text-yellow-400 mb-2" />
                            <h4 className="font-semibold text-white">Client-Focused</h4>
                            <p className="text-gray-500 text-sm">
                                We craft solutions tailored to your specific goals.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Award className="w-10 h-10 text-yellow-400 mb-2" />
                            <h4 className="font-semibold text-white">Trusted Quality</h4>
                            <p className="text-gray-500 text-sm">
                                Recognized for reliable, high-performance results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 py-20 px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-sky-950 mb-6">
                    What Our Clients Say
                </h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10"></div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-tl from-slate-950 to-slate-500 rounded-2xl p-8 shadow-lg border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
                        >
                            <p className="text-gray-300 italic mb-4">{item.text}</p>
                            <p className="text-yellow-400 font-semibold text-sm">
                                - {item.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
