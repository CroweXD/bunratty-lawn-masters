import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-heading text-foreground">Request a Free Quote</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Tell us what you need and we'll get back to you with a fast, no-obligation quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="text-xl font-heading text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We'll be in touch shortly with your quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">What do you need?</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Describe your garden and what services you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Get My Free Quote
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Bunratty, County Clare, Ireland</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">Call or text for a quick quote</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">info@bunrattygrasscutting.ie</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                <p className="text-muted-foreground">Monday – Saturday: 8am – 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
