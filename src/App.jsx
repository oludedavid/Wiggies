import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationMenu from "./pages/NavigationMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="main">
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
