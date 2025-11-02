import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg shadow-gray-200/50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8">
                  <circle cx="20" cy="20" r="3" fill="#d4a855"/>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 20 + Math.cos(rad) * 12;
                    const y = 20 + Math.sin(rad) * 12;
                    const color = i < 2 ? "#4a90a4" : i < 4 ? "#2d6a7a" : "#1e3a5f";
                    return (
                      <path
                        key={angle}
                        d={`M 20 20 L ${x} ${y} L ${20 + Math.cos(rad + 0.3) * 12} ${20 + Math.sin(rad + 0.3) * 12} Z`}
                        fill={color}
                      />
                    );
                  })}
                </svg>
              </div>
              </div>
              <div>
                <h1 className="text-lg">UMKM Directory</h1>
                <p className="text-xs text-gray-600">Dukung Bisnis Lokal</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Kategori</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</a>
              <Button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700">
                Daftarkan UMKM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}