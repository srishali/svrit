import React, { useState, useEffect } from "react";
import { Linkedin, Twitter, Instagram, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../mock";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-md border-2 border-[#00b4f0] flex items-center justify-center bg-white">
              <span className="text-[#3d0764] font-extrabold text-lg tracking-tight">
                {siteConfig.logoText.primary}
              </span>
            </div>
            <span className="text-[#00b4f0] font-medium text-lg hidden sm:inline">
              {siteConfig.logoText.secondary}
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-800 font-medium text-[15px] hover:text-[#00b4f0] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a href={siteConfig.socials.linkedin} className="w-9 h-9 bg-[#00b4f0] text-white flex items-center justify-center rounded-sm hover:bg-[#0396cc] transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={siteConfig.socials.twitter} className="w-9 h-9 bg-[#00b4f0] text-white flex items-center justify-center rounded-sm hover:bg-[#0396cc] transition-colors">
            <Twitter size={16} />
          </a>
          <a href={siteConfig.socials.instagram} className="w-9 h-9 bg-[#00b4f0] text-white flex items-center justify-center rounded-sm hover:bg-[#0396cc] transition-colors">
            <Instagram size={16} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#3d0764]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium hover:text-[#00b4f0]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#" className="w-9 h-9 bg-[#00b4f0] text-white flex items-center justify-center rounded-sm">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-[#00b4f0] text-white flex items-center justify-center rounded-sm">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-[#00b4f0] text-white flex items-center justify-center rounded-sm">
                <Instagram size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
