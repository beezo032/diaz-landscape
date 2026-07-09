import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-forest text-brand-offwhite border-t border-brand-forest-light/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-3 text-white">Diaz Landscape Lawn Care LLC</h3>
            <p className="text-sm text-brand-offwhite/80 leading-relaxed max-w-sm mb-4">
              Providing professional, reliable lawn services in South Carolina. We focus on showing up on time and doing high-quality work.
            </p>
            <span className="inline-block px-3 py-1 bg-brand-grass/15 text-brand-grass rounded-full text-xs font-bold uppercase tracking-wider border border-brand-grass/20">
              Open 24 Hours
            </span>
          </div>

          {/* Column 2: Local SEO Service Area */}
          <div>
            <h4 className="text-md font-bold mb-4 text-white">Our Service Areas</h4>
            <p className="text-sm text-brand-offwhite/80 leading-relaxed">
              We proudly provide residential lawn mowing, hedge trimming, and seasonal yard cleanups throughout <strong className="text-white">Ladson, SC</strong> and surrounding <strong className="text-white">Charleston</strong> neighborhoods, including Summerville and Goose Creek.
            </p>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h4 className="text-md font-bold mb-4 text-white">Get in Touch</h4>
            <address className="not-italic text-sm space-y-3 text-brand-offwhite/90">
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">Call or Text:</span>
                <a href="tel:8437650284" className="hover:text-brand-grass transition-colors font-medium">
                  (843) 765-0284
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-white">Primary Area:</span>
                <span>Ladson, SC 29456</span>
              </p>
            </address>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-brand-forest-light/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-offwhite/50">
          <p>
            &copy; {new Date().getFullYear()} Diaz Landscape Lawn Care LLC. All rights reserved.
          </p>
          <p className="text-gray-500 hover:text-gray-400 transition-colors">
            Website by <span className="font-medium text-gray-500">Signal Light Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
