import { useState } from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import "./StarRating.css";

const StarRating = ({
  totalStars = 5,
  color = "#ffd700",
  initialRating = 0,
  ratingLabels,
  onSetRating,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [tempRating, setTempRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
    onSetRating(index + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => setTempRating(index + 1)}
          onMouseLeave={() => setTempRating(0)}
          className={`star-rating__star ${
            index < rating ? "star-rating__star--selected" : ""
          }`}
          style={{ color }}
        >
          {index < (tempRating || rating) ? (
            <MdStar className="star-rating__icon" />
          ) : (
            <MdStarOutline className="star-rating__icon" />
          )}
        </span>
      ))}
      <strong className="star-rating__selected-rating" style={{ color }}>
        {ratingLabels
          ? ratingLabels[(tempRating || rating) - 1]
          : tempRating || rating}
      </strong>
    </div>
  );
};

export default StarRating;
