export function About() {
  return (
    <section id="about" className="relative py-28 bg-card/40">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal space-y-6" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">— Welcome To A S Events Ltd</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Who <span className="italic text-gradient-gold">We Are</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-foreground/85 italic font-display">
            A Sanctuary Where Cherished Moments Quietly Bloom
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A S Events Ltd began with a simple intention — to build a hall where
            people could gather without compromise, surrounded by craftsmanship,
            warm hospitality and unhurried elegance. Years of curating weddings,
            galas and intimate ceremonies have shaped a space that feels equally
            grand and grounded.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our name draws from the daisy — modest, luminous, enduring. It is
            our promise that every event we host will carry that same spirit:
            understated beauty, considered detail, and joy that lingers long
            after the last guest departs.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-3 mt-4 px-7 py-3 border border-gold/50 text-gold tracking-widest uppercase text-xs hover:bg-gold hover:text-primary-foreground transition-all duration-500"
          >
            What We Offer →
          </a>
        </div>

        <div className="reveal-zoom relative" data-reveal>
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80&auto=format&fit=crop"
            alt="Soft floral wedding centerpiece in candlelight"
            className="w-full aspect-[4/5] object-cover rounded-[50%] shadow-elegant"
          />
          <div className="absolute inset-0 rounded-[50%] border-2 border-gold/30 animate-float" />
        </div>
      </div>
    </section>
  );
}
