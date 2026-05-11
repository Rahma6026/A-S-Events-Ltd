import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 bg-card/40 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">— Contact</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4">
            Get In <span className="italic text-gradient-gold">Touch</span>
          </h2>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-muted-foreground">
            Whether it's a vow, a milestone or a quiet tradition — share the
            outline of your day, and we'll begin shaping something the years
            will be kind to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <form
            data-reveal
            className="reveal-left space-y-5 bg-background/60 border border-border rounded-sm p-8 backdrop-blur-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                placeholder="Name"
                className="w-full bg-input/40 border border-border focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-4 py-3 rounded-sm transition"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full bg-input/40 border border-border focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-4 py-3 rounded-sm transition"
              />
            </div>
            <textarea
              required
              placeholder="Tell us about your event..."
              rows={6}
              className="w-full bg-input/40 border border-border focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-4 py-3 rounded-sm transition resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gold text-primary-foreground tracking-widest uppercase text-sm hover-lift rounded-sm relative overflow-hidden"
            >
              <span className="relative z-10">{sent ? "Success! ✦ We'll be in touch" : "Submit"}</span>
            </button>
          </form>

          <div data-reveal className="reveal-right space-y-8">
            <h3 className="font-display text-3xl text-gold-soft">We'd Love to Hear From You</h3>
            {[
              { t: "Phone", v: "020 4569 0196", icon: "☎" },
              { t: "Email", v: "admin@asevents.co.uk", icon: "✉" },
              { t: "Address", v: "Registered office: 31 Robinson Road, London, England, E2 9LX", icon: "✦" },
            ].map((c) => (
              <div
                key={c.t}
                className="flex gap-5 items-start p-5 border border-border rounded-sm hover-lift bg-background/40"
              >
                <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold text-lg shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-1">{c.t}</p>
                  <p className="text-foreground/90">{c.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
