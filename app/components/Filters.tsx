"use client";

import type { UmkmCategory } from "../data/umkm";

type Props = {
  categories: UmkmCategory[];
  selected: string;
  onChange: (value: string) => void;
};

export default function Filters({ categories, selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange("")}
        className={`h-9 rounded-full border px-4 text-sm transition-colors ${
          selected === ""
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-transparent text-black dark:text-white border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        }`}
      >
        Semua
      </button>
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={`h-9 rounded-full border px-4 text-sm transition-colors ${
            selected === c
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-transparent text-black dark:text-white border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}


