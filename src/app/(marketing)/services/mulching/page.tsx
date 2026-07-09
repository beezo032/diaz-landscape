import { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Mulch Installation & Weed Control | Charleston SC | Diaz Landscape",
  description: "Add fresh hardwood mulch in black, brown, or red to protect your soil and prevent weed growth. Quality mulching services in Ladson & Charleston, SC.",
};

const serviceHighlights = [
  "Flower bed weeding, cleaning, and soil leveling prior to spreading",
  "Precise spade-cut borders to separate lawn grass from mulch beds",
  "Spreading premium double-shredded mulch to a standard 2-3 inch depth",
  "Color options: Classic Black, Dark Brown, and Vibrant Red",
];

const galleryImages = [
  "/images/service-cleanups.png", // Mulching and cleanup visual
  "/images/gallery_2_1783559456124.png", // Clean borders
  "/images/gallery_3_1783559469024.png", // Trees in mulched rings
];

export default function MulchingPage() {
  return (
    <div className="flex-1 flex flex-col bg-brand-offwhite">
      {/* Service Hero */}
      <section className="bg-zinc-950 py-16 md:py-24 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-500 font-bold uppercase tracking-widest text-sm">Weed Prevention</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mt-2">
            Professional Mulch Installation
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto font-sans">
            Premium mulching that locks in moisture, blocks weeds, and frames your garden beds with bold, rich colors. Servicing Ladson, Charleston, and Summerville, SC.
          </p>
        </div>
      </section>

      {/* Details & Gallery split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Scope of Work */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-6">
              Protect Your Soil & Control Weeds
            </h2>
            <p className="text-brand-forest-light text-base md:text-lg mb-8 leading-relaxed font-sans">
              Mulch is one of the most effective ways to protect your plantings. A fresh layer of mulch regulates soil temperature, retains critical moisture for root health, and blocks sunlight from germinating weed seeds. We prepare all beds cleanly to optimize these benefits.
            </p>

            <div className="space-y-4">
              {serviceHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <p className="text-brand-forest font-medium text-base font-sans">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mini Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative w-full aspect-[4/3] sm:col-span-2 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src={galleryImages[0]}
                alt="Hardwood mulch install"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <Image
                  src={img}
                  alt={`Mulch detail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Call to Action Quote Form */}
        <div className="border-t border-gray-200 pt-16 md:pt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-serif font-bold text-brand-forest mb-3">Request Your Free Estimate</h2>
            <p className="text-brand-forest-light text-sm font-sans">
              Ready to refresh your mulch beds? Fill out the card below, and we'll deliver your free estimate in a few hours.
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
