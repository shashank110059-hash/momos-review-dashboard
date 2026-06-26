"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FollowInstagram from "../components/FollowInstagram";
import ReviewCard from "../components/ReviewCard";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [followed, setFollowed] = useState(true);
  const [rating, setRating] = useState(0);
  const [selectedReview, setSelectedReview] = useState("");
  const [reviewOptions, setReviewOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  if (followed && !started) {
  return (
    <FollowInstagram
      onContinue={() => setStarted(true)}
    />
  );
}
  if (started) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 pt-28 pb-10">

        <Navbar />

        <h1 className="text-5xl font-bold text-red-500 text-center">
          How was your experience?
        </h1>

        <p className="mt-4 text-gray-400 text-center">
          Tap a star to continue
        </p>

        <div className="flex gap-4 mt-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={async () => {
                setRating(star);
                setLoading(true);
                setSelectedReview("");

                try {
                  const res = await fetch("/api/generate-review", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      rating: star,
                    }),
                  });

                  const data = await res.json();

                  if (!res.ok) {
                    alert(JSON.stringify(data));
                    setLoading(false);
                    return;
                  }

                  if (!data.reviews) {
                    alert("Reviews not received.");
                    setLoading(false);
                    return;
                  }

                  setReviewOptions(data.reviews);

                  if (data.reviews.length > 0) {
                    setSelectedReview(data.reviews[0]);
                  }
                } catch (error) {
                  console.error(error);
                  alert("Failed to generate AI reviews.");
                }

                setLoading(false);
              }}
              className={`text-6xl transition duration-300 hover:scale-125 ${
                rating >= star ? "text-yellow-400" : "text-gray-600"
              }`}
            >
              ⭐
            </button>
          ))}
        </div>

        {rating > 0 && (
          <div className="mt-12 w-full max-w-2xl">

            <h2 className="text-center text-2xl font-bold text-green-400">
              You selected {rating} Star{rating > 1 ? "s" : ""}
            </h2>

            <div className="mt-8 space-y-4">

              {loading ? (
                <div className="text-center py-12">
                  <div className="text-6xl animate-bounce">🍜</div>

                  <p className="mt-4 text-lg text-gray-400">
                    Cooking your perfect AI review...
                  </p>
                </div>
              ) : (
                reviewOptions.map((review, index) => (
                  <ReviewCard
                    key={index}
                    review={review}
                    selected={selectedReview === review}
                    onClick={() => setSelectedReview(review)}
                  />
                ))
              )}

            </div>

            {selectedReview && (
              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedReview);
                    alert("Review copied!");
                  }}
                  className="rounded-full bg-red-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-red-700"
                >
                  📋 Copy Review
                </button>

                <button
                  onClick={() => {
                    window.open(
                      "https://search.google.com/local/writereview?placeid=ChIJCZZMOtcFDTkRrgck-Mzp9p4",
                      "_blank"
                    );
                  }}
                  className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-green-700"
                >
                  ⭐ Open Google Review
                </button>

              </div>
            )}

          </div>
        )}

      </main>
    );
  }

  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2">

        <button
          onClick={() => setFollowed(true)}
          className="rounded-full bg-red-600 px-10 py-5 text-xl font-bold shadow-2xl transition duration-300 hover:scale-110 hover:bg-red-700"
        >
          🚀 Get Started
        </button>

      </div>

    </main>
  );
}