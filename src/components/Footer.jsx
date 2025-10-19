import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-12 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">DevTech Digital</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering businesses with modern SaaS and full-stack solutions that drive innovation, scalability, and growth.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>App Development</li>
            <li>Web Design</li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: info@devtechdigital.com</li>
            <li>Phone: +92 335 3464838</li>
            <li>Location: Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DevTech Digital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
