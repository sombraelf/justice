import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../App.css';

const Rating = () => {
  const [rating, setRating] = useState(null);


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              className='sterneBewertung'
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? "black" : "grey"}
              size={40}
            />
          </label>
        );
      })}
      <p>
        {rating}
      </p>
    </div>
  )
}

export default Rating