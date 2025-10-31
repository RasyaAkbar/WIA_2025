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
      <div className="min-h-screen font-sans">
        <main className="mx-auto max-w-3xl px-5 py-10">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">UMKM tidak ditemukan.</p>
          <Link href="/" className="text-sm underline mt-3 inline-block">Kembali ke Direktori</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <main className="mx-auto max-w-4xl px-5 py-10">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:underline">← Kembali ke Direktori</Link>
        </nav>
        <header className="mb-6">
          <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{umkm.category}</div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-black dark:text-zinc-50">{umkm.name}</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">{umkm.description}</p>
          <p className="mt-2 text-sm text-zinc-500">{umkm.address}</p>
        </header>

        <section className="mb-8">
          <MapEmbed latitude={umkm.latitude} longitude={umkm.longitude} name={umkm.name} />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Galeri Foto</h2>
          <Gallery images={umkm.images} alt={umkm.name} />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Tentang</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{umkm.description}</p>
        </section>
      </main>
    </div>
  );
}


