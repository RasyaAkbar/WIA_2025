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
        className={`h-10 rounded-lg border px-5 text-sm font-medium transition-all duration-200 ${
          selected === ""
            ? "bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-md dark:bg-[#4a90a4] dark:border-[#4a90a4]"
            : "bg-transparent text-[#64748b] dark:text-[#94a3b8] border-[#e2e8f0] dark:border-[#2d3748] hover:bg-[#f8fafc] dark:hover:bg-[#2d3748] hover:border-[#1e3a5f] dark:hover:border-[#4a90a4]"
        }`}
      >
        Semua
      </button>
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={`h-10 rounded-lg border px-5 text-sm font-medium transition-all duration-200 ${
            selected === c
              ? "bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-md dark:bg-[#4a90a4] dark:border-[#4a90a4]"
              : "bg-transparent text-[#64748b] dark:text-[#94a3b8] border-[#e2e8f0] dark:border-[#2d3748] hover:bg-[#f8fafc] dark:hover:bg-[#2d3748] hover:border-[#1e3a5f] dark:hover:border-[#4a90a4]"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}