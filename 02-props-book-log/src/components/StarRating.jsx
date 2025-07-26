import star from "../assets/star.svg";
import halfStar from "../assets/half-star.svg";
import emptyStar from "../assets/empty-star.svg";

export default function StarRating({ rating }) {
  const TOTAL_STARS = 5;
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img className="size-5 md:size-4.5" src={star} alt="Star rating icon" />,
    );
  }

  if (rating % 1 === 0.5) {
    stars.push(
      <img
        className="size-5 md:size-4.5"
        src={halfStar}
        alt="Half-star rating icon"
      />,
    );
  }

  while (stars.length < TOTAL_STARS) {
    stars.push(
      <img
        className="size-5 md:size-4.5"
        src={emptyStar}
        alt="Empty star rating icon"
      />,
    );
  }

  return <div className="mb-4 flex gap-0.5">{stars}</div>;
}
