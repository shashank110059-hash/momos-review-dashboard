type ReviewCardProps = {
  review: string;
  selected: boolean;
  onClick: () => void;
};

export default function ReviewCard({
  review,
  selected,
  onClick,
}: ReviewCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl p-5 text-left transition ${
        selected
          ? "bg-red-600 text-white"
          : "bg-gray-900 text-gray-200 hover:bg-gray-800"
      }`}
    >
      {review}
    </button>
  );
}