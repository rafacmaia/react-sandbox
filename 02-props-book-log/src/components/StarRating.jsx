import { StarFilled, StarHalf, StarEmpty } from "./icons/StarIcons.jsx";

export default function StarRating({ rating }) {
  const TOTAL_STARS = 5;
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarFilled
        key={stars.length}
        className="size-5 md:size-4.5"
        alt="Star rating icon"
      />,
    );
  }

  if (rating % 1 === 0.5) {
    stars.push(
      <StarHalf
        key={stars.length}
        className="size-5 md:size-4.5"
        alt="Half-star rating icon"
      />,
    );
  }

  while (stars.length < TOTAL_STARS) {
    stars.push(
      <StarEmpty
        key={stars.length}
        className="size-5 md:size-4.5"
        alt="Empty star rating icon"
      />,
    );
  }

  return <div className="mb-4 flex gap-0.5">{stars}</div>;
}
