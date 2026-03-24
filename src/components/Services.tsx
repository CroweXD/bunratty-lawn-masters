import { Scissors, TreePine, Leaf, Flower2, CalendarDays, Sparkles } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Regular Grass Cutting",
    description: "Consistent, reliable lawn mowing to keep your garden looking sharp all season long.",
  },
  {
    icon: Sparkles,
    title: "Garden Tidy-Ups",
    description: "Full garden clearances to transform overgrown or neglected spaces back to their best.",
  },
  {
    icon: TreePine,
    title: "Hedge Trimming",
    description: "Precise hedge cutting and shaping for clean lines and a neat, professional look.",
  },
  {
    icon: Leaf,
    title: "Weed Control",
    description: "Targeted weed removal and general upkeep to maintain a healthy, tidy garden.",
  },
  {
    icon: Flower2,
    title: "One-Off Clean-Ups",
    description: "Single visit garden overhauls — perfect for pre-sale prep or special occasions.",
  },
  {
    icon: CalendarDays,
    title: "Seasonal Maintenance",
    description: "Spring and summer preparation to get your garden ready for the growing season.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-heading text-foreground">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
