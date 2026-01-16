import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallTextAnimation from "./ui/SmallTextAnimation";
import Link from "next/link";

export default function CitySlider({ cityName }) {
  const slideImages = [
    `/citypage/header/${cityName}/${cityName}1.jpg`,
    `/citypage/header/${cityName}/${cityName}2.jpg`,
    `/citypage/header/${cityName}/${cityName}3.jpg`,

  ];

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  return (
    <section className="w-full h-[80vh] md:h-[120vh] overflow-hidden relative group" id="home">
      {/* Image Grid with scaling effect */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1 h-full w-full">
        {slideImages.map((img, idx) => (
          <div key={idx} className="w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transform transition-transform duration-[8000ms] group-hover:scale-110"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-[#1703375f]/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[85vw] mx-auto flex items-center h-full">
        <div className="text-white  md:justify-start " data-aos="fade-up" data-aos-delay="300">
          <p className="text-xl md:text-3xl uppercase tracking-[0.15em] font-bold text-white text-center mb-4 md:text-left opacity-90">
            We Bring Brands To Life
          </p>
          <h1 className="text-center md:text-left uppercase max-w-[1400px]">
            <span className="text-[60px] lg:text-[90px] font-extrabold leading-[1.1] tracking-[0.025em] block">
              JASSAL SIGNS
            </span>
            <span className="text-xl lg:text-[38px] font-bold opacity-90 block md:inline-block md:whitespace-nowrap mt-2 tracking-[0.05em]">
              SIGNAGE AND PRINTING SERVICES IN
            </span>
            <div className="mt-4 md:mt-2">
              {/* for desktop device*/}
              <span className="hidden md:inline-block">
                <SmallTextAnimation
                  text={`${cityName}`}
                  textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
                  fontSize="90px"
                />
              </span>
              {/* for mobile device */}
              <div className="block md:hidden">
                <SmallTextAnimation
                  text={`${cityName}`}
                  textColor="linear-gradient(90deg, #ED1C26 0%, #0283CB 100%)"
                  fontSize="65px"
                />
              </div>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
