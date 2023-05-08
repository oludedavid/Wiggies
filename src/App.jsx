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

  // special gift data
  const specialGiftData = [
    {
      id: 1,
      promoName: "Mother's Day Special",
      promoImage:
        "https://i.etsystatic.com/18068165/r/il/d63291/3504759644/il_1588xN.3504759644_al93.jpg",
      promoDescription: "Get 10% off on all wigs",
    },

    {
      id: 2,
      promoName: "Valentine's Day Special",
      promoImage:
        "https://i.etsystatic.com/22866840/r/il/092849/2901874595/il_1588xN.2901874595_e6dj.jpg",
      promoDescription: "Get 10% off on all wigs",
    },
    {
      id: 3,
      promoName: "Christmas Special",
      promoImage:
        "https://i.etsystatic.com/37542256/r/il/686c12/4811615658/il_1588xN.4811615658_l1jf.jpg",
      promoDescription: "Get 20% off on all wigs",
    },
    {
      id: 4,
      promoName: "Wedding Gift",
      promoImage:
        "https://i.etsystatic.com/18068165/r/il/e87c80/3536343159/il_1588xN.3536343159_m56i.jpg",
      promoDescription: "Get 15% off on all wigs",
    },
    {
      id: 5,
      promoName: "Black Friday Special",
      promoImage:
        "https://i.etsystatic.com/27751508/r/il/254978/4263660916/il_1588xN.4263660916_c7z1.jpg",
      promoDescription: "Get 10% off on all wigs",
    },
    {
      id: 6,
      promoName: "On Sale",
      promoImage:
        "https://i.etsystatic.com/24576767/r/il/200e32/3908751368/il_1588xN.3908751368_366g.jpg",
      promoDescription: "Get 10% off on all wigs",
    },
  ];

  function getSelectedAfrowig(afrowig) {
    setShoppingCartItems((prev) => [...prev, afrowig]);
  }
  const numberOfItemsInCart = shoppingCartItems.length;

  return (
    <div className="main">
      <NavigationMenu numberOfItemsInCart={numberOfItemsInCart} />
      <Routes>
        <Route
          path="/"
          element={<Home specialOffersData={specialGiftData} />}
        />
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
