const features = [
  {
    title: "Flexible Venue for All Occasions",
    desc: "From small intimate events to large-scale productions — flexible packages and setups for every guest count, theme and budget.",
    icon: "❀",
  },
  {
    title: "Modern Facilities",
    desc: "Air-conditioned hall with ample parking, clean restrooms, changing rooms, soundproofing, mood lighting and security cameras.",
    icon: "✦",
  },
  {
    title: "Convenient Location",
    desc: "Easily accessible with nearby public transport and major roads — your guests arrive on time, every time.",
    icon: "❖",
  },
  {
    title: "Tailored Décor & Setup",
    desc: "Bollywood-themed wedding or minimalist seminar setup — we customize stage, lighting, seating and entrance décor to match your theme.",
    icon: "✿",
  },
];

export function Features() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">— Features</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">
            Why Choose <span className="italic text-gradient-gold">Dreamy Daisies?</span>
          </h2>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-muted-foreground">
            Premium experiences shouldn't come with premium stress. Competitive
            packages, transparent pricing, no hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-reveal
              className="reveal group relative p-8 bg-card/60 border border-border rounded-sm hover-lift overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="text-4xl text-gold mb-5 group-hover:scale-110 transition-transform duration-500 inline-block">
                {f.icon}
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
