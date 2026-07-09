import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Our Work Portfolio | Before & After | Diaz Landscape",
  description: "See the difference. View our local landscaping projects, before-and-after transformations, and cleanups in Charleston and Ladson, SC.",
};

const localProjects = [
  {
    id: 1,
    src: "/images/gallery_2_1783559456124.png",
    title: "Precision Hedge Trimming in Downtown Charleston",
    tag: "Trimming",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 2,
    src: "/images/gallery_3_1783559469024.png",
    title: "Spring Mulch & Soil Conditioning",
    tag: "Yard Work",
    aspectRatio: "aspect-square",
  },
  {
    id: 3,
    src: "/images/gallery_4_1783559476375.png",
    title: "Overgrown Lot Fall Cleanup in Ladson",
    tag: "Cleanups",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 4,
    src: "/images/gallery_5_1783559482872.png",
    title: "St. Augustine Turf Revival & Maintenance",
    tag: "Mowing",
    aspectRatio: "aspect-square",
  },
  {
    id: 5,
    src: "/images/gallery_6_1783559495722.png",
    title: "Commercial Estate Groundskeeping",
    tag: "Mowing",
    aspectRatio: "aspect-[16/10]",
  },
];

export default function GalleryPage() {
  return (
    <div className="relative min-h-[100dvh] bg-brand-offwhite text-brand-forest pt-28 md:pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-brand-grass-dark font-bold tracking-widest uppercase mb-4">Our Work</p>
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6">
            The Difference is <br className="hidden md:block"/> in the Details
          </h1>
          <p className="text-lg md:text-xl text-brand-forest-light max-w-2xl mx-auto font-sans">
            We don't just cut grass. We engineer outdoor spaces. Drag the slider below to see a real transformation in our community.
          </p>
        </div>

        {/* Featured Interactive Slider */}
        <div className="mb-24 md:mb-32">
          <BeforeAfterSlider 
            beforeImage="/images/before-yard.png"
            afterImage="/images/after-yard.png"
          />
          <p className="text-center text-sm font-medium text-brand-forest-light mt-6 uppercase tracking-widest font-sans">
            Slide to compare the transformation
          </p>
        </div>

        {/* Local Projects Masonry Feed */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-brand-forest border-b-2 border-brand-grass pb-4 inline-block">
            Recent Local Projects
          </h2>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
            {localProjects.map((project) => (
              <div 
                key={project.id} 
                className="break-inside-avoid flex flex-col group"
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden rounded-2xl shadow-md border border-brand-forest/5 mb-4 ${project.aspectRatio}`}>
                  <Image 
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-forest/0 group-hover:bg-brand-forest/10 transition-colors duration-500" />
                </div>
                
                {/* Case Study Meta */}
                <div className="px-2">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-brand-forest bg-brand-grass rounded-full font-sans">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-semibold leading-tight text-brand-forest group-hover:text-brand-grass-dark transition-colors font-serif">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full z-[9998] bg-brand-forest text-white border-t border-brand-grass/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg md:text-xl font-bold font-serif mb-1">Ready for your own transformation?</h4>
            <p className="text-sm text-brand-offwhite/80 font-sans">Available 24 hours in Ladson & Charleston.</p>
          </div>
          <Link 
            href="/#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-grass hover:bg-brand-grass-dark text-brand-forest font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-grass/20 font-sans"
          >
            <span>Get a Free Quote</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
