"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-600/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

        {/* Logo & Name */}
        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Momos Nation Cafe"
            width={55}
            height={55}
            className="rounded-full border-2 border-red-500"
            priority
          />

          <div>
            <h2 className="text-white font-bold text-lg md:text-xl">
              Momos Nation Cafe
            </h2>

            <p className="text-red-400 text-xs md:text-sm">
              Simply Awesome
            </p>
          </div>

        </div>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/mnc_.janakpuri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
        >
          <span className="text-xl">📸</span>

          <span className="hidden sm:block">
            Follow & Get Discount
          </span>
        </a>

      </div>
    </motion.nav>
  );
}