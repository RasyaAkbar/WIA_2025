"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#1e3a5f] dark:bg-[#1a2332] border-b border-[#2d4a6a] dark:border-[#2d3748] shadow-md">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
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
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white/80">DIREKTORI</span>
                <span className="text-lg font-bold text-white tracking-wide">UMKM</span>
              </div>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-white/90 hover:text-[#d4a855] transition-colors"
            >
              Direktori
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium text-white/90 hover:text-[#d4a855] transition-colors"
            >
              Tentang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}