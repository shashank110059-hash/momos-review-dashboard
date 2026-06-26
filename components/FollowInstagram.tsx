"use client";

import Image from "next/image";

export default function FollowInstagram({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-lg rounded-3xl border border-red-600 bg-zinc-900 p-10 text-center shadow-2xl">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Momos Nation Cafe"
          width={120}
          height={120}
          className="mx-auto rounded-full border-4 border-red-500"
          priority
        />

        <h1 className="mt-6 text-4xl font-bold text-white">
          Follow Us on Instagram
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Follow <span className="font-semibold text-red-500">Momos Nation Cafe</span>
          <br />
          and get exciting offers, discounts and the latest updates.
        </p>

        {/* Follow Button */}
        <a
          href="https://www.instagram.com/mnc_.janakpuri/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 py-4 text-xl font-bold text-white transition hover:scale-105"
        >
          📸 Follow Now
        </a>

        {/* Continue */}
        <button
          onClick={onContinue}
          className="mt-6 w-full rounded-xl bg-green-600 py-4 text-xl font-bold text-white transition hover:bg-green-700"
        >
          Continue →
        </button>

      </div>

    </main>
  );
}