const steps = [
  { n: "01", t: "Consultation", d: "Share your event vision, date, budget, and preferences." },
  { n: "02", t: "Custom Proposal", d: "We tailor a package based on your needs, with transparent pricing." },
  { n: "03", t: "Site Visit & Design", d: "Walk through our hall and explore décor and setup options." },
  { n: "04", t: "Booking Confirmation", d: "Confirm your date with a deposit and start the countdown." },
  { n: "05", t: "Event Day Management", d: "We handle logistics — you focus on celebrating." },
];

export function Process() {
  return (
    <section className="relative py-28 bg-card/40 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-left space-y-6 lg:sticky lg:top-32" data-reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold">— Planning Made Easy</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Our <span className="italic text-gradient-gold">Process</span>
            </h2>
            <div className="gold-divider" />
            <img
              src="https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-vidalbalielojrfotografia-12688994-scaled.jpg"
              alt="Planning"
              className="w-full aspect-video object-cover rounded-sm shadow-elegant"
            />
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3 bg-gold text-primary-foreground tracking-widest uppercase text-xs hover-lift rounded-sm"
            >
              Make a Query →
            </a>
          </div>

          <ol className="space-y-8">
            {steps.map((s, i) => (
              <li
                key={s.n}
                data-reveal
                className="reveal group relative pl-20 pb-8 border-l border-gold/30 last:border-transparent"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 h-14 w-14 rounded-full bg-background border border-gold/50 flex items-center justify-center font-display text-gold text-lg group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-500">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
