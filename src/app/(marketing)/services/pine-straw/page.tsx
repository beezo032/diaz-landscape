import { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pine Straw Installation in Ladson SC | Diaz Landscape",
  description: "Premium long-needle pine straw spreading for garden beds, tree rings, and pathways. Professional yard styling in Charleston and Ladson, SC.",
};

const serviceHighlights = [
  "Cleanup of leaves, old pine straw, and weeds prior to spreading",
  "Neat tucking along flower bed borders and concrete pathways",
  "Even, thick layer spreading to discourage weed growth",
  "Premium, long-needle SC native pine straw for clean coloration",
];

const galleryImages = [
  "/images/gallery_3_1783559469024.png", // Southern garden pine straw bed
  "/images/gallery_4_1783559476375.png", // Clean lawn bed
  "/images/gallery_5_1783559482872.png", // Bed detailing
];

export default function PineStrawPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-offwhite">
      {/* Service Hero */}
      <section className="bg-zinc-950 py-16 md:py-24 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-500 font-bold uppercase tracking-widest text-sm">Landscaping Essentials</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mt-2">
            Pine Straw Installation
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto font-sans">
            Clean, professional pine straw spreading that structures your garden beds and protects your soil. Servicing Ladson, Charleston, and Summerville, SC.
          </p>
        </div>
      </section>

      {/* Details & Gallery split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Scope of Work */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-6">
              Southern Styling for Clean Lawns
            </h2>
            <p className="text-brand-forest-light text-base md:text-lg mb-8 leading-relaxed font-sans">
              Pine straw is a natural, lightweight mulch option that is extremely popular across South Carolina. Our crew makes sure beds are fully cleared of weeds and debris before spreading fresh pine straw, styling border lines cleanly to make your garden beds pop.
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
                alt="Fresh pine straw landscaping"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <Image
                  src={img}
                  alt={`Pine straw detail ${i + 1}`}
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
              Ready to refresh your beds? Fill out the card below, and we'll deliver your free estimate in a few hours.
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
