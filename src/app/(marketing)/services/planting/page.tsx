import { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Flower Bed Planting & Garden Design | Ladson SC",
  description: "Transform your yard with decorative shrub planting, flower bed layouts, and custom landscaping designed for Charleston climates. Free estimates.",
};

const serviceHighlights = [
  "Custom garden bed designs tailored to your home layout",
  "Plant selection of climate-resilient shrubs, flowers, and ornamental grasses",
  "Soil conditioning with organic compost to boost growth",
  "Proper layout positioning based on yard shade and sunlight factors",
];

const galleryImages = [
  "/images/service-trimming.png", // Landscaping visual
  "/images/about-portrait.png", // Landscaping setup
  "/images/gallery_1_1783559449266.png", // Finished flower garden
];

export default function PlantingPage() {
  return (
    <div className="flex-1 flex flex-col bg-brand-offwhite">
      {/* Service Hero */}
      <section className="bg-zinc-950 py-16 md:py-24 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-500 font-bold uppercase tracking-widest text-sm">Yard Transformations</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mt-2">
            Planting & Landscaping
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto font-sans">
            Custom garden bed layouts, plant installations, and flower design designed to thrive under local climate conditions. Servicing Ladson, Charleston, and Summerville, SC.
          </p>
        </div>
      </section>

      {/* Details & Gallery split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Scope of Work */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-6">
              Create Your Dream Garden Layout
            </h2>
            <p className="text-brand-forest-light text-base md:text-lg mb-8 leading-relaxed font-sans">
              A premium garden design puts a completely new face on your property. We work closely with you to pick shrubs, perennials, and ornamental grasses that match your maintenance preferences and yard lighting conditions, building a garden that stays lush season after season.
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
                alt="Planting and garden beds"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <Image
                  src={img}
                  alt={`Planting detail ${i + 1}`}
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
              Ready for a yard transformation? Fill out the card below, and we'll deliver your free estimate in a few hours.
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
