import aboutBg from "@/assets/about-bg.png";
import { useContent } from "./ContentProvider";

export function About() {
  const { about } = useContent();

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
      <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal space-y-6" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">{about.subtitle}</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            {about.titlePart1} <span className="italic text-gradient-gold">{about.titlePart2}</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-foreground/85 italic font-display">
            {about.quote}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {about.description1}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {about.description2}
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
            src={about.image}
            alt="Soft floral wedding centerpiece in candlelight"
            className="w-full aspect-[4/5] object-cover rounded-[50%] shadow-elegant"
          />
          <div className="absolute inset-0 rounded-[50%] border-2 border-gold/30 animate-float" />
        </div>
      </div>
    </section>
  );
}
