"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent | PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    } else {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isDragging, onPointerMove, onPointerUp]);

  return (
    <div 
      className="relative w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-brand-forest/20 shadow-2xl cursor-ew-resize select-none touch-none"
      ref={containerRef}
      onPointerDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!isDragging) setIsHovered(false);
      }}
    >
      {/* Before Image (Background) */}
      <Image
        src={beforeImage}
        alt="Before Landscaping"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      {/* After Image (Clipped overlay) */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={afterImage}
          alt="After Landscaping"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] transform -translate-x-1/2 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-forest transition-transform hover:scale-110 active:scale-95">
          <ChevronsLeftRight size={20} strokeWidth={2.5} />
        </div>
      </div>

      {/* Hover Labels */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute top-6 right-6 z-30 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded text-white font-semibold text-sm tracking-wider uppercase pointer-events-none"
            >
              Before
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute top-6 left-6 z-30 px-4 py-1.5 bg-brand-grass/80 backdrop-blur-md rounded text-brand-forest font-bold text-sm tracking-wider uppercase pointer-events-none"
            >
              After
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
