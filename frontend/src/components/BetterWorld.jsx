import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { betterWorldStats } from "../mock";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numeric = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            let n = 0;
            const step = Math.max(1, Math.ceil(numeric / 30));
            const anim = setInterval(() => {
              n += step;
              if (n >= numeric) {
                setCount(numeric);
                clearInterval(anim);
              } else {
                setCount(n);
              }
            }, 40);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numeric]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-extrabold text-white">
      {count}+
    </span>
  );
};

const BetterWorld = () => {
  return (
    <section className="py-20 bg-[#161616] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Better Jobs, Better World!
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            We understand that every business is unique. That's why we offer customized staffing solutions tailored to your specific requirements. Our extensive network of experienced developers, designers, and IT consultants ensures that you have access to the best talent in the industry.
          </p>
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 text-[#00b4f0] font-medium hover:gap-3 transition-all"
          >
            <ArrowRight size={18} />
            <span className="underline underline-offset-4">Know More</span>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {betterWorldStats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <Counter value={s.value} />
              <p className="mt-2 text-gray-300 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BetterWorld;
