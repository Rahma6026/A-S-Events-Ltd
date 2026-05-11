import { useContent } from "./ContentProvider";

export function Welcome() {
  const { welcome } = useContent();

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-left" data-reveal>
          <div className="relative">
            <img
              src={welcome.image}
              alt="Elegantly styled banquet table with candles and florals"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-elegant hover:scale-[1.02] transition-transform duration-[1.2s]"
            />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 border-2 border-gold/50 rounded-full hidden md:block" />
            <div className="absolute -top-6 -left-6 h-24 w-24 border border-gold/30 rotate-45 hidden md:block animate-float" />
          </div>
        </div>

        <div className="reveal-right space-y-6" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">{welcome.subtitle}</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            {welcome.titlePart1} <span className="italic text-gradient-gold">{welcome.titlePart2}</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-foreground/85 italic font-display">
            {welcome.quote}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {welcome.description1}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {welcome.description2}
          </p>
        </div>
      </div>
    </section>
  );
}
