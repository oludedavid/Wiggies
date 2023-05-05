import React, { useState } from "react";
import AfroWigs from "../pages/products/AfroWigs";
import BraidedWigs from "./products/BraidedWigs";
import HumanWigs from "./products/HumanWigs";
import ColoredWigs from "./products/ColoredWigs";
import WigAccessories from "./products/WigAccessories";
import LacedWigs from "./products/LacedWigs";
import ProductDefaultPage from "./ProductDefaultPage";

export default function ProductContent(props) {
  const selectedCategory = props.selectedCategory;
  const defaultPage = props.defaultPage;
  return (
    <div className="product-content-container">
      {defaultPage ? (
        <ProductDefaultPage featured={props.featured} />
      ) : (
        <>
          {selectedCategory === "Afro Wig" && <AfroWigs />}
          {selectedCategory === "Braided Wig" && <BraidedWigs />}
          {selectedCategory === "Colored Wig" && <ColoredWigs />}
          {selectedCategory === "Human Wig" && <HumanWigs />}
          {selectedCategory === "Lace Wig" && <LacedWigs />}
          {selectedCategory === "Wig Accessories" && <WigAccessories />}
        </>
      )}
    </div>
  );
}
