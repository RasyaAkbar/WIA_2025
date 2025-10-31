"use client";

import Image from "next/image";
import Link from "next/link";
import type { Umkm } from "../data/umkm";

type Props = {
  umkm: Umkm;
};

export default function UmkmCard({ umkm }: Props) {
  const cover = umkm.images[0] ?? "/vercel.svg";
  return (
    <Link
      href={`/umkm/${umkm.slug}`}
      className="group rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] overflow-hidden bg-white dark:bg-[#1a2332] hover:shadow-xl hover:border-[#4a90a4] dark:hover:border-[#4a90a4] transition-all duration-300"
    >
      <div className="relative aspect-video w-full bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] dark:from-[#1e3a5f] dark:to-[#2d4a6a]">
        <Image
          src={cover}
          alt={umkm.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="inline-flex items-center">
          <span className="text-xs font-semibold text-[#d4a855] bg-[#d4a855]/10 px-3 py-1 rounded-full">
            {umkm.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#1e3a5f] dark:text-white group-hover:text-[#4a90a4] dark:group-hover:text-[#4a90a4] transition-colors">
          {umkm.name}
        </h3>
        <p className="text-sm text-[#64748b] dark:text-[#94a3b8] line-clamp-2 leading-relaxed">
          {umkm.description}
        </p>
        <div className="mt-2 flex items-start gap-2">
          <svg className="w-4 h-4 mt-0.5 text-[#4a90a4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
            {umkm.address}
          </p>
        </div>
      </div>
    </Link>
  );
}