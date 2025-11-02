import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Umkm } from "../app/data/umkm";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface UmkmCardProps {
  umkm: Umkm;
}

export function UmkmCard({ umkm }: UmkmCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Makanan": "bg-green-100 text-green-700 border-green-200",
      "Minuman": "bg-blue-100 text-blue-700 border-blue-200",
      "Jasa": "bg-purple-100 text-purple-700 border-purple-200",
      "Fashion": "bg-pink-100 text-pink-700 border-pink-200",
      "Kerajinan": "bg-amber-100 text-amber-700 border-amber-200"
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const router = useRouter();

  const handleClick = () => {
    router.push(`/umkm/${umkm.slug}`);
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-blue-900"
      onClick={handleClick}
    >
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <Image
          src={umkm.images?.[0] ?? "/fallback.jpg"}
          alt={umkm.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg group-hover:text-blue-600 transition-colors">
            {umkm.name}
          </h3>
          <Badge variant="outline" className={getCategoryColor(umkm.category)}>
            {umkm.category}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {umkm.description}
        </p>
        
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="line-clamp-1">{umkm.address}</span>
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
}
