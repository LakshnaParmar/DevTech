import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-white bg-gradient-to-bl from-slate-950 to-slate-500">

      {/* Main Footer Content */}
      <div className="pt-15 pb-12 px-6 sm:px-10 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Column 1 - Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">DevTech Solution Provider</h2>
            <p className="text-sm leading-relaxed">
              At DevTech Solution Provider, we help businesses grow through innovative SaaS and full-stack solutions built for performance, scalability, and long-term success.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>UI/UX Design</li>
              <li>Website Design</li>
              <li>Website Development</li>
              <li>App Development</li>
              <li>WordPress Development</li>
              <li>SaaS Development</li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: preetam.devji123@gmail.com</li>
              <li>Phone: +92 335 3464838</li>
              <li>Location: Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-white text-sm">
          © {new Date().getFullYear()} DevTech Solution Provider. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
