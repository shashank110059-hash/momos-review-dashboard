"use client";

import { useState } from "react";
import ReviewCard from "../components/ReviewCard";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedReview, setSelectedReview] = useState("");
  const [reviewOptions, setReviewOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  if (started) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-5xl font-bold text-red-500">
          How was your experience?
        </h1>

        <p className="mt-4 text-gray-400">
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

                  console.log("API Response:", data);

                  // NEW DEBUG CODE
                  if (!res.ok) {
                    alert(JSON.stringify(data));
                    setLoading(false);
                    return;
                  }

                  if (!data.reviews) {
                    alert("reviews field is missing");
                    console.log(data);
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
              className={`text-6xl transition hover:scale-110 ${
                rating >= star ? "text-yellow-400" : "text-gray-600"
              }`}
            >
              ⭐
            </button>
          ))}
        </div>

        {rating > 0 && (
          <div className="mt-10 text-center w-full max-w-2xl">
            <p className="text-2xl text-green-400">
              You selected {rating} Star{rating > 1 ? "s" : ""}
            </p>

            <div className="mt-6 space-y-4">
              {loading ? (
                <p className="text-gray-400">
                  Generating AI reviews...
                </p>
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
              <div className="mt-8 flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedReview);
                    alert("Review copied!");
                  }}
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold"
                >
                  Copy Review
                </button>

                <button
                  onClick={() => {
                    window.open(
                      "https://search.google.com/local/writereview?placeid=ChIJCZZMOtcFDTkRrgck-Mzp9p4",
                      "_blank"
                    );
                  }}
                  className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-xl font-bold"
                >
                  Open Google Review
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-500">
        Momos Nation Cafe
      </h1>

      <p className="mt-5 text-2xl">
        AI Powered Review Dashboard
      </p>

      <button
        onClick={() => setStarted(true)}
        className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl text-2xl font-bold"
      >
        Get Started
      </button>
    </main>
  );
}