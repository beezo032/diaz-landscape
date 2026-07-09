import { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { Phone, Clock, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Diaz Landscape | Ladson SC | Free Estimate",
  description: "Get in touch with Diaz Landscape Lawn Care LLC. Call (843) 765-0284 or request a free quote online. Open 24 hours serving Ladson and Charleston.",
};

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-brand-offwhite">
      
      {/* Simple Page Header with Dark Background */}
      <section className="bg-zinc-950 py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Get in Touch for a Free Estimate
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Ready to transform your lawn? We make it easy. Call us directly or fill out our quick contact card below.
          </p>
        </div>
      </section>

      {/* Two-Column Layout Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-6">
              Why Homeowners Choose Diaz Landscape
            </h2>
            
            <p className="text-brand-forest-light text-base md:text-lg mb-10 leading-relaxed">
              We understand how important it is to have a dependable team care for your home. We show up exactly when scheduled, communicate clearly, and treat your property with the respect it deserves.
            </p>

            <div className="space-y-8">
              {/* Phone Detail */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-600 shrink-0">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-forest-light/65 mb-1">Call or Text Anytime</h3>
                  <a 
                    href="tel:8437650284" 
                    className="text-2xl md:text-3xl font-bold text-green-600 hover:text-green-700 transition-colors block"
                  >
                    (843) 765-0284
                  </a>
                </div>
              </div>

              {/* Hours Detail */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-600 shrink-0">
                  <Clock size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-forest-light/65 mb-1">Business Hours</h3>
                  <p className="text-lg font-bold text-brand-forest">Open 24 Hours / 7 Days a Week</p>
                  <p className="text-sm text-brand-forest-light">We respond to calls and form requests day or night.</p>
                </div>
              </div>

              {/* Service Area Detail */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-600 shrink-0">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-forest-light/65 mb-1">Our Service Area</h3>
                  <p className="text-lg font-bold text-brand-forest">Ladson & Charleston, SC</p>
                  <p className="text-sm text-brand-forest-light">Summerville, Goose Creek, and surrounding neighborhoods.</p>
                </div>
              </div>
            </div>

            {/* Extra Trust signals */}
            <div className="mt-12 p-6 bg-white border border-gray-200/80 rounded-2xl flex items-center gap-4 shadow-sm">
              <div className="text-green-500 shrink-0">
                <CheckCircle size={28} strokeWidth={2.5} />
              </div>
              <p className="text-sm font-medium text-brand-forest-light">
                <strong className="text-brand-forest">Fast Estimate Delivery:</strong> Submit the form on the right, and we'll deliver your free landscape quote in just a few hours.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6 w-full lg:sticky lg:top-28">
            <div className="shadow-2xl">
              <QuoteForm />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
