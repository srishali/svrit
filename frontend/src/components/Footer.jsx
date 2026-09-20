import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "../mock";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#3d0764] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-md border-2 border-[#00b4f0] flex items-center justify-center bg-transparent">
                <span className="text-white font-extrabold text-lg">SVR</span>
              </div>
              <span className="text-[#00b4f0] font-medium text-lg">IT Software Solutions</span>
            </div>
            <p className="text-white/80 leading-relaxed">{siteConfig.contact.address}</p>
          </div>

          <div>
            <h4 className="text-[#00b4f0] font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#00b4f0] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#00b4f0] transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#00b4f0] font-bold text-lg mb-4">Quick Link</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#00b4f0] transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-[#00b4f0] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin size={18} className="text-[#00b4f0]" />
            </div>
            <span>{siteConfig.contact.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Phone size={18} className="text-[#00b4f0]" />
            </div>
            <span>{siteConfig.contact.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Mail size={18} className="text-[#00b4f0]" />
            </div>
            <span className="break-all">{siteConfig.contact.email}</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} SVR IT Software Solutions • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
