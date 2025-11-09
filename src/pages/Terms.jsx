import React from 'react'
import hero from "../assets/hero.png";

const Terms = () => {
  return (
    <>
      <div>
        <div className="relative w-full flex justify-center items-center h-[300px] pt-20 sm:pt-20 overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <img
              src={hero}
              alt="Hero Background"
              className="w-full h-[300px] object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold text-white leading-snug">
              Terms and Conditions
            </h1>
            <p className="text-white text-xl py-5">
              Last Updated: May 20, 2025
            </p>
          </div>
        </div>


        <div className="bg-gray-50 py-10 px-5 sm:px-10 md:px-15 lg:px-25 ">
          <div className="bg-white shadow-md rounded-xl py-10 px-3 sm:px-5 md:px-10 lg:px-15 z-10 relative">
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-sky-950 mb-3 border-b border-gray-200 pb-2">
                Introduction
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                DevTech Digital ("we," "our," or "us") respects your privacy and is
                committed to protecting your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our SaaS services.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
                Please read this Privacy Policy carefully. By accessing or using our
                services, you acknowledge that you have read, understood, and agree
                to be bound by this Privacy Policy. If you do not agree with our
                policies and practices, please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-sky-950 mb-3 border-b border-gray-200 pb-2">
                Information We Collect
              </h2>
              <ul className="list-disc ml-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                <li>
                  <strong>Personal Information:</strong> such as name, email, and
                  contact details you provide during sign-up or communication.
                </li>
                <li>
                  <strong>Usage Data:</strong> including your IP address, browser
                  type, device information, and pages visited.
                </li>
                <li>
                  <strong>Cookies:</strong> used to enhance your browsing
                  experience and personalize content.
                </li>
              </ul>
            </section>

            {/* Use of Information */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-sky-950 mb-3 border-b border-gray-200 pb-2">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-2 mt-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Communicate with you about updates, support, and offers.</li>
                <li>Ensure security and prevent fraudulent activity.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-sky-950 mb-3 border-b border-gray-200 pb-2">
                Your Rights
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You have the right to access, correct, or delete your personal data.
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@devtechdigital.com"
                  className="text-sky-700 hover:underline"
                >
                  privacy@devtechdigital.com
                </a>
                .
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-sky-950 mb-3 border-b border-gray-200 pb-2">
                Contact Us
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                If you have any questions or concerns about this Privacy Policy,
                please contact:
              </p>
              <p className="text-gray-700 text-sm sm:text-base mt-2">
                <strong>DevTech Digital</strong> <br />
                Email: info@devtechdigital.com <br />
                Karachi, Pakistan
              </p>
            </section>
          </div>
        </div>

      </div>

    </>
  )
}

export default Terms
