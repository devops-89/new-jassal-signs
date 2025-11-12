// import { useState, useEffect } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
// import Services from "@/components/Services";
// import LocationLinks from "@/components/LocationLinks";
// import Link from "next/link";
// import { IoMdClose } from "react-icons/io";
// import HomepageFooter from "@/components/HomepageFooter";
// import Typewriter from "typewriter-effect";
// import { FaMapLocationDot } from "react-icons/fa6";

// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home_test() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const loadingTimer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3400);
//     return () => clearTimeout(loadingTimer);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="w-full h-screen flex justify-center text-3xl font-bold items-center text-white bg-black">
//         <Typewriter
//           onInit={(typewriter) => {
//             typewriter
//               .typeString(
//                 '<span style="color: #0083CB;font-size:40px;">Jassal</span> <span style="color: #ED1D25;font-size:40px;">Signs</span>'
//               )
//               .start();
//           }}
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full min-h-screen text-white overflow-hidden">
//       <div className="relative">
//         {/* Background Video */}
//         <video
//           autoPlay
//           loop
//           muted
//           poster="/fallback.png"
//           className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//           src="/background.mov"
//         />

//         {/* Navbar */}

//         <div className=" max-w-[95vw] mx-auto px-3 pt-4 flex justify-between items-center relative z-30">
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <IoMdClose className="text-white text-[30px]" />
//             ) : (
//               <div>
//                 <div className="w-6 h-1 bg-white mb-1" />
//                 <div className="w-6 h-1 bg-white mb-1" />
//                 <div className="w-6 h-1 bg-white" />
//               </div>
//             )}
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div className="absolute top-0 left-0 h-full w-full bg-black text-white z-20 md:hidden">
//             <LocationLinks />
//           </div>
//         )}

//         {/* Main Layout */}

//         <div className="max-w-[1280px] mx-auto  mt-10 md:mt-2 ">
//           <div className="flex flex-row flex-wrap">
//             <div className="w-full  sm:w-full md:w-full lg:w-1/5 hidden sm:hidden md:hidden lg:flex flex-col justify-end pb-[10px] items-end pr-8">
//               <h4 className="mb-[20px] font-grotesk font-semibold flex items-center gap-2 text-md">
//                 <FaMapLocationDot className="text-[30px]" /> Select Your
//                 Location
//               </h4>
//               <Link
//                 href="/citypage/CLOVERDALE"
//                 className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[40px]"
//               >
//                 CLOVERDALE
//               </Link>
//               <Link
//                 href="/citypage/ABBOTSFORD"
//                 className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[40px]"
//               >
//                 ABBOTSFORD
//               </Link>
//               <Link
//                 href="/citypage/SURREY"
//                 className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[40px] "
//               >
//                 SURREY
//               </Link>
//               <Link
//                 href="/citypage/EDMONTON"
//                 className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[40px] "
//               >
//                 EDMONTON
//               </Link>
//               <Link
//                 href="/citypage/CALGARY"
//                 className="font-semibold cursor-pointer font-grotesk hover:text-[#ED1D26] hover:scale-125 text-[28px] service_animation mb-[40px]"
//               >
//                 CALGARY
//               </Link>
//               <div className="group transition-all flex flex-col items-end duration-300 ease-in-out">
//                 <Link
//                   href="/citypage/CALGARY"
//                   className="font-semibold cursor-pointer font-grotesk text-[28px] text-white group-hover:text-[#ED1D26] group-hover:scale-125 service_animation "
//                 >
//                   SACRAMENTO
//                 </Link>
//                 <h4 className="text-white group-hover:text-[#ED1D26] group-hover:scale-125  service_animation">
//                   (Coming Soon)
//                 </h4>
//               </div>
//             </div>
//             <div className="w-full sm:w-full md:w-full lg:w-4/5">
//               <Services />
//             </div>
//           </div>
//         </div>
//         <HomepageFooter />
//       </div>
//     </div>
//   );
// }

import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogSection";
import CityFooter from "@/components/CityFooter";
import CitySlider from "@/components/CitySlider";
import ContactUs from "@/components/ContactUs";
import ExpertMediaAgency from "@/components/ExpertMediaAgency";
import MarqueeText from "@/components/MarqueeText";
import CityNavbar from "@/components/navbar/CityNavbar";
import OurServices from "@/components/our-services";
import OurClients from "@/components/OurClients";
import SignageGallery from "@/components/SignageGallery";
import Testimonials from "@/components/Testimonials";
import { Element } from "react-scroll";

const Home = () => {
  const cityName = "EDMONTON";

  const testimonialsData = [
    {
      name: "Vita Denture Cinic",
      designation: "CEO, Tech Innovations",
      comments:
        "I am so thankful to Jassal Signs and Harry. We had an event for which Jassal Signs made our banner. We forgot to pick it up before their closing, and after our frantic call after hours, Harry called and text, and eventually delivered the banner to us. The banner looked great, but the services above and beyond... Thank you",
      src: "/products/product2.jpg",
      rating: 5,
    },
    {
      name: "Meenu Dahal",
      designation: "Marketing Head, Creative Agency",
      comments:
        "I am super happy with the products and the customer services (especially Gagan, Vik and the receptionist were very professional and they know what they are doing. I would highly recommend everyone ti this shop for any kinds of banners, signs, printings, poster and etc.",
      src: "/products/product3.png",
      rating: 4,
    },
    {
      name: "Armaan Dhaliwal",
      designation: "Founder, Startup Hub",
      comments:
        "Throughout the whole buying experience from walking in with no vision to walking out with the most eye catching sign, Jassal Signs was like no other when it comes to customer service. I was treated like family, not a customer, which I was surprised about as most competitors don't give this level of care. ",
      src: "/products/product1.jpg",
      rating: 5,
    },
  ];

  return (
    <>
      <CityNavbar />
      <CitySlider cityName={cityName} />
      <Element name="productSection">
        <AboutSection />
      </Element>

      <OurServices />

      <MarqueeText />
      <Testimonials testimonials={testimonialsData} autoplay="true" />
      <Element name="gallerySection">
        <SignageGallery />
      </Element>

      <ExpertMediaAgency />

      <Element name="blogsSection" className="border border-black ">
        <BlogsSection />
      </Element>

      <OurClients />

      <Element name="contactSection">
        <ContactUs city={cityName} />
      </Element>
      {/* <CityPlacesSection />  */}
      <CityFooter />
    </>
  );
};

export default Home;
