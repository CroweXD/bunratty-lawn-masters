import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Freshly mowed lawn with striped pattern" },
  { src: gallery2, alt: "Professionally trimmed hedges along garden path" },
  { src: gallery3, alt: "Garden transformation before and after" },
  { src: gallery4, alt: "Maintained front garden of stone cottage" },
  { src: gallery5, alt: "Professional lawn mowing service in action" },
  { src: gallery6, alt: "Clean patio area with trimmed lawn edges" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="text-3xl sm:text-4xl font-heading text-foreground">See the Results for Yourself</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Browse some of our recent projects across Bunratty and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <button
              key={img.alt}
              onClick={() => setSelectedImage(img.src)}
              className="overflow-hidden rounded-lg aspect-square group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
