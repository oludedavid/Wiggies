import React from "react";
import ShoppingCartItemCard from "./ShoppingCartItemCard";
import CheckoutCard from "./CheckoutCard";
import { v4 as uuidv4 } from "uuid";

export default function ShoppingCart({
  shoppingCartItems,
  numberOfItemsInCart,
}) {
  return (
    <div className="shopping-cart-container">
      <header className="shopping-cart-header">
        <h1 className="text-2xl font-bold">{`You have ${numberOfItemsInCart} ${
          numberOfItemsInCart === 0 || 1 ? "item" : "items"
        } in your basket`}</h1>
        <p className="flex shoppingCart-assurance">
          <img className="icons" src="./images/shoppingCart/trust.png" />
          Buy confidently with Wiggies's Purchase Protection programme for
          buyers, get a full refund in the rare case your item doesn't arrive,
          arrives damaged, or isn't as described.
        </p>
      </header>
      <main className="shopping-cart-content-container">
        <section className="shopping-cart-items-container">
          {shoppingCartItems.map((item) => {
            return (
              <ul key={uuidv4()}>
                <li>
                  <ShoppingCartItemCard item={item} />
                </li>
              </ul>
            );
          })}
        </section>
        <section className="shopping-cart-payment-container">
          <CheckoutCard />
        </section>
      </main>
    </div>
  );
}
