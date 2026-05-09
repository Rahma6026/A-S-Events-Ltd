export function Welcome() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-left" data-reveal>
          <div className="relative">
            <img
              src="https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-cottonbro-6651864-scaled.jpg"
              alt="Convention hall"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-elegant hover:scale-[1.02] transition-transform duration-[1.2s]"
            />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 border-2 border-gold/50 rounded-full hidden md:block" />
            <div className="absolute -top-6 -left-6 h-24 w-24 border border-gold/30 rotate-45 hidden md:block animate-float" />
          </div>
        </div>

        <div className="reveal-right space-y-6" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">— Welcome</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Welcome to <span className="italic text-gradient-gold">Dreamy Daisies</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-foreground/85 italic font-display">
            Where Every Event Blooms Into a Beautiful Memory
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At Dreamy Daisies Convention Hall, we believe that every moment worth
            celebrating deserves a venue that reflects its significance. Nestled
            in a prime location with contemporary architecture and a touch of
            elegance, our hall is designed to host your most cherished events —
            whether it's a fairy-tale wedding, a lively birthday bash, an
            inspiring seminar, or a grand concert.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our versatile space, state-of-the-art facilities, and dedicated team
            make Dreamy Daisies the perfect canvas for your dream occasion.
          </p>
        </div>
      </div>
    </section>
  );
}
