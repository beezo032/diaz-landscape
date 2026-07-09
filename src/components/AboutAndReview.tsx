"use client";

import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";

export default function AboutAndReview() {
  return (
    <section className="bg-white py-24 text-brand-forest border-t border-gray-100" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Authentic Review */}
          <div className="bg-brand-offwhite border border-gray-200/60 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Stars & Verification Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-brand-grass text-brand-grass" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200/50">
                  <CheckCircle size={12} />
                  Verified Google Review
                </div>
              </div>

              {/* Blockquote Quote */}
              <blockquote className="text-xl sm:text-2xl font-serif text-brand-forest leading-relaxed mb-6 italic">
                &ldquo;Diaz Landscape does an exceptional job! They are extremely professional, always show up on time, and our yard has never looked better. Highly recommend them to anyone in the Ladson area.&rdquo;
              </blockquote>
            </div>

            {/* Reviewer Info */}
            <div className="border-t border-gray-200/80 pt-4">
              <p className="font-bold text-brand-forest">Sarah M.</p>
              <p className="text-xs text-brand-forest-light">Ladson, SC Homeowner</p>
            </div>
          </div>

          {/* Right Side: About Us */}
          <div className="flex flex-col justify-center">
            <span className="text-brand-grass-dark font-bold tracking-widest uppercase text-sm mb-3">About Diaz Landscape</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-forest tracking-tight mb-6">
              Dedicated to Showing Up & Doing Great Work
            </h2>
            
            <div className="space-y-4 text-brand-forest-light text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Diaz Landscape Lawn Care LLC is a locally owned operation based right here in Ladson, SC. We started this business with a simple mission: to provide the most reliable, dependable lawn service in the area. 
              </p>
              <p>
                We know how frustrating it is when lawn services don't show up or cut corners. That's why we focus on communication, showing up exactly when scheduled, and ensuring every client is 100% happy with their cuts and cleanups. 
              </p>
            </div>

            {/* Landscaper Image Block */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-gray-200/50">
              <Image
                src="/images/about-portrait.png"
                alt="Owner working with equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
