import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const HomepageFooter = () => {
  return (
    <footer className="bg-transparent text-white py-10 px-5 mt-10">
      <div className="mx-auto md:max-w-[1440px] max-w-[95vw] grid grid-cols-1 md:grid-cols-6 gap-10 ">

        {/* About / Logo */}
        <div>
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Mega Signs Logo"
            className="h-12 mb-4"
          />
          {/* About Text */}
          <p className="text-[16px] text-white leading-relaxed ">
            Jassal Signs is a full-service signage company. We specialize in high-quality custom signs for businesses
            across various industries.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="https://www.facebook.com/jassalsignsltd/" aria-label="Facebook" className="hover:text-[#ED1D26] text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/jassal_signs/?hl=en" aria-label="Instagram" className="hover:text-[#ED1D26] text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/jassalsigns/?originalSubdomain=ca" aria-label="aedIn" className="hover:text-[#ED1D26] text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 font-grotesk underline">QUICK LINKS</h2>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="#" className="text-[16px] hover:text-[#ED1D26]">Home</a></li>
            <li><a href="#" className="text-[16px] hover:text-[#ED1D26]">Products</a></li>
            <li><Link href="/franchise" className="text-[16px] hover:text-[#ED1D26]">Franchise With Us</Link></li>
          </ul>
        </div>

        {/* Products */}

        {/* Products */}
        <div className="md:block hidden">
          <h2 className="text-lg font-semibold mb-4 font-grotesk underline">SERVICES</h2>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="/products/indoorsigns" className="hover:text-[#ED1D26] text-[16px]" >Indoor Signs</a></li>

            <li><a href="/products/vehiclewraps" className="hover:text-[#ED1D26] text-[16px]">Vehicle Wraps</a></li>
            <li><a href="/products/outdoorsigns" className="hover:text-[#ED1D26] text-[16px]">Outdoor Signs</a></li>
            <li><a href="/products/channelletters" className="hover:text-[#ED1D26] text-[16px]">Channel Letters</a></li>
            <li><a href="/products/pylonsigns" className="hover:text-[#ED1D26] text-[16px]">Pylon Signs</a></li>
            <li><a href="/products/printmedia" className="hover:text-[#ED1D26] text-[16px]">Printing Services</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div className="md:block hidden">
          <h2 className="text-lg font-semibold mb-4 font-grotesk underline">British Columbia</h2>
          <ul className="space-y-2 text-white text-sm">
            <li><Link href="/citypage/SURREY" className="hover:text-[#ED1D26] text-[16px]" >Surrey</Link></li>

            <li><Link href="/citypage/CLOVERDALE" className="hover:text-[#ED1D26] text-[16px]">Cloverdale</Link></li>
            <li><Link href="/citypage/ABBOTSFORD" className="hover:text-[#ED1D26] text-[16px]">Abbotsford</Link></li>

          </ul>
          <h2 className="text-lg font-semibold mb-2 mt-3 font-grotesk underline">Alberta</h2>
          <ul>
            <li><Link href="/citypage/CALGARY" className="hover:text-[#ED1D26] text-[16px]">Calgary</Link></li>
            <li><Link href="/citypage/EDMONTON" className="hover:text-[#ED1D26] text-[16px]">Edmonton</Link></li>
          </ul>
        </div>

        {/* for mobile devices */}
        <div className=" md:hidden grid grid-cols-2 gap-10 ">
          {/* Products */}
          <div >
            <h2 className="text-lg font-semibold mb-4 font-grotesk underline">SERVICES</h2>
            <ul className="space-y-2 text-white text-sm">
              <li><a href="/products/indoorsigns" className="hover:text-[#ED1D26] text-[16px]" >Indoor Signs</a></li>

              <li><a href="/products/vehiclewraps" className="hover:text-[#ED1D26] text-[16px]">Vehicle Wraps</a></li>
              <li><a href="/products/outdoorsigns" className="hover:text-[#ED1D26] text-[16px]">Outdoor Signs</a></li>
              <li><a href="/products/channelletters" className="hover:text-[#ED1D26] text-[16px]">Channel Letters</a></li>
              <li><a href="/products/pylonsigns" className="hover:text-[#ED1D26] text-[16px]">Pylon Signs</a></li>
              <li><a href="/products/printmedia" className="hover:text-[#ED1D26] text-[16px]">Printing Services</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div >
            <h2 className="text-lg font-semibold mb-4 font-grotesk underline">British Columbia</h2>
            <ul className="space-y-2 text-white text-sm">
              <li><Link href="/citypage/SURREY" className="hover:text-[#ED1D26] text-[16px]" >Surrey</Link></li>

              <li><Link href="/citypage/CLOVERDALE" className="hover:text-[#ED1D26] text-[16px]">Cloverdale</Link></li>
              <li><Link href="/citypage/ABBOTSFORD" className="hover:text-[#ED1D26] text-[16px]">Abbotsford</Link></li>

            </ul>
            <h2 className="text-lg font-semibold mb-2 mt-3 font-grotesk underline">Alberta</h2>
            <ul>
              <li><Link href="/citypage/CALGARY" className="hover:text-[#ED1D26] text-[16px]">Calgary</Link></li>
              <li><Link href="/citypage/EDMONTON" className="hover:text-[#ED1D26] text-[16px]">Edmonton</Link></li>
            </ul>
          </div>

        </div>


        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-4 font-grotesk">SUBSCRIBE TO OUR SIGNAGE INSIGHTS</h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2  bg-white text-black text-sm"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2  bg-white text-black text-sm"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#ED1D26] transition-all text-white py-2 font-semibold font-grotesk text-sm "
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mx-auto max-w-[1360px] border-white mt-10 pt-6 text-center text-white text-sm">
        <p>2025 © Copyright, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default HomepageFooter;
