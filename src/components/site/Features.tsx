const features = [
  {
    title: "A Hall for Every Occasion",
    desc: "From candlelit dinners for thirty to grand productions for a thousand — modular layouts, considered packages, no compromise.",
    icon: "❀",
  },
  {
    title: "Quietly Modern Facilities",
    desc: "Climate-controlled interiors, generous parking, suite-style green rooms, mastered acoustics, layered lighting and discreet security.",
    icon: "✦",
  },
  {
    title: "Effortless Arrival",
    desc: "Set within easy reach of major roads and transit — your guests cross the threshold composed, never rushed.",
    icon: "❖",
  },
  {
    title: "Couture Décor & Styling",
    desc: "From heritage motifs to minimalist editorial — staging, florals, lighting and entrances designed in conversation with your story.",
    icon: "✿",
  },
];

import featuresBg from "@/assets/features-bg.png";
import featuresBg2 from "@/assets/features-bg-2.png";
import { useEffect, useState } from "react";

const slides = [featuresBg, featuresBg2];

export function Features() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-28 overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: active === i ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">— Features</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">
            Why Choose <span className="italic text-gradient-gold">A S Events Ltd?</span>
          </h2>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-muted-foreground">
            Refinement without the weight of fuss. Honest pricing, generous
            inclusions, and a team that anticipates before it's asked.
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
