import { useState } from "react";
import ProductCategory from "./ProductCategory";
import ProductContent from "./productContent";
import categoriesData from "../data/categoriesData";
import featuredData from "../data/featuredData";

export default function Product() {
  const categories = categoriesData;
  const featured = featuredData;

  const [selectedCategory, setSelectedCategory] = useState("");
  //setting a default landing page
  const [defaultPage, setDefaultPage] = useState(true);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
    setDefaultPage(false);
  };

  return (
    <div className="product-container">
      <ul className="product-side-menu">
        <h1 className="text-2xl font-bold ">Explore</h1>
        {categories.map((category) => (
          <ProductCategory
            key={category.id}
            category={category}
            onSelect={handleSelectedCategory}
          />
        ))}
        <li className="helpCenter">
          <img
            className="side-menu-icon"
            src="./images/side-menu-icon/vec.png"
          />
          <p>Help Center</p>
        </li>
      </ul>

      <main className="product-detail-container">
        <ProductContent
          selectedCategory={selectedCategory}
          defaultPage={defaultPage}
          featured={featured}
        />
      </main>
    </div>
  );
}
