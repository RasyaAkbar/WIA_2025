"use client";

import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

export default function Gallery({ images, alt }: Props) {
  if (!images?.length) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((src, idx) => (
        <div key={src + idx} className="relative aspect-square rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
          <Image src={src} alt={`${alt} ${idx + 1}`} fill className="object-contain p-4" />
        </div>
      ))}
    </div>
  );
}


