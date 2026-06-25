"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
        >
          <Image
            src="/logo.png"
            alt="Momos Nation Cafe"
            width={180}
            height={180}
            className="rounded-full border-4 border-red-600 shadow-[0_0_35px_rgba(255,0,0,0.6)]"
          />
        </motion.div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white">
          Momos Nation Cafe
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-xl text-red-400 font-semibold">
          Simply Awesome
        </p>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg text-gray-300 leading-8">
          Every bite tells a story. Your feedback helps us serve you better.
          Share your experience and let our AI help you write the perfect Google review.
        </p>

        {/* Stars */}
        <div className="mt-10 flex gap-3 text-5xl">
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
        </div>

        {/* Tagline */}
        <p className="mt-5 text-gray-300 text-lg">
          ⭐ Loved your food? Rate us below.
        </p>
      </motion.div>
    </section>
  );
}