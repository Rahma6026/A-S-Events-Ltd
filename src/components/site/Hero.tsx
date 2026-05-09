export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero pt-28"
    >
      {/* video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=70&auto=format&fit=crop"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-wedding-ceremony-2633/1080p.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/3197908/3197908-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 z-[1]" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-[1]" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-gold/5 blur-3xl animate-float [animation-delay:2s]" />

      {/* Decorative diagonal line */}
      <div className="hidden lg:block absolute top-1/4 right-1/3 w-[1px] h-[60%] bg-gradient-to-b from-transparent via-gold/40 to-transparent rotate-12 origin-top" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold animate-fade-down"
            style={{ animationDelay: "0.1s" }}
          >
            ✦ Crafted Moments · Curated Beautifully
          </p>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Dreamy Daisies <br />
            <span className="italic text-gradient-gold">Bespoke</span> <br />
            Celebrations
          </h1>

          <p
            className="text-lg text-muted-foreground max-w-lg animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            A timeless convention hall and atelier of event artisans — composing
            weddings, soirées and milestones into heirloom-worthy memories,
            petal by petal.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wider uppercase text-sm overflow-hidden hover-lift rounded-sm"
            >
              <span className="relative z-10">Plan a Visit</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold via-gold-soft to-gold bg-[length:200%_100%] animate-shimmer opacity-60" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold tracking-wider uppercase text-sm hover:bg-gold/10 transition-all rounded-sm"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right collage */}
        <div className="relative h-[520px] hidden lg:block">
          <div
            className="absolute top-0 right-10 w-[300px] h-[380px] rounded-full overflow-hidden border-2 border-gold/30 shadow-elegant animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop"
              alt="Romantic wedding ceremony with floral arch"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.2s]"
            />
          </div>

          <div
            className="absolute bottom-6 left-0 w-[260px] h-[260px] rounded-full overflow-hidden border-2 border-gold/30 shadow-gold animate-scale-in"
            style={{ animationDelay: "0.65s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=700&q=80&auto=format&fit=crop"
              alt="Soft pastel floral bouquet"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.2s]"
            />
          </div>

          {/* circular text */}
          <div className="absolute bottom-0 right-0 h-32 w-32 animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
              <defs>
                <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text fill="currentColor" fontSize="14" letterSpacing="4">
                <textPath href="#circlePath">
                  ✦ ATELIER OF CELEBRATIONS  ✦  DREAMY DAISIES  
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70 animate-fade-in [animation-delay:1s]">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
