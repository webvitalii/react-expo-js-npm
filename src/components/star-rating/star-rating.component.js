import { useState } from "react";
import { MdStar, MdStarOutline } from "react-icons/md";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: "pointer" }}
        >
          {index < rating ? <MdStar /> : <MdStarOutline />}
        </span>
      ))}
      <p>Selected rating: {rating}</p>
    </div>
  );
};

export default StarRating;
