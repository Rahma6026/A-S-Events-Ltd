import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getContent, updateContent, SiteContent } from "@/lib/content";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContentSchema } from "@/lib/content";
import { toast } from "sonner";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [siteData, setSiteData] = useState<SiteContent | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getContent();
        setSiteData(data);
      } catch (error) {
        console.error("Failed to fetch content", error);
        toast.error("Failed to load content");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SiteContent>({
    resolver: zodResolver(ContentSchema),
    values: siteData || undefined,
  });

  const { fields: serviceFields, append: appendService, remove: removeService } = useFieldArray({
    control,
    name: "services",
  });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control,
    name: "features",
  });

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid password");
    }
  };

  const onSubmit = async (data: SiteContent) => {
    try {
      await (updateContent as any)({ data });
      toast.success("Content updated successfully");
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Update failed");
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
        <div className="w-full max-w-md p-8 bg-card border border-border rounded-lg shadow-elegant">
          <h1 className="font-display text-3xl text-gradient-gold text-center mb-8">Admin Access</h1>
          <form onSubmit={onLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-input/40 border border-border focus:border-gold outline-none px-4 py-3 rounded-md transition"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gold text-primary-foreground tracking-widest uppercase text-sm hover:bg-gold-soft transition-all rounded-md font-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <div className="bg-card/50 border-b border-border py-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h1 className="font-display text-2xl text-gradient-gold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="px-6 py-2 bg-gold text-primary-foreground text-xs tracking-widest uppercase hover:bg-gold-soft transition rounded-full font-bold"
            >
              {isSubmitting ? "Saving..." : "Save All Changes"}
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-6 py-2 border border-border text-foreground text-xs tracking-widest uppercase hover:bg-muted transition rounded-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 mt-12 grid gap-12 max-w-5xl">
        <form className="space-y-12">
          {/* General Settings */}
          <section className="p-8 bg-card border border-border rounded-lg space-y-6">
            <h2 className="text-xl font-display text-gold">General Settings</h2>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Brand Name</label>
              <input {...register("brandName")} className="w-full bg-background border border-border p-3 rounded" />
            </div>
          </section>

          {/* Hero Section */}
          <section className="p-8 bg-card border border-border rounded-lg space-y-6">
            <h2 className="text-xl font-display text-gold">Hero Section</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Subtitle</label>
                <input {...register("hero.subtitle")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Video URL</label>
                <input {...register("hero.videoUrl")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Title Part 1</label>
                <input {...register("hero.titlePart1")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Title Part 2 (Italic/Gold)</label>
                <input {...register("hero.titlePart2")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Description</label>
                <textarea {...register("hero.description")} rows={3} className="w-full bg-background border border-border p-3 rounded resize-none" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Circular Text (Repeating)</label>
                <input {...register("hero.circularText")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
            </div>
          </section>

          {/* Welcome Section */}
          <section className="p-8 bg-card border border-border rounded-lg space-y-6">
            <h2 className="text-xl font-display text-gold">Welcome Section</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Title Part 1</label>
                <input {...register("welcome.titlePart1")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Title Part 2</label>
                <input {...register("welcome.titlePart2")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Quote</label>
                <input {...register("welcome.quote")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Description 1</label>
                <textarea {...register("welcome.description1")} rows={3} className="w-full bg-background border border-border p-3 rounded resize-none" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Image URL</label>
                <input {...register("welcome.image")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="p-8 bg-card border border-border rounded-lg space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display text-gold">Service Cards</h2>
              <button
                type="button"
                onClick={() => appendService({ id: Date.now().toString(), title: "New Service", desc: "Description...", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop" })}
                className="text-xs bg-gold/10 text-gold border border-gold/30 px-4 py-2 rounded-full hover:bg-gold hover:text-primary-foreground transition"
              >
                + Add Service
              </button>
            </div>
            
            <div className="grid gap-6">
              {serviceFields.map((field, index) => (
                <div key={field.id} className="p-6 bg-background/50 border border-border rounded relative group">
                  <button
                    type="button"
                    onClick={() => removeService(index)}
                    className="absolute top-4 right-4 text-destructive opacity-0 group-hover:opacity-100 transition"
                  >
                    Remove
                  </button>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Title</label>
                      <input {...register(`services.${index}.title`)} className="w-full bg-background border border-border p-2 rounded" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Image URL</label>
                      <input {...register(`services.${index}.img`)} className="w-full bg-background border border-border p-2 rounded" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Description</label>
                      <textarea {...register(`services.${index}.desc`)} rows={2} className="w-full bg-background border border-border p-2 rounded resize-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Details */}
          <section className="p-8 bg-card border border-border rounded-lg space-y-6">
            <h2 className="text-xl font-display text-gold">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input {...register("contact.email")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                <input {...register("contact.phone")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
              <div className="md:col-span-3 space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Address</label>
                <input {...register("contact.address")} className="w-full bg-background border border-border p-3 rounded" />
              </div>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
