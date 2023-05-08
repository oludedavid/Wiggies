import React from "react";

export default function About() {
  return (
    <div className="about-container page-container">
      <h1 className="text-3xl font-bold mb-8">About Wiggies</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="./images/productLanding/pic1.jpg"
            alt="About Wiggies"
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="text-xl mb-4">
            Wiggies is a marketplace for wig sellers and buyers. Our platform is
            designed to provide an easy and secure way for individuals and
            businesses to buy and sell wigs online. Whether you're looking to
            buy a wig for a special occasion or you're a wig seller looking to
            expand your business, Wiggies has everything you need to succeed in
            the wig industry.
          </p>
          <p className="text-xl mb-4">
            Our mission is to create a platform that connects wig sellers and
            buyers from all over the world. We aim to make the process of buying
            and selling wigs as simple and straightforward as possible while
            providing excellent customer service to everyone who uses our
            platform.
          </p>
          <p className="text-xl mb-4">
            At Wiggies, we believe that everyone should have access to
            high-quality wigs at affordable prices. That's why we work hard to
            ensure that our platform is accessible to everyone and that our fees
            are competitive.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-xl">
          Our team is made up of experienced professionals who are passionate
          about the wig industry. We work hard every day to improve our platform
          and provide the best possible experience to our users. Whether you're
          a buyer or a seller, our team is here to help you succeed.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl">
          If you have any questions or feedback about our platform, please don't
          hesitate to contact us. You can reach us by email or phone, and we'll
          get back to you as soon as possible.
        </p>
        <ul className="list-disc list-inside text-xl mt-4">
          <li>Email: info@wiggies.com</li>
          <li>Phone: 1-800-555-5555</li>
        </ul>
      </div>
    </div>
  );
}
