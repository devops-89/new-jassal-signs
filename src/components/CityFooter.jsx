import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

const CityFooter = () => {
  const router = useRouter();

  const handleCityClick = (e, path) => {
    const normalizedCurrent = router.asPath.split('?')[0].split('#')[0].toLowerCase().replace(/\/$/, "");
    const normalizedTarget = path.toLowerCase().replace(/\/$/, "");

    if (normalizedCurrent === normalizedTarget) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111] text-white py-10 px-6 bg-[url('/footer-bg.png')] bg-cover bg-center">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* About / Logo */}
        <div>
          <img src="/logo.png" alt="Mega Signs Logo" className="h-12 mb-4" />
          <p className="text-[16px] text-white leading-relaxed">
            Jassal Signs is a full-service signage company. We specialize in
            high-quality custom signs for businesses across various industries.
          </p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a
              href="https://www.facebook.com/jassalsignsltd/"
              aria-label="Facebook"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/jassal_signs/?hl=en"
              aria-label="Instagram"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca"
              aria-label="LinkedIn"
              className="hover:text-[#ED1D26] text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold mb-4 font-grotesk underline">QUICK LINKS</h2>
          <ul className="space-y-2 text-white">
            <li>
              <ScrollLink to="home" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="productSection" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Products</ScrollLink>
            </li>
            <li>
              <ScrollLink to="blogsSection" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Blogs</ScrollLink>
            </li>
            <li>
              <ScrollLink to="gallerySection" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Gallery</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Contact Us</ScrollLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold mb-4 font-grotesk underline">SERVICES</h2>
          <ul className="space-y-2 text-white text-sm">
            <li>
              <Link href="/products/indoorsigns" className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Indoor Signs</Link>
            </li>
            <li>
              <Link href="/products/vehiclewraps" className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Vehicle Wraps</Link>
            </li>
            <li>
              <Link href="/products/outdoorsigns" className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Outdoor Signs</Link>
            </li>
            <li>
              <Link href="/products/channelletters" className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Channel Letters</Link>
            </li>
            <li>
              <Link href="/products/pylonsigns" className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Pylon Signs</Link>
            </li>
            <li>
              <Link href="/products/printmedia" className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Printing Services</Link>
            </li>
          </ul>
        </div>

        {/* Locations Canada */}
        <div className="md:block hidden">
          <h2 className="text-lg font-semibold mb-4 font-grotesk underline">British Columbia</h2>
          <ul className="space-y-2 text-white text-sm">
            {[
              { name: "Surrey", path: "/citypage/SURREY" },
              { name: "Cloverdale", path: "/citypage/CLOVERDALE" },
              { name: "Abbotsford", path: "/citypage/ABBOTSFORD" },
            ].map((city) => (
              <li key={city.name} className="flex items-center text-[16px] group">
                <Link
                  href={city.path}
                  className="hover:text-[#ED1D26] transition-colors"
                  onClick={(e) => handleCityClick(e, city.path)}
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mb-2 mt-4 font-grotesk underline">Alberta</h2>
          <ul className="space-y-2 text-white text-sm">
            {[
              { name: "Calgary", path: "/citypage/CALGARY" },
              { name: "Edmonton", path: "/citypage/EDMONTON" },
            ].map((city) => (
              <li key={city.name} className="flex items-center text-[16px] group">
                <Link
                  href={city.path}
                  className="hover:text-[#ED1D26] transition-colors"
                  onClick={(e) => handleCityClick(e, city.path)}
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations USA */}
        <div className="md:block hidden">
          <h2 className="text-lg font-semibold mb-4 font-grotesk underline">United States</h2>
          <ul className="space-y-2 text-white text-sm">
            <li className="flex items-center text-[16px] group">
              <a
                href="https://www.jassalsignssac.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ED1D26] transition-colors"
              >
                Sacramento
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4 font-grotesk">
            SUBSCRIBE TO OUR SIGNAGE INSIGHTS
          </h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2 bg-white text-black text-sm"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 bg-white text-black text-sm"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#ED1D26] transition-all text-white py-2 font-semibold font-grotesk text-sm"
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-10 pt-6 text-center text-white text-[14px]">
        <p>2025 © Copyright, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default CityFooter;
