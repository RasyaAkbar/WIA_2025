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
      className="group rounded-xl border border-black/10 dark:border-white/15 overflow-hidden bg-white dark:bg-black hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-video w-full bg-black/5 dark:bg-white/5">
        <Image
          src={cover}
          alt={umkm.name}
          fill
          className="object-contain p-6 group-hover:scale-[1.01] transition-transform"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
          {umkm.category}
        </div>
        <h3 className="text-base font-semibold text-black dark:text-zinc-50">
          {umkm.name}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {umkm.description}
        </p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
          {umkm.address}
        </p>
      </div>
    </Link>
  );
}


