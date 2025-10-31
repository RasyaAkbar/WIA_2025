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
    <div className="min-h-screen font-sans">
      <main className="mx-auto max-w-5xl px-5 py-10">
        <header className="mb-8 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-black dark:text-zinc-50">
            Direktori UMKM
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Temukan dan dukung bisnis lokal di sekitar Anda. Cari berdasarkan nama
            dan saring berdasarkan kategori.
          </p>
          <div className="flex flex-col gap-3">
            <SearchBar value={q} onChange={setQ} />
            <Filters
              categories={CATEGORIES}
              selected={category}
              onChange={setCategory}
            />
          </div>
        </header>

        <section>
          {results.length === 0 ? (
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Tidak ada UMKM yang cocok.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
