import React, { useState, useEffect } from "react";
import ProductRating from "./ProductRatings";

export default function ProductCard(props) {
  const [likedBtn, setLikedBtn] = useState(false);

  function handleLikeBtn() {
    setLikedBtn(!likedBtn);
  }

  return (
    <div className="product-card-wrapper bg-white rounded-lg shadow-md text-ellipsis">
      <div className="product-card-container grid grid-cols-1 sm:grid-cols-2 justify-center items-center relative w-full h-400">
        <div className="product-card-image-container overflow-hidden">
          <img
            className="product-card-image"
            src={props.image}
            alt="Afro wigs"
          />
        </div>
        <div className="product-card-overlay">
          <p className="product-card-description text-ellipsis">
            {props.description}
          </p>
          <p className="product-card-price text-xl font-bold">
            ${props.price}.00
          </p>
          <div className="product-card-rating-container">
            <ProductRating rating={props.rating} />
          </div>
          <p className="product-card-vendor">{props.vendorName}</p>
        </div>
      </div>
      <div className="btn-container ">
        <button className="product-card-add-to-basket-btn">
          <img
            className="product-card-add-to-basket-icon"
            src="./images/plus.png"
            alt="add icon"
          />
          Add to basket
        </button>
        <div className="like-button-container">
          <button
            onClick={() => {
              handleLikeBtn();
            }}
            className="like-button"
          >
            <img
              src={`./images/ratings/${
                likedBtn ? "filledHeart.png" : "empty-heart.png"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
