import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProductRatings(props) {
  const rating = props.rating;
  const [ratings, setRatingsArray] = useState([]);

  //   Create a function that takes in a number and returns an array of rating values
  function setNumberOfStars(num_of_stars) {
    // initialize an empty array to hold our rating values
    let newRatings = [];

    //1. push the appropriate rating values into newRatings based on the number of stars
    for (let i = 0; i < Math.floor(num_of_stars) && i < 5; i++) {
      newRatings.push("filled-star");
    }

    // 2. check if there is a decimal value and add "half-star" icon
    if (num_of_stars % 1 !== 0 && newRatings.length < 5) {
      newRatings.push("half-star");
    }

    // 3. if newRatings is less than 5 elements long, push empty-star values to fill the remaining slots
    for (let i = newRatings.length; i < 5; i++) {
      newRatings.push("empty-star");
    }

    // 4.set the ratings state to the new array of rating values
    setRatingsArray(newRatings);
  }

  // 5. Call the setNumberOfStars function in useEffect
  useEffect(() => {
    setNumberOfStars(rating);
  }, []);

  return (
    <div className="pro">
      <div className="rating-container">
        {/* 6. Render the stars in jsx */}
        {ratings.map((rating) => {
          return (
            <img
              className="rating"
              key={uuidv4()}
              src={`./images/ratings/${
                rating === "empty-star"
                  ? "emptyStar.png"
                  : rating === "half-star"
                  ? "halfStar.png"
                  : "star.png"
              }`}
              alt={rating}
            />
          );
        })}
        <span className="numberOfReviewrs">(2.8k)</span>
      </div>
    </div>
  );
}
