export default function ShoppingCartItemCard({ item }) {
  return (
    <div className="shopping-cart-card-container">
      <header className="shopping-card-header">
        <h3 className="vendor-name text-black font-bold">{item.vendorName}</h3>
        <button className="contact-shop">Contact</button>
      </header>
      <main className="shopping-card-content">
        <div className="shopping-card-item-descriptions-container">
          <div className="item-image-container">
            <img className="card-image" src={item.image} alt={item.name} />
          </div>
          <div className="item-details">
            <h4 className="item-name font-semibold">{item.name}</h4>
            <p className="item-description text-sm font-light">
              {item.description}
            </p>
            <p className="item-length text-sm">Length : 14 inches</p>
            <div className="edit-remove-btn-container">
              <button className="edit-item-button">Edit</button>
              <button className="remove-item-button">Remove</button>
            </div>
          </div>
          <div className="item-price-container">
            <p className="item-price">${item.price}</p>
            <p className="item-availability text-red-400">
              Only {item.quantity} available!
            </p>
          </div>
        </div>
        <div className="shopping-card--footer">
          <p className="text-sm font-medium mt-1">
            Delivery by 11 May-02 Jun, 2023, <br /> Fee: $600
          </p>
          <p className="text-sm font-black font">
            Dispatches from United States
          </p>
        </div>
      </main>
    </div>
  );
}
