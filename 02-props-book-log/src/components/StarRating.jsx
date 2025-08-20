import { StarFilled, StarHalf, StarEmpty } from "./icons/StarIcons";

export default function StarRating({ rating }) {
  const TOTAL_STARS = 5;
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarFilled key={stars.length} className="size-5 md:size-4.5" />,
    );
  }

  if (rating % 1 === 0.5) {
    stars.push(<StarHalf key={stars.length} className="size-5 md:size-4.5" />);
  }

  while (stars.length < TOTAL_STARS) {
    stars.push(<StarEmpty key={stars.length} className="size-5 md:size-4.5" />);
  }

  return (
    <div
      className="mb-4.5 flex gap-0.5 sm:mb-4"
      aria-label={`Rating: ${rating} stars out of 5`}
    >
      {stars}
    </div>
  );
}
