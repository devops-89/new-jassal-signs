
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
    coordinates: ["80%", "20%"],
    link: "/citypage/CLOVERDALE",
  },
  {
    name: "ABBOTSFORD",
    coordinates: ["78%", "28%"],
    link: "/citypage/ABBOTSFORD",
  },
  {
    name: "SURREY",
    coordinates: ["75%", "23%"],
    link: "/citypage/SURREY",
  },
  {
    name: "EDMONTON",
    coordinates: ["78%", "39%"],
    link: "/citypage/EDMONTON",
  },
  {
    name: "CALGARY",
    coordinates: ["75%", "34%"],
    link: "/citypage/CALGARY",
  },
  {
    name: "SACRAMENTO",
    coordinates: ["24%", "15%"],
    link: "/citypage/SACRAMENTO",
  },
];

// Custom Map Ccomponent
const ImageMap = ({ imageSrc, mapMarkers, mapName, flagSrc }) => {
  const router = useRouter();

  const handleMarkerClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(link);
  };

  return (
    <div className="relative w-full border border-white/20 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm p-4">
      {/* Centered Flag Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <img src={flagSrc} alt={mapName} className="w-16 h-10 object-cover rounded-md shadow-lg border border-white/10" />
      </div>

      <div className="relative mt-8">
        <img src={imageSrc} alt={mapName} className="w-full h-auto block mx-auto" />
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
            {/* Clickable zone overlay */}
            <div className="w-24 h-6 md:w-32 md:h-8 cursor-pointer"></div>
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
    <div className="space-y-6">
      <ImageMap
        imageSrc="/gallery/Canada06.png"
        mapMarkers={canadaMarkers}
        mapName="Canada"
        flagSrc="/gallery/canadaiconn.png"
      />
      <ImageMap
        imageSrc="/gallery/USA06.png"
        mapMarkers={usaMarkers}
        mapName="USA"
        flagSrc="/gallery/USAiconn.png"
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