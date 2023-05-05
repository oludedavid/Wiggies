import afrowigsData from "../../data/afrowigsData";
import ProductCard from "../ProductCard";
import { v4 as uuidv4 } from "uuid";
export default function AfroWigs() {
  const afrowigs = afrowigsData;
  return (
    <div className="afroWig-container text-ellipsis">
      <h1 className="text-center text-6xl">Afro Wigs</h1>
      {afrowigs.map((afrowig) => (
        <div key={afrowig.subcategory}>
          <div className="afro-product-card">
            {afrowig.items.map((item) => (
              <ProductCard
                key={uuidv4()}
                name={item.name}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                rating={item.rating}
                availability={item.availability}
                description={item.description}
                vendorName={item.vendorName}
                reviews={item.reviews}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
