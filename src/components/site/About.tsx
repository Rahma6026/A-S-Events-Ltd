export function About() {
  return (
    <section id="about" className="relative py-28 bg-card/40">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal space-y-6" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">— Welcome To Dreamy Daisies</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Who <span className="italic text-gradient-gold">We Are</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-foreground/85 italic font-display">
            A Place Where Dreams Blossom Into Reality
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dreamy Daisies Convention Hall was born out of a vision to create a
            venue where people from all walks of life could gather and celebrate
            life's most meaningful moments. With years of experience in event
            hosting and hospitality, we've curated a space that combines
            functionality, beauty, and comfort.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our name, "Dreamy Daisies," reflects the spirit of joyful celebration
            and natural beauty. Just like daisies blooming in the sunlight, we
            want your events to flourish with happiness, creativity, and lasting
            impressions.
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
            src="https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-pavel-danilyuk-7234410-scaled.jpg"
            alt="Elegant setup"
            className="w-full aspect-[4/5] object-cover rounded-[50%] shadow-elegant"
          />
          <div className="absolute inset-0 rounded-[50%] border-2 border-gold/30 animate-float" />
        </div>
      </div>
    </section>
  );
}
