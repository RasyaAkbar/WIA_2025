"use client";

import { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import UmkmCard from "./components/UmkmCard";
import { UMKMS, CATEGORIES } from "./data/umkm";

export default function Home() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");

  const results = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    return UMKMS.filter((u) => {
      const matchName = !keyword || u.name.toLowerCase().includes(keyword);
      const matchCategory = !category || u.category === category;
      return matchName && matchCategory;
    });
  }, [q, category]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6a] to-[#4a90a4] dark:from-[#1a2332] dark:via-[#1e3a5f] dark:to-[#2d4a6a]">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Direktori UMKM Indonesia
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Temukan dan dukung bisnis lokal di sekitar Anda
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 bg-white dark:bg-[#1a2332] rounded-2xl p-6 shadow-xl">
            <SearchBar value={q} onChange={setQ} />
            <Filters
              categories={CATEGORIES}
              selected={category}
              onChange={setCategory}
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-6">
          <p className="text-sm text-[#1e3a5f] dark:text-[#4a90a4] font-medium">
            {results.length} UMKM ditemukan
          </p>
        </div>

        <section>
          {results.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-[#1a2332] rounded-xl border border-[#e2e8f0] dark:border-[#2d3748]">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-base text-[#64748b] dark:text-[#94a3b8]">
                Tidak ada UMKM yang cocok dengan pencarian Anda
              </p>
              <p className="text-sm text-[#94a3b8] dark:text-[#64748b] mt-2">
                Coba kata kunci atau kategori lain
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((u) => (
                <UmkmCard key={u.slug} umkm={u} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}