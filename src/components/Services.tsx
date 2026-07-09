"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    id: "mowing",
    title: "Mowing & Edging",
    description: "Our mowing service provides reliable, routine lawn maintenance to keep your grass healthy, clean, and perfectly manicured. We show up on schedule, string trim all edges, and blow clippings off your driveways and walkways.",
    image: "/images/service-mowing.png",
    href: "/services/mowing",
  },
  {
    id: "pine-straw",
    title: "Pine Straw Installation",
    description: "We provide professional pine straw installation, a hallmark of clean South Carolina landscaping. Fresh pine straw beds give your yard a tidy, natural southern look while protecting soil and roots from intense summer heat.",
    image: "/images/gallery_3.png",
    href: "/services/pine-straw",
  },
  {
    id: "mulching",
    title: "Professional Mulching",
    description: "Our mulching services enhance your curb appeal while supporting soil health and weed prevention. We install premium, double-shredded mulch layers that lock in root moisture and block unwanted weeds from taking over your garden beds.",
    image: "/images/service-cleanups.png",
    href: "/services/mulching",
  },
  {
    id: "planting",
    title: "Planting & Landscaping",
    description: "Transform your property with custom garden bed design, shrub planting, and ornamental grass layouts. We specialize in local plant selection and complete property transformations that thrive in Charleston weather.",
    image: "/images/service-trimming.png",
    href: "/services/planting",
  },
];

export default function Services() {
  return (
    <section className="bg-brand-offwhite py-24 text-brand-forest" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-grass-dark font-bold tracking-widest uppercase text-sm">Professional Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mt-3 mb-6">
            Lawn Care Done Right
          </h2>
          <p className="text-lg text-brand-forest-light">
            We provide reliable, top-quality maintenance to keep your property looking pristine year-round. Select a service to see details.
          </p>
        </div>

        {/* Services Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full"
            >
              {/* Service Image */}
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Service Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-brand-forest mb-3">
                  {svc.title}
                </h3>
                <p className="text-brand-forest-light text-sm font-sans leading-relaxed flex-grow">
                  {svc.description}
                </p>
                
                {/* Learn More Button linking directly to child page */}
                <Link
                  href={svc.href}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 text-white hover:bg-green-500 hover:text-zinc-950 px-4 py-2.5 text-sm font-semibold transition-colors duration-200 font-sans"
                >
                  <span>See Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Block */}
        <div className="bg-white border border-gray-200/80 rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="p-4 bg-brand-grass/10 rounded-full text-brand-grass-dark shrink-0">
              <MapPin size={28} strokeWidth={2} />
            </div>
            <div className="text-center md:text-left flex-grow">
              <h4 className="text-lg font-bold text-brand-forest mb-2">Our Local Service Area</h4>
              <p className="text-brand-forest-light text-sm leading-relaxed mb-4">
                We are proudly based in <strong className="text-brand-forest">Ladson, SC</strong> and service residential properties throughout the surrounding area, including <strong className="text-brand-forest">Charleston, Summerville, and Goose Creek</strong>.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["Ladson", "Charleston", "Summerville", "Goose Creek"].map((city) => (
                  <span
                    key={city}
                    className="text-xs font-semibold px-3 py-1 bg-brand-offwhite text-brand-forest-light border border-gray-200 rounded-full"
                  >
                    {city}, SC
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
