import { useContent } from "./ContentProvider";

const addOns = [
  "Multi-cuisine catering",
  "Bespoke décor & stage design",
  "Hosts & masters of ceremony",
  "DJ, string quartet & live ensembles",
  "Valet parking & discreet security",
  "Hand-illustrated invitations",
  "Live broadcast & streaming",
];

export function Services() {
  const { services } = useContent();

  return (
    <section id="services" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">— We Deliver</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">
            What <span className="italic text-gradient-gold">We Offer</span>
          </h2>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-muted-foreground">
            Every gathering deserves the same considered hand. From candlelit
            ceremonies to grand-stage productions — composed with care, executed
            with grace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const CardContent = (
              <article
                className="group relative bg-card/60 border border-border rounded-sm overflow-hidden hover-lift h-full"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-gold-soft mb-3 underline-grow inline-block">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition duration-500 translate-x-2 group-hover:translate-x-0">
                  →
                </div>
              </article>
            );

            return (
              <div key={s.id} data-reveal className="reveal-zoom">
                {s.url ? (
                  <a href={s.url} className="block h-full cursor-pointer">
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="mt-24 text-center reveal" data-reveal>
          <h3 className="font-display text-3xl md:text-5xl">
            Add-On <span className="italic text-gradient-gold">Services</span>
          </h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            To make your event even more special, choose from our optional services.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {addOns.map((a, i) => (
              <span
                key={a}
                data-reveal
                className="reveal-zoom inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 text-sm text-foreground/85 hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-gold">✦</span> {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
