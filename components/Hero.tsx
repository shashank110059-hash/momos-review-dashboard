"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_65%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/logo.png"
            alt="Momos Nation Cafe"
            width={180}
            height={180}
            priority
            className="mx-auto rounded-full border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,0.45)]"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-5xl md:text-7xl font-extrabold text-white"
        >
          Momos Nation Cafe
        </motion.h1>

        {/* Tagline */}
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-red-500">
          Simply Awesome
        </p>

        {/* Stars */}
        <div className="mt-8 flex justify-center gap-2 text-5xl">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="text-yellow-400 drop-shadow-lg animate-pulse"
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-2xl leading-8 text-gray-300">
          Love our momos? Share your experience and let AI help you write
          the perfect Google Review in just a few seconds.
        </p>

      </div>
    </section>
  );
}