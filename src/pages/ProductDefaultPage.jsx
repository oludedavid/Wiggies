import React, { useEffect } from "react";

export default function ProductDefaultPage(props) {
  return (
    <>
      <div className="product-default-page">
        <img src="./images/productLanding/pic5.jpg" />
        <div className="overlay">
          <h1 className="animate__animated  animate__zoomIn">
            Discover Your Perfect Wig Today!
          </h1>
          <p>
            Discover your perfect wig at our collection. Made with high-quality
            materials and designed to look and feel natural, our wigs will help
            you confidently rock any style you desire.
          </p>
          <a href="#featured-container">Featured Products</a>
        </div>
      </div>
      <div id="featured-container">
        {props.featured.map((product) => {
          return (
            <div key={product.id} className="featured-product-card">
              <img src={product.image} />
              <div className="featured-product-card-overlay">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
