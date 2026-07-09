import { Metadata } from "next";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import Services from "@/components/Services";
import AboutAndReview from "@/components/AboutAndReview";

export const metadata: Metadata = {
  title: "Diaz Landscape Lawn Care LLC | Ladson & Charleston SC",
  description: "Reliable local lawn care in Ladson, SC. We specialize in mowing, trimming, and seasonal cleanups. Open 24 Hours. Call (843) 765-0284.",
};

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About & Review Section */}
      <AboutAndReview />

      {/* Quote Form Section */}
      <section id="quote" className="py-24 bg-brand-offwhite relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-grass/5 rounded-bl-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-brand-forest-light/5 rounded-tr-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-brand-forest mb-4">Request a Free Quote</h2>
            <p className="text-lg text-brand-forest-light">
              Ready to transform your lawn? Fill out the quick form below and we'll get back to you with a personalized estimate.
            </p>
          </div>
          
          <QuoteForm />
        </div>
      </section>

      {/* Premium Services Section */}
      <Services />
    </>
  );
}
