import heroImage from "@/assets/hero-lawn.jpg";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautifully maintained lawn in County Clare"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 section-padding container-narrow w-full">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-up">
            Bunratty, County Clare
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Reliable Grass Cutting & Garden Maintenance
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Clean, professional results every time. Saving you time with stress-free garden maintenance across Bunratty and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+353000000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Free quotes available — fast, friendly, and hassle-free service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
