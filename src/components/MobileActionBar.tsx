"use client";

import Link from "next/link";
import { Phone, Clipboard } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] block md:hidden bg-zinc-950 border-t border-zinc-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 h-16 w-full">
        {/* Left Column: Call Now */}
        <a
          href="tel:8437650284"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base transition-colors"
        >
          <Phone size={18} className="fill-current" />
          <span>Call Now</span>
        </a>

        {/* Right Column: Get Quote */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-base border-l border-zinc-800 transition-colors"
        >
          <Clipboard size={18} />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
