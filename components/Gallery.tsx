"use client";

import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

export default function Gallery({ images, alt }: Props) {
  if (!images?.length) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <div key={src + idx} className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] dark:from-[#1e3a5f] dark:to-[#2d4a6a] border border-[#e2e8f0] dark:border-[#2d3748] hover:border-[#4a90a4] dark:hover:border-[#4a90a4] transition-all duration-300 hover:shadow-lg">
          <Image 
            src={src} 
            alt={`${alt} ${idx + 1}`} 
            fill 
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      ))}
    </div>
  );
}