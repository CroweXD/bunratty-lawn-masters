import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mary O'Brien",
    text: "Brilliant service, always on time and the garden has never looked better. Wouldn't go anywhere else!",
  },
  {
    name: "Seán Murphy",
    text: "Reliable and professional. They saved me hours every week. The lads do a fantastic job every visit.",
  },
  {
    name: "Claire Fitzgerald",
    text: "Had a full garden tidy-up done before selling our house. The transformation was incredible — highly recommend.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-heading text-primary-foreground">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/15">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-primary-foreground font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
