const services = [
  {
    title: "Sports Event Coordination",
    img: "https://dreamydaisies.co.uk/wp-content/uploads/2025/08/pexels-vince-32020828-scaled.jpg",
    desc: "From professional tournaments to community sports days, we organize sports events that leave a lasting impression — permits, sponsorships, logistics and promotion handled end-to-end.",
  },
  {
    title: "Wedding Planning & Coordination",
    img: "https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-amar-10360900-scaled.jpg",
    desc: "Your wedding day is everything you've ever dreamed of and more. From consultations and vendors to timelines and on-site coordination — every detail with care.",
  },
  {
    title: "Conferences & Workshops",
    img: "https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-bertellifotografia-3321796-scaled.jpg",
    desc: "Corporate events, motivational talks and workshops in a polished setting — full AV support, Wi-Fi, technical staff and flexible seating layouts.",
  },
  {
    title: "Concerts & Recitals",
    img: "https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-wendywei-2350325-scaled.jpg",
    desc: "Turn up the volume and light up the night — elevated stage, premium sound system, modern lighting, backstage and audience seating.",
  },
  {
    title: "Sports Award Nights",
    img: "https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-caleboquendo-15689008-scaled.jpg",
    desc: "Award nights and post-game banquets in a hall that celebrates athletic achievement — LED display, branded signage and team seating.",
  },
  {
    title: "Photography & Videography",
    img: "https://dreamydaisies.co.uk/wp-content/uploads/2025/07/pexels-caleboquendo-2918590-scaled.jpg",
    desc: "Cinematic photo & video coverage — pre-event, full-day, drone, same-day reels, live streaming and bespoke photo booths.",
  },
];

const addOns = [
  "Catering (Multi-cuisine)",
  "Themed décor & stage props",
  "Event host / Emcee",
  "DJ & live music booking",
  "Valet & security services",
  "Custom invitation design",
  "Live event streaming",
];

export function Services() {
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
            Celebrate every occasion with style and ease. From intimate gatherings
            to large-scale productions — flawless execution, every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              className="reveal-zoom group relative bg-card/60 border border-border rounded-sm overflow-hidden hover-lift"
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
          ))}
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
