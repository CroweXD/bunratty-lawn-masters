const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl font-heading text-primary-foreground">Bunratty Grass Cutting</p>
            <p className="text-primary-foreground/60 text-sm mt-1">Bunratty, County Clare, Ireland</p>
          </div>
          <div className="flex gap-8">
            <a href="#services" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Services</a>
            <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">About</a>
            <a href="#contact" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Bunratty Grass Cutting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
