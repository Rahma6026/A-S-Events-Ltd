import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Welcome } from "@/components/site/Welcome";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Features } from "@/components/site/Features";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "A S Events Ltd — Event Management & Convention Hall" },
      {
        name: "description",
        content:
          "A S Events Ltd Convention Hall — premium event management for weddings, concerts, conferences and celebrations in London.",
      },
    ],
  }),
});

function Index() {
  useRevealAll();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Services />
        <Process />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
