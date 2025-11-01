# 🏪 Direktori UMKM Indonesia

**Website direktori terpusat untuk menemukan dan mendukung Usaha Mikro, Kecil, dan Menengah (UMKM) lokal di sekitar Anda.** Seperti "Google Maps" untuk UMKM, website ini menyediakan platform digital yang informatif dan menarik untuk menghubungkan masyarakat dengan bisnis lokal.

---

## 🛠️ Tech Stack

Proyek ini dibangun menggunakan teknologi modern berikut:

- **Framework:** [Next.js 16](https://nextjs.org/) - React framework dengan App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **React:** [React 19](https://react.dev/) - UI library
- **Fonts:** [Geist Font](https://vercel.com/font) - Modern font family
- **Development:** ESLint untuk code quality

---

## 🚀 Cara Menjalankan Project

### Prasyarat
- Node.js 18+ terinstall
- npm atau package manager lainnya

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/RasyaAkbar/WIA_2025
   cd WIA_2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

### Scripts Tersedia

- `npm run dev` - Menjalankan development server
- `npm run build` - Build production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

---

## 📊 Progress Saat Ini

### ✅ Fitur yang Sudah Diimplementasikan

**Halaman Utama (Direktori UMKM)**
- ✅ Landing page dengan hero section dan gradient yang menarik
- ✅ Search bar untuk mencari UMKM berdasarkan nama
- ✅ Filter kategori (Makanan, Minuman, Jasa, Toko, Lainnya)
- ✅ Grid layout responsif menampilkan semua UMKM dalam bentuk card
- ✅ Real-time filtering berdasarkan search dan kategori
- ✅ Dark mode support
- ✅ Empty state dengan pesan yang informatif

**Halaman Detail UMKM**
- ✅ Dynamic routing untuk setiap UMKM (`/umkm/[slug]`)
- ✅ Informasi lengkap: nama, kategori, deskripsi, dan alamat
- ✅ Embed peta interaktif Google Maps dengan lokasi UMKM
- ✅ Galeri foto produk/menu/suasana tempat
- ✅ Navigation back ke halaman direktori
- ✅ Responsive design untuk mobile dan desktop

**Komponen yang Dibuat**
- ✅ `SearchBar` - Komponen search dengan styling yang konsisten
- ✅ `Filters` - Komponen filter kategori dengan toggle states
- ✅ `UmkmCard` - Card component untuk menampilkan UMKM di direktori
- ✅ `MapEmbed` - Embed Google Maps dengan koordinat UMKM
- ✅ `Gallery` - Grid gallery untuk menampilkan foto-foto

**Data & Struktur**
- ✅ Type definitions untuk UMKM data structure
- ✅ Seed data dengan 5 contoh UMKM
- ✅ Kategori: Makanan, Minuman, Jasa, Toko, Lainnya

### 📋 Struktur Project

```
app/
├── components/          # Reusable components
│   ├── Filters.tsx
│   ├── Gallery.tsx
│   ├── MapEmbed.tsx
│   ├── Navbar.tsx
│   ├── SearchBar.tsx
│   └── UmkmCard.tsx
├── data/               # Data models & seed data
│   └── umkm.ts
├── umkm/               # Dynamic routes
│   └── [slug]/
│       └── page.tsx
├── page.tsx            # Home/Directory page
├── layout.tsx          # Root layout
└── globals.css         # Global styles
```

---

## 🎨 Fitur UI/UX

- **Design Modern:** Gradient hero section dengan warna yang menarik
- **Responsive:** Mobile-first design yang optimal di semua device
- **Dark Mode:** Full support untuk dark mode dengan tema yang konsisten
- **Interactive:** Hover effects, transitions, dan visual feedback
- **Accessible:** Semantic HTML dan proper alt texts

---

## 📝 Catatan

- Data UMKM saat ini menggunakan seed data statis
- Gambar menggunakan placeholder dari public folder (bisa diganti dengan gambar nyata)
- Google Maps embed menggunakan koordinat latitude/longitude

---

## 📄 License

This project is created for WIA 2025 competition.

---

**Made with ❤️ for supporting local businesses**
