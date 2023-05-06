import React from "react";
import { Link } from "react-router-dom";

export default function NavigationMenu({ numberOfItemsInCart }) {
  return (
    <nav className="navigation-menu">
      <div className="logo flex items-center pl-6 ml-3">
        <span>
          <img src="./images/nav-img/wig.png" alt="Wiggies Logo" />
        </span>
        <h1 className="text-2xl font-bold pl-4">Wiggies</h1>
      </div>
      <div className="primary-menu flex-grow">
        <ul className="navigation-link-list pr-8">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </div>

      <div className="secondary-menu pr-8">
        <ul className="navigation-link-list pr-8">
          <li>
            <img
              src="./images/nav-img/search.png"
              alt="Search"
              className="logo-size search--image"
            />
          </li>

          <li className="shopping-cart-list-icon-container">
            <Link to="/shopping-cart">
              <img
                src="./images/nav-img/trolley-cart.png"
                alt="Shopping Cart"
                className="logo-size shopping-cart--image"
              />
            </Link>
            {numberOfItemsInCart > 0 && (
              <div className="shopping-cart-item-count">
                {numberOfItemsInCart}
              </div>
            )}
          </li>

          <li>
            <Link to="/sign-up">
              <img
                src="./images/nav-img/add-user.png"
                alt="Shopping Cart"
                className="logo-size signup--image"
              />
            </Link>
          </li>

          <li>
            <Link to="/liked-product-page">
              <img
                src="./images/ratings/empty-heart.png"
                alt="Heart"
                className="logo-size Heart--image"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
