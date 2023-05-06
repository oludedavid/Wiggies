export default function CheckoutCard() {
  return (
    <div className="payment-card-container">
      <section className="checkout-container">
        <h3>How will you pay?</h3>
        <section className="checkout-options">
          {/* pay by card */}
          <section className="pay-by-cards">
            <input type="radio" id="card" name="paymentOption" value="card" />
            <label className="card-payment-options" htmlFor="card">
              <img
                className="image-icon"
                src="./images/payout/visa.png"
                alt="Visa Card icon"
              />
              <img
                className="image-icon"
                src="./images/payout/master.png"
                alt="Master Card icon"
              />
              <img
                className="image-icon"
                src="./images/payout/maestro.png"
                alt="Maestro Card icon"
              />
            </label>
          </section>
          {/* pay by paypal */}
          <section className="pay-by-paypal">
            <input
              type="radio"
              id="paypal"
              name="paymentOption"
              value="paypal"
            />
            <label htmlFor="paypal">
              <img
                className="image-icon"
                src="./images/payout/paypal.png"
                alt="PayPal icon"
              />
            </label>
          </section>

          {/* pay by Gpay */}
          <section className="google-pay">
            <input
              type="radio"
              id="google-pay"
              name="paymentOption"
              value="google-pay"
            />
            <label htmlFor="google-pay">
              <img
                className="image-icon"
                src="./images/payout/google-pay.png"
                alt="PayPal icon"
              />
            </label>
          </section>
          {/* pay by Klarna */}
          <section className="klarna">
            <input
              type="radio"
              id="klarna"
              name="paymentOption"
              value="klarna"
            />
            <label htmlFor="klarna" className="klarna-label">
              <img
                className="image-icon"
                src="./images/payout/klarna.png"
                alt="Klarna icon"
              />
            </label>
          </section>
          <p className="klarna-text text-sm">
            Pay in 3 interest-free instalments with Klarna.{" "}
            <a href="#">learn more</a>
          </p>
        </section>
        <section className="checkout-sum-container">
          <section className="checkout-item-sum-container">
            <p>Item(s) total</p>
            <p>£{200.0}</p>
          </section>
          <section className="checkout-delivery-sum-container mt-6">
            <p>
              Delivery <br />
              <span>(to Germany)</span>
            </p>
            <p>£{0.0}</p>
          </section>
        </section>
        <hr />
        <section className="checkout-total-container">
          <p>Total({40} items)</p>
          <p>£{200.0}</p>
        </section>
        <section className="proceed-btn">
          <button className="checkout-btn">Proceed to checkout</button>
        </section>
      </section>
    </div>
  );
}
