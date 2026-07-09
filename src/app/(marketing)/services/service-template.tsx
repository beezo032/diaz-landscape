import { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2 } from "lucide-react";

// STEP 1: Copy this file, rename it to page.tsx, and place it in a new folder under src/app/(marketing)/services/
// STEP 2: Customize the metadata below for your new service (helps with local SEO)
export const metadata: Metadata = {
  title: "Service Title | Ladson & Charleston SC | Diaz Landscape",
  description: "Professional lawn care and landscaping services in Ladson, Charleston, and Summerville, SC. Request a free estimate today.",
};

export default function ServicePageTemplate() {
  // STEP 3: Customize these strings for your service page content
  const pageContent = {
    category: "Landscaping Services",
    title: "Professional Service Title",
    tagline: "A 1-sentence value proposition summarizing the main benefit of this service.",
    heroBgImage: "/images/hero-bg.png", // Path to background image
    
    // Details
    headline: "Why This Service Matters",
    introText: "Detailed paragraph explaining the benefits of this service, why it is critical for local South Carolina properties (considering soil types, heat, grass varieties), and an overview of our quality process.",
    
    highlights: [
      "Process highlight 1 (e.g. Meticulous cleanup and preparation)",
      "Process highlight 2 (e.g. Even, professional application)",
      "Process highlight 3 (e.g. Sharp concrete border edging)",
      "Process highlight 4 (e.g. Thorough cleanup of clippings and debris)",
    ],
    
    showcaseImage: "/images/service-mowing.png", // Path to right column image
    showcaseAlt: "Service illustration",
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-offwhite">
      
      {/* Service Hero (h-[40vh]) */}
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <Image
            src={pageContent.heroBgImage}
            alt={pageContent.title}
            fill
            priority
            className="object-cover object-center"
          />
          {/* Heavy dark overlay (bg-black/70) */}
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-500 font-bold uppercase tracking-widest text-sm">
            {pageContent.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mt-2">
            {pageContent.title}
          </h1>
          <p className="text-zinc-300 text-sm md:text-base mt-4 max-w-xl mx-auto font-sans">
            {pageContent.tagline}
          </p>
        </div>
      </section>

      {/* Content Split (2-column layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Detailed Text & Process */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-6">
              {pageContent.headline}
            </h2>
            <p className="text-brand-forest-light text-base md:text-lg mb-8 leading-relaxed font-sans">
              {pageContent.introText}
            </p>

            <div className="space-y-4">
              {pageContent.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <p className="text-brand-forest font-medium text-base font-sans">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Showcase Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200/50">
            <Image
              src={pageContent.showcaseImage}
              alt={pageContent.showcaseAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>

        {/* Lead Capture Form at the absolute bottom */}
        <div className="border-t border-gray-200 pt-16 md:pt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-serif font-bold text-brand-forest mb-3">
              Request Your Free Estimate
            </h2>
            <p className="text-brand-forest-light text-sm font-sans">
              Have questions or ready to schedule service? Fill out the contact card below, and we'll deliver your free estimate in a few hours.
            </p>
          </div>
          <div className="max-w-md mx-auto shadow-2xl">
            <QuoteForm />
          </div>
        </div>

      </section>
    </div>
  );
}
