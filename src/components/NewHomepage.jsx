
import { useState, useEffect } from "react";
import Services from "@/components/Services";
import LocationLinks from "@/components/LocationLinks";
import { IoMdClose } from "react-icons/io";
import HomepageFooter from "@/components/HomepageFooter";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";

const markers = [
  {
    name: "CLOVERDALE",
    coordinates: ["75%", "18%"],
    link: "/citypage/CLOVERDALE",
  },
  {
    name: "ABBOTSFORD",
    coordinates: ["75%", "28%"], 
    link: "/citypage/ABBOTSFORD",
  },
  {
    name: "SURREY",
    coordinates: ["75%", "23%"], 
    link: "/citypage/SURREY",
  },
  {
    name: "EDMONTON",
    coordinates: ["75%", "39%"], 
    link: "/citypage/EDMONTON",
  },
  {
    name: "CALGARY",
    coordinates: ["75%", "34%"], 
    link: "/citypage/CALGARY",
  },
  {
    name: "SACRAMENTO",
    coordinates: ["18%", "15%"], 
    link: "/citypage/SACRAMENTO",
  },
];

// Flag componenttssss
const CanadaFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" className="inline-block mr-2">
    <rect width="24" height="16" fill="#FF0000"/>
    <rect x="8" y="0" width="8" height="16" fill="#FFFFFF"/>
    <path d="M12 3 L13 6 L16 6 L13.5 8 L14.5 11 L12 9 L9.5 11 L10.5 8 L8 6 L11 6 Z" fill="#FF0000"/>
  </svg>
);

const USAFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" className="inline-block mr-2">
    <rect width="24" height="16" fill="#B22234"/>
    <rect y="1" width="24" height="1" fill="#FFFFFF"/>
    <rect y="3" width="24" height="1" fill="#FFFFFF"/>
    <rect y="5" width="24" height="1" fill="#FFFFFF"/>
    <rect y="7" width="24" height="1" fill="#FFFFFF"/>
    <rect y="9" width="24" height="1" fill="#FFFFFF"/>
    <rect y="11" width="24" height="1" fill="#FFFFFF"/>
    <rect y="13" width="24" height="1" fill="#FFFFFF"/>
    <rect y="15" width="24" height="1" fill="#FFFFFF"/>
    <rect width="10" height="8" fill="#3C3B6E"/>
    {[...Array(5)].map((_, row) => 
      [...Array(6)].map((_, col) => (
        <circle 
          key={`${row}-${col}`} 
          cx={1 + col * 1.5} 
          cy={1 + row * 1.5} 
          r="0.3" 
          fill="white"
        />
      ))
    )}
  </svg>
);

// Custom Map Ccomponent
const ImageMap = ({ imageSrc, mapMarkers, mapName, flagComponent }) => {
  const router = useRouter();

  const handleMarkerClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(link);
  };

  return (
    <div className="relative w-full border rounded-lg overflow-hidden">
      <div className="absolute top-2 left-2 z-10 bg-black bg-opacity-70 text-white px-3 py-1 rounded flex items-center">
        {flagComponent}
        {mapName}
      </div>
      <div className="relative">
        <img src={imageSrc} alt={mapName} className="w-full h-auto" />
        {mapMarkers.map(({ name, coordinates, link }) => (
          <button
            key={name}
            className="absolute group transition-all duration-200 hover:scale-110 focus:outline-none"
            style={{
              left: coordinates[0],
              top: coordinates[1],
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => handleMarkerClick(e, link)}
            aria-label={`Go to ${name}`}
          >
            {/* Pin marker - Rectangle */}
            <div className="relative">
              <div className="w-40 h-2  group-hover:scale-125  transition-all duration-200 cursor-pointer"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// TwoMapss  Component
const TwoMaps = () => {
  const canadaMarkers = markers.filter((marker) =>
    ["CLOVERDALE", "ABBOTSFORD", "SURREY", "EDMONTON", "CALGARY"].includes(
      marker.name
    )
  );

  const usaMarkers = markers.filter((marker) =>
    ["SACRAMENTO"].includes(marker.name)
  );

  return (
    <div className="space-y-4">
      <ImageMap
        imageSrc="/gallery/Canada04.png"
        mapMarkers={canadaMarkers}
        mapName="Canada"
        flagComponent={<CanadaFlag />}
      />
      <ImageMap
        imageSrc="/gallery/USA04.png"
        mapMarkers={usaMarkers}
        mapName="USA"
        flagComponent={<USAFlag />}
      />
    </div>

  );
};

export default function Home_test() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3400);
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center text-3xl font-bold items-center text-white bg-black">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span style="color: #0083CB;font-size:40px;">Jassal</span> <span style="color: #ED1D25;font-size:40px;">Signs</span>'
              )
              .start();
          }}
        />
      </div>
    );
  }
  //

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <div className="relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          poster="/fallback.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/background.mov"
        />
      

        {/* Navbarr*/}
        <div className="max-w-[95vw] mx-auto px-3 pt-4 flex justify-between items-center relative z-30">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoMdClose className="text-white text-[30px]" />
            ) : (
              <div>
                <div className="w-6 h-1 bg-white mb-1" />
                <div className="w-6 h-1 bg-white mb-1" />
                <div className="w-6 h-1 bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-0 left-0 h-full w-full bg-black text-white z-20 md:hidden">
            <LocationLinks />
          </div>
        )}

        {/* Main Layout */}
        <div className="max-w-[1280px] mx-auto mt-10 md:mt-2 px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT SIDE → MAP */}
            <div className="w-full lg:w-1/3 flex flex-col justify-start">
              <h4 className="mb-4 font-grotesk font-semibold text-lg text-white">
                Select Your Location
              </h4>
              <div className="overflow-hidden">
                <TwoMaps />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT*/}
            <div className="w-full lg:w-2/3">
              <Services />
            </div>
          </div>
        </div>
        <HomepageFooter />
      </div>
    </div>
  );
}