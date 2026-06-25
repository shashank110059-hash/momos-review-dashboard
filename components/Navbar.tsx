"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-red-700"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Momos Nation Cafe"
            width={60}
            height={60}
            className="rounded-full"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              Momos Nation Cafe
            </h1>

            <p className="text-sm text-gray-400">
              Simply Awesome
            </p>
          </div>

        </div>

        {/* Instagram Button */}

        <a
          href="https://www.instagram.com/mnc_.janakpuri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-3 font-semibold text-white shadow-lg hover:scale-105 transition duration-300"
        >
          <Instagram size={20} />
          Follow Us
        </a>

      </div>
    </motion.nav>
  );
}