export default function ShoppingCartItemCard({ item }) {
  return (
    <div className="shopping-cart-item-card">
      <header className="shopping-card-header">
        <h3 className="vendor-name">{item.VendorName}</h3>
        <button className="contact-shop">Contact</button>
      </header>
      <main>
        <div className="item-image-container">
          <img className="item-image" src={item.image} alt={item.name} />
        </div>
        <div className="item-details">
          <h4 className="item-name">{item.name}</h4>
          <p className="item-description">{item.description}</p>
          <p className="item-length">Length : 14 inches</p>
          <button className="edit-item-button">Edit</button>
        </div>
        <div className="item-price">
          <p className="item-price">{item.price}</p>
          <p>Only {item.quantity} available! </p>
        </div>
        <div className="remove-button-container">
          <button className="remove-item-button">Remove</button>
        </div>
        <div className="delivery-date">
          <p>Delivery by 11 May-02 Jun, 2023</p>
          <p className="delivery-fee"> $600.00 </p>
          <p>Dispatches from United States</p>
        </div>
      </main>
    </div>
  );
}
