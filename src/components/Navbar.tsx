"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services", hasDropdown: true },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const serviceSubLinks = [
  { href: "/services/mowing", label: "Mowing" },
  { href: "/services/pine-straw", label: "Pine Straw Installation" },
  { href: "/services/mulching", label: "Mulching" },
  { href: "/services/planting", label: "Planting & Landscaping" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-[9999] w-full bg-zinc-950 border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-serif">Diaz Landscape</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-green-500 -mt-1">Lawn Care LLC</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-green-500 h-full relative ${
                        isActive ? "text-green-500" : "text-zinc-300"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-[80px] left-0 w-56 rounded-b-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden py-2"
                        >
                          {serviceSubLinks.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-5 py-3 text-sm text-zinc-300 hover:text-green-500 hover:bg-zinc-800/50 transition-colors font-medium"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-green-500 h-full flex items-center relative ${
                    isActive ? "text-green-500" : "text-zinc-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8437650284"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-zinc-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all hover:scale-105 active:scale-95 shadow-md shadow-green-500/10"
            >
              <Phone size={14} className="fill-current" />
              <span>(843) 765-0284</span>
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg text-white hover:bg-zinc-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>

        </div>
      </div>

      {/* Slide-in Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed inset-0 z-50 w-full h-[100dvh] bg-zinc-950 p-6 flex flex-col md:hidden overflow-y-auto"
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center mb-8 shrink-0">
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-serif">Diaz Landscape</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-green-500 -mt-1">Lawn Care LLC</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-white hover:bg-zinc-900 transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navigation Options with massive touch targets */}
            <nav className="flex flex-col flex-grow py-4 justify-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                if (link.hasDropdown) {
                  return (
                    <div key={link.label} className="flex flex-col w-full border-b border-zinc-900">
                      <button
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        className={`flex items-center justify-between w-full text-2xl font-bold uppercase py-4 transition-colors text-left hover:text-green-500 ${
                          isActive || isMobileDropdownOpen ? "text-green-500" : "text-zinc-300"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={22} className={`transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180 text-green-500" : ""}`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isMobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-zinc-900/40 rounded-lg pl-4 flex flex-col gap-2 mb-2"
                          >
                            {serviceSubLinks.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileDropdownOpen(false);
                                }}
                                className="text-lg font-semibold py-3 text-zinc-400 hover:text-green-500 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-bold uppercase py-4 border-b border-zinc-900 transition-colors hover:text-green-500 block ${
                      isActive ? "text-green-500 border-l-4 border-green-500 pl-3" : "text-zinc-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer Call CTA */}
            <div className="mt-auto pt-6 border-t border-zinc-900 shrink-0">
              <a
                href="tel:8437650284"
                className="w-full inline-flex h-14 items-center justify-center gap-3 bg-green-500 text-zinc-950 font-bold rounded-xl text-base shadow-lg transition-transform active:scale-[0.98]"
              >
                <Phone size={18} className="fill-current" />
                <span>Call (843) 765-0284</span>
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
