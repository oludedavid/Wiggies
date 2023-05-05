import React, { useEffect } from "react";

export default function ProductDefaultPage(props) {
  return (
    <>
      <div className="product-default-page">
        <img src="./images/productLanding/pic5.jpg" />
        <div className="overlay">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider text-center mb-6">
            Wig it! feel it!
          </p>

          <h1 className="animate__animated  animate__zoomIn">
            Discover Your Perfect Wig Today!
          </h1>
          <p>
            Discover your perfect wig today! High-quality, natural-looking wigs
            to suit your style and needs.
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
                <button
                  onClick={() => {
                    props.shopNow(product.name);
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
