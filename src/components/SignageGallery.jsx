import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const images = [
  { src: "/gallery/gl1.jpg" },
  { src: "/gallery/gl3.jpg" },
  { src: "/gallery/gl4.jpg" },
  { src: "/gallery/gl5.jpg" },
  { src: "/gallery/gl6.jpg" },
  { src: "/gallery/gl7.jpg" },
  { src: "/gallery/gl8.jpg" },
  { src: "/gallery/gl9.jpg" },
];

export default function SignageGallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, offset: 100 });
  }, []);

  const aosAnimations = ["fade-up", "zoom-in", "fade-down", "fade-right", "fade-left"];

  return (
    <section className="md:max-w-[85vw] max-w-[95vw] mx-auto py-16 overflow-hidden" id="gallery">
      <div>
        {/* Section heading */}
        <div className="mb-10 text-center" data-aos="zoom-in">
          <p className="text-[#ED1D26] uppercase mb-2 text-xl">EXPLORE OUR WORK</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#101828]">OUR GALLERY</h1>
        </div>

        {/* Gallery images */}
        <PhotoProvider>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-6 md:px-0 space-y-4">
            {images.map((img, index) => (
              <PhotoView key={index} src={img.src}>
                <div
                  className="mb-4 break-inside-avoid overflow-hidden shadow-md cursor-zoom-in  group relative"
                  data-aos={aosAnimations[index % aosAnimations.length]}
                  data-aos-delay={(index % 3) * 100}
                >
                  {(index === 5 || index === 8) ? (
                    index === 5 ? (
                      <img
                        src={img.src}
                        alt={`Gallery Image ${index + 1}`}
                        loading="lazy"
                        className="w-full h-[467px] object-cover transition-transform duration-300 hover:scale-105 "
                      />
                    ) : (
                      <img
                        src={img.src}
                        alt={`Gallery Image ${index + 1}`}
                        loading="lazy"
                        className="w-full h-[480px] object-cover transition-transform duration-300 hover:scale-105 "
                      />
                    )
                  ) : (
                    <img
                      src={img.src}
                      alt={`Gallery Image ${index + 1}`}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-300 hover:scale-105 "
                    />
                  )}

                  {/* Hover black overlay */}
                  {/* <div className="absolute inset-0 b  transition duration-300 rounded"></div> */}
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}
