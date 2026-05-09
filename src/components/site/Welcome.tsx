export function Welcome() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-left" data-reveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80&auto=format&fit=crop"
              alt="Elegantly styled banquet table with candles and florals"
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
            Where Every Gathering Unfolds Like a Love Letter
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At Dreamy Daisies, we believe a celebration is more than an occasion —
            it is a story written in candlelight, florals and quiet detail.
            Set within a contemporary hall framed by soft architecture and warm
            gold accents, our venue is shaped to hold the moments that matter
            most: vows whispered, milestones honoured, friendships rekindled.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a versatile canvas, considered acoustics and a team devoted to
            grace under pressure, we turn the everyday into something quietly
            extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}
