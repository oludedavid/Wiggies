import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationMenu from "./pages/NavigationMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LikedProductPage from "./pages/LikedProductPage";
// import afrowigsData from "../data/afrowigsData";

export default function App() {
  //create a portal for the shopping cart
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [shoppingCartDefaultPage, setShoppingCartDefaultPage] = useState(false);

  function getSelectedAfrowig(afrowig) {
    setShoppingCartItems((prev) => [...prev, afrowig]);
  }
  const numberOfItemsInCart = shoppingCartItems.length;

  return (
    <div className="main">
      <NavigationMenu numberOfItemsInCart={numberOfItemsInCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/product"
          element={<Product getSelectedAfrowig={getSelectedAfrowig} />}
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              numberOfItemsInCart={numberOfItemsInCart}
              shoppingCartItems={shoppingCartItems}
              shoppingCartDefaultPage={shoppingCartDefaultPage}
            />
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liked-product-page" element={<LikedProductPage />} />
      </Routes>
    </div>
  );
}
