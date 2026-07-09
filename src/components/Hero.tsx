"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center py-24 md:py-32 overflow-hidden bg-brand-forest">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Neatly mowed green suburban lawn"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Heavy Dark Overlay for 100% Text Readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Trust Signal Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-sm">
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <Star key={i} size={16} className="fill-brand-grass text-brand-grass" />
            ))}
          </div>
          <span className="text-sm font-bold tracking-wide uppercase text-white/90 font-sans">
            5.0 Star Rated on Google
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-white mb-6 max-w-4xl">
          Dependable Lawn Care for Ladson & Charleston.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl font-sans">
          Locally owned and ready to work. We specialize in mowing, pine straw installation, mulching, and complete property transformations.
        </p>

        {/* Side-by-side CTA Buttons (stacked on mobile) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <a
            href="tel:8437650284"
            className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-xl bg-brand-grass px-8 text-lg font-bold text-brand-forest shadow-lg shadow-brand-grass/20 hover:bg-brand-grass-dark hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-brand-grass/30 font-sans"
          >
            Call Now: (843) 765-0284
          </a>
          <a
            href="#quote"
            className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-xl bg-transparent hover:bg-white/10 border-2 border-white px-8 text-lg font-bold text-white transition-all hover:scale-[1.02] font-sans"
          >
            Request Free Quote
          </a>
        </div>

      </div>
    </section>
  );
}
