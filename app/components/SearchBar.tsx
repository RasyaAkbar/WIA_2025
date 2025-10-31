"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder }: Props) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-[#64748b] dark:text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Cari UMKM berdasarkan nama..."}
        className="w-full h-12 rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a2332] pl-12 pr-4 text-sm text-[#1e3a5f] dark:text-white placeholder:text-[#94a3b8] outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-[#4a90a4] transition-all"
      />
    </div>
  );
}