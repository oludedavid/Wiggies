import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home py-40">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Wiggies Marketplace</h1>
        <p className="hero-subtitle">
          Find your perfect wig from our wide selection of high-quality wigs
        </p>
        <Link to="/product" className="btn-primary">
          Shop Now
        </Link>
      </div>

      <div className="featured-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-container">
          <div className="product-card">
            <img
              src="./images/products/wig-1.jpg"
              alt="Product 1"
              className="product-image"
            />
            <h3 className="product-name">Natural Curly Wig</h3>
            <p className="product-price">$59.99</p>
            <Link to="/product/1" className="btn-secondary">
              View Product
            </Link>
          </div>

          <div className="product-card">
            <img
              src="./images/products/wig-2.jpg"
              alt="Product 2"
              className="product-image"
            />
            <h3 className="product-name">Long Straight Wig</h3>
            <p className="product-price">$79.99</p>
            <Link to="/product/2" className="btn-secondary">
              View Product
            </Link>
          </div>

          <div className="product-card">
            <img
              src="./images/products/wig-3.jpg"
              alt="Product 3"
              className="product-image"
            />
            <h3 className="product-name">Short Bob Wig</h3>
            <p className="product-price">$49.99</p>
            <Link to="/product/3" className="btn-secondary">
              View Product
            </Link>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2 className="section-title">Why Shop at Wiggies Marketplace?</h2>
        <div className="benefits-container">
          <div className="benefit-card">
            <img
              src="./images/benefits/fast-delivery.png"
              alt="Fast Delivery"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Fast Delivery</h3>
            <p className="benefit-description">
              We ship your order as soon as possible so you can receive your wig
              in no time.
            </p>
          </div>

          <div className="benefit-card">
            <img
              src="./images/benefits/quality-wigs.png"
              alt="Quality Wigs"
              className="benefit-icon"
            />
            <h3 className="benefit-title">High-Quality Wigs</h3>
            <p className="benefit-description">
              We only offer wigs made of the best materials to ensure they look
              great and last long.
            </p>
          </div>

          <div className="benefit-card">
            <img
              src="./images/benefits/customer-support.png"
              alt="Customer Support"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Excellent Customer Support</h3>
            <p className="benefit-description">
              Our customer support team is always ready to assist you with any
              questions or issues you might have. We strive to provide the best
              customer experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
