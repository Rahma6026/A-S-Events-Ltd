export function Footer() {
  return (
    <footer id="career" className="relative pt-20 pb-10 border-t border-border bg-background">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-3xl text-gradient-gold">Dreamy Daisies</h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We don't just provide space — we create experiences. Your event is more
            than a date on the calendar. It's a chance to bring people together
            and create memories that bloom long after the day is over.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Know Us", "Services", "Contact", "Career"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="text-foreground/80 hover:text-gold underline-grow">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Get updates and seasonal offers.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-input/40 border border-border focus:border-gold outline-none px-4 py-2 rounded-sm text-sm"
            />
            <button className="px-5 py-2 border border-gold/50 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition rounded-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-border/60 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Dreamy Daisies. All rights reserved.</p>
        <p className="tracking-widest uppercase">✦ Where Every Moment Blooms ✦</p>
      </div>
    </footer>
  );
}
