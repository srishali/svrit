import React from "react";
import { PenTool, ClipboardList, Wallet } from "lucide-react";
import { featureCards } from "../mock";

const iconMap = { PenTool, ClipboardList, Wallet };

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3d0764] tracking-tight">
            SVR IT Software Solutions
          </h2>
          <p className="mt-6 text-gray-600 text-[16px] leading-relaxed max-w-4xl mx-auto">
            Your trusted partner for IT staffing and consulting services across the USA and India. We specialize in providing top-tier talent and innovative solutions for all your website development needs. Our mission is to connect businesses with highly skilled IT professionals who can drive your projects to success. Whether you're a startup looking to build your first website or an established enterprise seeking to enhance your online presence, we have the expertise to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {featureCards.map((f, idx) => {
            const Icon = iconMap[f.icon] || PenTool;
            const opacity = idx === 2 ? "opacity-70" : "";
            return (
              <div
                key={f.title}
                className="relative bg-white border border-gray-200 rounded-xl p-8 pt-14 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute -top-8 left-8 w-16 h-16 rounded-lg bg-[#5a1a8a] flex items-center justify-center shadow-lg ${opacity}`}>
                  <Icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className={`text-2xl font-bold text-[#3d0764] mb-4 ${opacity}`}>{f.title}</h3>
                <p className={`text-gray-600 text-[15px] leading-relaxed ${opacity}`}>{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
