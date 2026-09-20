import React, { useEffect, useRef, useState } from "react";
import { dreamStats, dreamImages } from "../mock";

const CircleProgress = ({ value, label }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const size = 170;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (progress / 100) * circ;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            let start = 0;
            const anim = setInterval(() => {
              start += 2;
              if (start >= value) {
                setProgress(value);
                clearInterval(anim);
              } else {
                setProgress(start);
              }
            }, 20);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#00b4f0"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-[#3d0764]">
          {progress}%
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-800">{label}</p>
    </div>
  );
};

const Dreams = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3d0764] tracking-tight max-w-4xl mx-auto">
            Making Dreams And Aspirations Come True
          </h2>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Partner with SVR IT Software Solutions and experience the difference that professional IT staffing and consulting can make. Let us help you achieve your business goals with our reliable, efficient, and cost-effective solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-8">
            {dreamStats.map((s) => (
              <CircleProgress key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {dreamImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="team"
                className={`w-full h-64 object-cover rounded-lg shadow-md ${
                  i === 1 ? "translate-y-8" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dreams;
