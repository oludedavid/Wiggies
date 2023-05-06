import { useState } from "react";
import ProductCategory from "./ProductCategory";
import ProductContent from "./productContent";
import afrowigsData from "../data/afrowigsData";
import categoriesData from "../data/categoriesData";
import featuredData from "../data/featuredData";

export default function Product(props) {
  const categories = categoriesData;
  const featured = featuredData;
  const afrowigs = afrowigsData;

  //we need a way to change the isSelected in the afrowigsData.js and then add the selected afrowig to the cart

  //1. create an array which the default would be afrowigsData
  const [afrowigsState, setAfrowigsState] = useState(afrowigsData);

  //3. create a function to change the isSelected in the afrowigsData.js
  const handleSelectedAfrowig = (afroWig) => {
    //send in the afrowig that was selected to the getSelected afrowig function in the app.js
    props.getSelectedAfrowig(afroWig);
  };

  //4. pass the function as a prop to the afrowigs component
  //4a. pass it to the productContent till it gets to the afrowigs component then pass it to the productCard component
  //4b. provoke the function in the productCard component usin the add to basket button

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
          handleShopNow={handleSelectedCategory}
          afrowigs={afrowigsState}
          handleSelectedAfrowig={handleSelectedAfrowig}
        />
      </main>
    </div>
  );
}
