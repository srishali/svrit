import React from "react";
import { Target, Handshake, Headphones, ArrowRight } from "lucide-react";
import { servicesCards } from "../mock";

const iconMap = { Target, Handshake, Headphones };

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#00b4f0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-white/95 text-[16px] max-w-3xl mx-auto">
            At SVR IT Software Solutions, we offer comprehensive staffing and recruiting services designed to meet the evolving needs of businesses across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesCards.map((s, idx) => {
            const Icon = iconMap[s.icon] || Target;
            const isFaded = idx === 2;
            return (
              <div
                key={s.title}
                className={`relative rounded-xl border border-white/40 bg-[#00b4f0] p-8 pt-14 transition-all duration-300 hover:-translate-y-1 hover:bg-[#01a4dc] ${
                  isFaded ? "opacity-70" : ""
                }`}
              >
                <div className="absolute -top-8 left-8 w-16 h-16 rounded-lg bg-white flex items-center justify-center shadow-lg">
                  <Icon size={30} className="text-[#00b4f0]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-white/95 text-[15px] leading-relaxed mb-6">
                  {s.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white font-medium underline underline-offset-4 hover:text-[#3d0764] transition-colors">
                  <ArrowRight size={16} />
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
