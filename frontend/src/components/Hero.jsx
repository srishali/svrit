import React from "react";
import { ArrowRight } from "lucide-react";
import { heroImage } from "../mock";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={heroImage}
              alt="Business professionals"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/20 pointer-events-none" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#3d0764] leading-[1.05] tracking-tight">
            LET'S START
            <br />
            BUSINESS HERE
          </h1>
          <div className="mt-6 flex items-center gap-2">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00b4f0]" />
              <span className="w-2 h-2 rounded-full bg-[#00b4f0]" />
              <span className="w-2 h-2 rounded-full bg-[#00b4f0]" />
            </div>
            <div className="h-[3px] w-24 bg-[#00b4f0] rounded-full" />
          </div>

          <p className="mt-6 text-gray-600 text-[17px] leading-relaxed max-w-xl">
            Welcome to <span className="font-semibold text-gray-800">SVR IT Software Solutions</span>, your trusted partner for{" "}
            <span className="font-semibold text-gray-800">
              Software Development, IT Support &amp;
            </span>{" "}
            IT Staffing and Consulting Services across the USA and India.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#00b4f0] hover:bg-[#0396cc] text-white px-8 py-3.5 rounded-md font-medium shadow-lg shadow-[#00b4f0]/30 transition-all hover:-translate-y-0.5"
          >
            <ArrowRight size={18} />
            <span className="underline underline-offset-2">Let's Meet</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
