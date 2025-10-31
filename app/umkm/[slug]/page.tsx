import Image from "next/image";
import Link from "next/link";
import { UMKMS } from "@/app/data/umkm";
import MapEmbed from "@/app/components/MapEmbed";
import Gallery from "@/app/components/Gallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function UmkmDetail({ params }: Props) {
  const { slug } = await params;
  const umkm = UMKMS.find((u) => u.slug === slug);

  if (!umkm) {
    return (
      <div className="min-h-screen">
        <main className="mx-auto max-w-4xl px-5 py-10">
          <div className="text-center py-12 bg-white dark:bg-[#1a2332] rounded-xl border border-[#e2e8f0] dark:border-[#2d3748]">
            <div className="text-4xl mb-4">❌</div>
            <p className="text-base text-[#64748b] dark:text-[#94a3b8] mb-4">UMKM tidak ditemukan</p>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#4a90a4] hover:text-[#1e3a5f] dark:hover:text-[#d4a855] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Direktori
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f1419]">
      <main className="mx-auto max-w-5xl px-5 py-8">
        <nav className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#4a90a4] hover:text-[#1e3a5f] dark:hover:text-[#d4a855] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Direktori
          </Link>
        </nav>

        <div className="bg-white dark:bg-[#1a2332] rounded-2xl shadow-lg border border-[#e2e8f0] dark:border-[#2d3748] overflow-hidden">
          <div className="p-8">
            <header className="mb-8 pb-6 border-b border-[#e2e8f0] dark:border-[#2d3748]">
              <span className="inline-block text-xs font-semibold text-[#d4a855] bg-[#d4a855]/10 px-3 py-1 rounded-full mb-3">
                {umkm.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4">
                {umkm.name}
              </h1>
              <p className="text-base text-[#64748b] dark:text-[#94a3b8] leading-relaxed mb-4">
                {umkm.description}
              </p>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-[#4a90a4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">{umkm.address}</p>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lokasi
              </h2>
              <MapEmbed latitude={umkm.latitude} longitude={umkm.longitude} name={umkm.name} />
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Galeri Foto
              </h2>
              <Gallery images={umkm.images} alt={umkm.name} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}