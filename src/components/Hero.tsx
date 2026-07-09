"use client";

import Image from "next/image";
import QuoteForm from "./QuoteForm";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center py-20 lg:py-32 overflow-hidden bg-brand-forest">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Neatly mowed green suburban lawn"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Gradient Overlay for 100% Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 lg:from-brand-forest/95 lg:via-brand-forest/80 lg:to-brand-forest/40 z-10 mix-blend-multiply" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-white text-center lg:text-left">
            {/* Trust Signal Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-grass text-brand-grass" />
                ))}
              </div>
              <span className="text-sm font-bold tracking-wide uppercase text-white/90">
                5.0 Star Rated on Google
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Dependable Lawn Care for Ladson & Charleston.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              Locally owned and ready to work. We specialize in mowing, trimming, and cleanups.
            </p>

            {/* Massive Call CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="tel:8437650284"
                className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-xl bg-brand-grass px-8 text-xl font-bold text-brand-forest shadow-lg shadow-brand-grass/20 hover:bg-brand-grass-dark hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-brand-grass/30"
              >
                Call Now: (843) 765-0284
              </a>
              <a
                href="#quote"
                className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 px-8 text-lg font-semibold text-white transition-all lg:hidden"
              >
                Request a Quote
              </a>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-5 w-full" id="quote-hero">
            <div className="max-w-md mx-auto lg:max-w-none shadow-2xl">
              <QuoteForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
