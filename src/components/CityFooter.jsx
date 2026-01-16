import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const CityFooter = () => {
  return (
    <footer className="bg-[#111] text-white py-10 px-6 bg-[url('/footer-bg.png')] bg-cover bg-center">
      <div className="max-w-[85vw] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
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

        {/* Mobile Quick Links and Products */}
        <div className="grid grid-cols-2 justify-center md:hidden">
          <div>
            <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
            <ul className="space-y-2 text-white">
              <li>
                <ScrollLink
                  to="home"
                  smooth
                  offset={-60}
                  duration={500}
                  className="hover:text-[#ED1D26] text-[16px] cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="products"
                  smooth
                  offset={-60}
                  duration={500}
                  className="hover:text-[#ED1D26] text-[16px] cursor-pointer"
                >
                  Products
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="blogs"
                  smooth
                  offset={-60}
                  duration={500}
                  className="hover:text-[#ED1D26] text-[16px] cursor-pointer"
                >
                  Blogs
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallerySection"
                  smooth
                  offset={-60}
                  duration={500}
                  className="hover:text-[#ED1D26] text-[16px] cursor-pointer"
                >
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth
                  offset={-60}
                  duration={500}
                  className="hover:text-[#ED1D26] text-[16px] cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">PRODUCTS</h2>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <ScrollLink to="indoor-sign" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Indoor Signs</ScrollLink>
              </li>
              <li>
                <ScrollLink to="vehicle-wrap" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Vehicle Wraps</ScrollLink>
              </li>
              <li>
                <ScrollLink to="outdoor-sign" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Outdoor Signs</ScrollLink>
              </li>
              <li>
                <ScrollLink to="channel-letters" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Channel Letters</ScrollLink>
              </li>
              <li>
                <ScrollLink to="pylon-signs" smooth offset={-60} duration={500} className="hover:text-[#ED1D26] text-[16px] cursor-pointer">Pylon Signs</ScrollLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Quick Links */}
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
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

        {/* Desktop Products */}
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold mb-4">SERVICES</h2>
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

        {/* Subscribe Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
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
              className="w-full cursor-pointer bg-[#ED1D26] transition-all text-white py-2 px-3 font-semibold text-sm"
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
