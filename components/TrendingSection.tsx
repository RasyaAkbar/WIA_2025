import { TrendingUp } from "lucide-react";
import { Umkm } from "../app/data/umkm";
import { UmkmCard } from "./UmkmCard";

interface TrendingSectionProps {
  umkmList: Umkm[];
  // onUmkmClick: (umkm: Umkm) => void;
}

export function TrendingSection({ umkmList }: TrendingSectionProps) {
  // Ambil 3 UMKM pertama sebagai trending (bisa diganti dengan logic rating/view nanti)
  const trendingUmkm = umkmList.slice(0, 3);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-2.5 rounded-xl">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">Trending di Sekitarmu</h2>
          <p className="text-gray-600 text-sm">UMKM paling populer minggu ini</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingUmkm.map((umkm, index) => (
          <div 
            key={umkm.slug}
            className="relative"
          >
            {/* Badge trending number */}
            <div className="absolute -top-3 -left-3 z-10 bg-gradient-to-br from-blue-700 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="font-bold text-lg">#{index + 1}</span>
            </div>
            <UmkmCard umkm={umkm}/>
          </div>
        ))}
      </div>
    </div>
  );
}
