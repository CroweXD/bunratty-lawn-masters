import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Locally owned and operated in Bunratty",
  "Reliable, punctual, and professional",
  "Clean, sharp finish every time",
  "Flexible scheduling to suit your needs",
  "Competitive pricing with free quotes",
  "Trusted by homeowners across County Clare",
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-heading text-foreground mb-6">
              Your Local, Trusted Garden Care Specialists
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Bunratty Grass Cutting is built on hard work and attention to detail. We help homeowners, landlords, and local businesses maintain their outdoor spaces without the hassle. Whether it's a one-off job or ongoing maintenance, we deliver dependable results you can count on.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-primary/10 rounded-lg p-10 lg:p-14">
              <blockquote className="text-xl sm:text-2xl font-heading text-foreground leading-snug mb-6">
                "Delivering a clean, sharp finish every time — that's our promise."
              </blockquote>
              <p className="text-muted-foreground font-semibold">— Bunratty Grass Cutting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
