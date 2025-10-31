"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder ?? "Cari UMKM berdasarkan nama..."}
      className="w-full h-11 rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-black px-4 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
    />
  );
}


