import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";

export default function Home(props) {
  const specialOffersData = props.specialOffersData;
  console.log(specialOffersData);
  return (
    <div className="home">
      <header className="home-header flex px-30 pr-10 ">
        <img className=" header-image" src="./images/productLanding/pic6.jpg" />
        <h1 className="header-title">
          <img className="butterfly-img" src="./images/butterfly.png" />
          Hair Experience like no other <br />
          <p className="text-2xl">
            {" "}
            Wiggies is a place where can Click it! Wig it! Live!
          </p>
          <button className="home-shopNow-btn">
            Shop Now
            <img className="btn-butterfly" src="./images/msn.png" />
          </button>
        </h1>
      </header>
      <main className="home-main-body">
        <section className="special-offer-container">
          <section className="special-offer-header">
            {specialOffersData.map((specialOffer) => {
              return (
                <div
                  key={specialOffer.id}
                  className="special-offer-category-card"
                >
                  <img
                    className="special-offer-card-img-header"
                    src={specialOffer.promoImage}
                    alt={specialOffer.promoName}
                  />
                  <h2 className="special-offer-card-title">
                    {specialOffer.promoName}
                  </h2>
                </div>
              );
            })}
          </section>

          <div className="special-offer">
            <img
              className="special-50-offer-img"
              src="./images/special-offer.png"
            />
            <h2 className="special-offer-title">Special Offer</h2>
            <p className="special-offer-description">
              Get 50% off on your first order
            </p>
            <button className="special-offer-btn">Shop Now</button>
          </div>
          <section className="special-hot-offer">
            <div className="special-offer">
              <img
                className="special-hot-offer-img"
                src="./images/trending-hot.png"
              />
              <h2 className="special-offer-title">Special Offer</h2>
              <p className="special-offer-description">
                Get Trending hot on wigs
              </p>
              <button className="special-offer-btn">Shop Now</button>
            </div>
          </section>
          <img className="special-offer-img" src="./images/w1.png" />
          <img className="special-offer-img" src="./images/w2.png" />
          <img className="special-offer-img" src="./images/w3.png" />
          <img className="special-offer-img" src="./images/w4.png" />
        </section>
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
