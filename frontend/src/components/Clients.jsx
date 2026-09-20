import React from "react";
import { clientLogos } from "../mock";

const Clients = () => {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3d0764] tracking-tight">
            Our Clients
          </h2>
          <p className="mt-3 text-gray-600">
            We are proud to associate with world leaders!
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee w-max">
            {doubled.map((c, idx) => (
              <div key={idx} className="flex items-center justify-center h-24 w-48 shrink-0">
                <img src={c.url} alt={c.name} className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
