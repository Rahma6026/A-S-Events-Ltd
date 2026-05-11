import { useState } from "react";
import { useContent } from "./ContentProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, type ContactFormData, sendEmail } from "@/lib/content";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { contact } = useContent();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await (sendEmail as any)({ data });
      toast.success("Message sent successfully! We'll be in touch soon.");
      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <input
                  {...register("name")}
                  placeholder="Name"
                  className={`w-full bg-input/40 border ${errors.name ? 'border-destructive' : 'border-border'} focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-4 py-3 rounded-sm transition`}
                />
              </div>
              <div className="space-y-1">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className={`w-full bg-input/40 border ${errors.email ? 'border-destructive' : 'border-border'} focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-4 py-3 rounded-sm transition`}
                />
              </div>
            </div>
            <textarea
              {...register("message")}
              placeholder="Tell us about your event..."
              rows={6}
              className={`w-full bg-input/40 border ${errors.message ? 'border-destructive' : 'border-border'} focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none px-4 py-3 rounded-sm transition resize-none`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gold text-primary-foreground tracking-widest uppercase text-sm hover-lift rounded-sm relative overflow-hidden disabled:opacity-70"
            >
              <span className="relative z-10">{isSubmitting ? "Sending..." : "Submit"}</span>
            </button>
          </form>

          <div data-reveal className="reveal-right space-y-8">
            <h3 className="font-display text-3xl text-gold-soft">We'd Love to Hear From You</h3>
            {[
              { t: "Phone", v: contact.phone, icon: "☎" },
              { t: "Email", v: contact.email, icon: "✉" },
              { t: "Address", v: contact.address, icon: "✦" },
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
                  {c.t === "Email" ? (
                    <a href={`mailto:${c.v}`} className="text-foreground/90 hover:text-gold transition-colors">
                      {c.v}
                    </a>
                  ) : c.t === "Phone" ? (
                    <a href={`tel:${c.v.replace(/\s/g, "")}`} className="text-foreground/90 hover:text-gold transition-colors">
                      {c.v}
                    </a>
                  ) : (
                    <p className="text-foreground/90">{c.v}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
