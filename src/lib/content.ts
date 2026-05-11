import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

// Types
export const ServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string(),
  desc: z.string(),
  url: z.string().optional(),
});

export const FeatureSchema = z.object({
  id: z.string(),
  title: z.string(),
  desc: z.string(),
  icon: z.string(),
});

export const ContentSchema = z.object({
  brandName: z.string(),
  hero: z.object({
    subtitle: z.string(),
    titlePart1: z.string(),
    titlePart2: z.string(),
    description: z.string(),
    videoUrl: z.string(),
    circularText: z.string(),
  }),
  welcome: z.object({
    subtitle: z.string(),
    titlePart1: z.string(),
    titlePart2: z.string(),
    quote: z.string(),
    description1: z.string(),
    description2: z.string(),
    image: z.string(),
  }),
  about: z.object({
    subtitle: z.string(),
    titlePart1: z.string(),
    titlePart2: z.string(),
    quote: z.string(),
    description1: z.string(),
    description2: z.string(),
    image: z.string(),
  }),
  contact: z.object({
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  }),
  services: z.array(ServiceSchema),
  features: z.array(FeatureSchema),
});

export type SiteContent = z.infer<typeof ContentSchema>;

// Initial State (Mock Data from original site)
let siteContent: SiteContent = {
  brandName: "A S Events Ltd",
  hero: {
    subtitle: "✦ Crafted Moments · Curated Beautifully",
    titlePart1: "A S Events",
    titlePart2: "Ltd",
    description: "A timeless convention hall and atelier of event artisans — composing weddings, soirées and milestones into heirloom-worthy memories, petal by petal.",
    videoUrl: "https://assets.mixkit.co/videos/5213/5213-720.mp4",
    circularText: "✦ ATELIER OF CELEBRATIONS ✦ A S EVENTS LTD ✦ ATELIER OF CELEBRATIONS ✦ A S EVENTS LTD ✦",
  },
  welcome: {
    subtitle: "— Welcome",
    titlePart1: "Welcome to",
    titlePart2: "A S Events Ltd",
    quote: "Where Every Gathering Unfolds Like a Love Letter",
    description1: "At A S Events Ltd, we believe a celebration is more than an occasion — it is a story written in candlelight, florals and quiet detail. Set within a contemporary hall framed by soft architecture and warm gold accents, our venue is shaped to hold the moments that matter most: vows whispered, milestones honoured, friendships rekindled.",
    description2: "With a versatile canvas, considered acoustics and a team devoted to grace under pressure, we turn the everyday into something quietly extraordinary.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80&auto=format&fit=crop",
  },
  about: {
    subtitle: "— Welcome To A S Events Ltd",
    titlePart1: "Who",
    titlePart2: "We Are",
    quote: "A Sanctuary Where Cherished Moments Quietly Bloom",
    description1: "A S Events Ltd began with a simple intention — to build a hall where people could gather without compromise, surrounded by craftsmanship, warm hospitality and unhurried elegance. Years of curating weddings, galas and intimate ceremonies have shaped a space that feels equally grand and grounded.",
    description2: "Our name reflects who we are — a team built on service, sincerity and standards. It is our promise that every event we host will carry that same spirit: understated beauty, considered detail, and joy that lingers long after the last guest departs.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80&auto=format&fit=crop",
  },
  contact: {
    email: "admin@aseventlimited.com",
    phone: "020 4569 0196",
    address: "Registered office: 31 Robinson Road, London, England, E2 9LX",
  },
  services: [
    {
      id: "1",
      title: "Signature Weddings",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop",
      desc: "From the first proposal to the final farewell, we orchestrate weddings with quiet precision — vendor curation, day-of choreography and the kind of detail that turns a ceremony into folklore.",
    },
    {
      id: "2",
      title: "Sports Event Coordination",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80&auto=format&fit=crop",
      desc: "Tournaments, leagues, marathons and award ceremonies — fixture scheduling, scoreboards, broadcast-ready production, athlete hospitality and crowd choreography from kick-off to closing whistle.",
    },
    {
      id: "3",
      title: "Conferences & Salons",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format&fit=crop",
      desc: "Refined corporate gatherings, panels and creative workshops — full AV, fibre Wi-Fi, technical direction and seating layouts tailored to dialogue.",
    },
    {
      id: "4",
      title: "Concerts & Recitals",
      img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80&auto=format&fit=crop",
      desc: "An elevated stage, mastered acoustics and architectural lighting — built for chamber recitals, acoustic sets and full-band productions alike.",
    },
    {
      id: "5",
      title: "Galas & Award Nights",
      img: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=900&q=80&auto=format&fit=crop",
      desc: "Black-tie evenings deserve a setting to match — bespoke staging, branded signage, LED scenography and seating that honours every guest of the night.",
    },
    {
      id: "6",
      title: "Editorial Photography & Film",
      img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=900&q=80&auto=format&fit=crop",
      desc: "Cinematic stills and motion — pre-event portraits, full-day coverage, aerial work, same-day reels and considered live streaming.",
    },
  ],
  features: [
    {
      id: "1",
      title: "A Hall for Every Occasion",
      desc: "From candlelit dinners for thirty to grand productions for a thousand — modular layouts, considered packages, no compromise.",
      icon: "❀",
    },
    {
      id: "2",
      title: "Quietly Modern Facilities",
      desc: "Climate-controlled interiors, generous parking, suite-style green rooms, mastered acoustics, layered lighting and discreet security.",
      icon: "✦",
    },
    {
      id: "3",
      title: "Effortless Arrival",
      desc: "Set within easy reach of major roads and transit — your guests cross the threshold composed, never rushed.",
      icon: "❖",
    },
    {
      id: "4",
      title: "Couture Décor & Styling",
      desc: "From heritage motifs to minimalist editorial — staging, florals, lighting and entrances designed in conversation with your story.",
      icon: "✿",
    },
  ],
};

import nodemailer from "nodemailer";

export const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Server Functions
export const getContent = createServerFn({ method: "GET" }).handler(async () => {
  return siteContent;
});

export const updateContent = createServerFn({ method: "POST" })
  .handler(async (ctx: any) => {
    siteContent = ctx.data as SiteContent;
    return { success: true };
  });

export const sendEmail = createServerFn({ method: "POST" })
  .handler(async (ctx: any) => {
    const data = ctx.data as ContactFormData;
    const validatedData = ContactFormSchema.parse(data);
    console.log("Sending email from:", validatedData.email);
    const transporter = nodemailer.createTransport({
      host: "mail.aseventlimited.com",
      port: 465,
      secure: true,
      auth: {
        user: "admin@aseventlimited.com",
        pass: process.env.EMAIL_PASSWORD || "London@2026@@",
      },
    });

    try {
      await transporter.sendMail({
        from: `"A S Events Ltd Contact" <admin@aseventlimited.com>`,
        to: "admin@aseventlimited.com",
        replyTo: validatedData.email,
        subject: `New Inquiry from ${validatedData.name}`,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Website Inquiry</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
        `,
      });
      console.log("Email sent successfully!");
      return { success: true };
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Failed to send email");
    }
  });
