import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden bg-gray-900 backdrop-blur-md border-t border-white/5 text-gray-400">
      {/* Subtle top divider to match Header's bottom border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="-m-6 flex flex-wrap">
          {/* BRAND */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <Logo width="80px" />
                  
                </div>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500 font-medium">
                  A modern, minimalist blogging platform built with React &
                  Appwrite. Focused on clean design and high-performance
                  writing.
                </p>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-gray-600">
                © All rights reserved 2026
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
             
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Legals
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-200"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
