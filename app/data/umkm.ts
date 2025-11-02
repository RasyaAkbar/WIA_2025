export type UmkmCategory = "Makanan" | "Minuman" | "Jasa" | "Toko" | "Lainnya";

export type Umkm = {
  slug: string;
  name: string;
  category: UmkmCategory;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  images: string[];
};

export const UMKMS: Umkm[] = [
  {
    slug: "warung-kopi-harapan",
    name: "Warung Kopi Harapan",
    category: "Minuman",
    description:
      "Warung kopi rumahan dengan racikan kopi lokal dan suasana hangat untuk bersantai.",
    address: "Jl. Melati No. 12, Sukamaju",
    latitude: -6.200000,
    longitude: 106.816666,
    images: [
      "/globe.svg",
      "/next.svg",
      "/vercel.svg",
    ],
  },
  {
    slug: "bakso-pak-de-lagenda",
    name: "Bakso Pak De (Legendaris)",
    category: "Makanan",
    description:
      "Bakso daging sapi dengan kuah gurih yang melegenda sejak 1998.",
    address: "Jl. Kenanga No. 5, Mekarjaya",
    latitude: -6.210200,
    longitude: 106.845300,
    images: [
      "/window.svg",
      "/file.svg",
      "/vercel.svg",
    ],
  },
  {
    slug: "barbershop-cool-cut",
    name: "Barbershop Cool Cut",
    category: "Jasa",
    description:
      "Tempat potong rambut andalan dengan barber berpengalaman dan layanan ramah.",
    address: "Ruko Permata Blok B2, Cempaka",
    latitude: -6.230500,
    longitude: 106.800000,
    images: [
      "/vercel.svg",
      "/globe.svg",
      "/next.svg",
    ],
  },
  {
    slug: "toko-kue-manis-ria",
    name: "Toko Kue Manis Ria",
    category: "Makanan",
    description:
      "Aneka kue basah tradisional dan modern, cocok untuk acara spesial.",
    address: "Pasar Sentosa Los A-10",
    latitude: -6.180000,
    longitude: 106.820000,
    images: [
      "/next.svg",
      "/globe.svg",
      "/file.svg",
    ],
  },
  {
    slug: "DJOEANG",
    name: "DJOEANG",
    category: "Toko",
    description:
      "Layanan laundry cepat selesai dalam 24 jam dengan harga terjangkau.",
    address: "Jl. Mawar No. 78, Harapan Baru",
    latitude: -6.250000,
    longitude: 106.900000,
    images: [
      "/window.svg",
      "/vercel.svg",
      "/globe.svg",
    ],
  },
];

export const CATEGORIES: UmkmCategory[] = [
  "Makanan",
  "Minuman",
  "Jasa",
  "Toko",
  "Lainnya",
];


