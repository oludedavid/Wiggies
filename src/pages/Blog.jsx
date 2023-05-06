import React from "react";

export default function Blog() {
  return (
    <div className="blog-container page-container">
      <h1 className="blog-title">5 Tips for Finding the Perfect Wig</h1>
      <p className="blog-author">Written by: Jane Doe</p>
      <img
        src="./images/blog-post-1.jpg"
        alt="Blog Post"
        className="blog-image"
      />
      <div className="blog-content">
        <p>
          Wigs are a great way to change up your look or to enhance your natural
          hair. But with so many options available, it can be overwhelming to
          choose the perfect wig for you. Here are 5 tips to help you find the
          wig that will make you look and feel your best:
        </p>
        <ol>
          <li>
            Consider the shape of your face. Different wig styles can flatter
            different face shapes. For example, if you have a round face, a wig
            with layers and volume on top can help elongate your face.
          </li>
          <li>
            Think about your lifestyle. If you're very active or don't have a
            lot of time for styling, a low-maintenance wig may be the best
            option for you. Synthetic wigs are a great choice for busy people
            because they require less upkeep.
          </li>
          <li>
            Choose the right color. The right color can make a huge difference
            in how natural your wig looks. If you're unsure which color to
            choose, consider going with a shade close to your natural hair color
            or consulting with a stylist.
          </li>
          <li>
            Take your skin tone into account. Just like with hair color, certain
            wig colors can look better on certain skin tones. If you have
            warm-toned skin, a wig with warm colors like golden blondes or
            coppery browns can look great on you.
          </li>
          <li>
            Invest in quality. A high-quality wig may cost more upfront, but it
            can save you money in the long run by lasting longer and looking
            more natural. Look for wigs made with real human hair or
            high-quality synthetic fibers.
          </li>
        </ol>
        <p>
          By following these tips, you'll be on your way to finding the perfect
          wig for you. Remember to have fun with it and experiment with
          different styles and colors until you find the one that makes you feel
          confident and beautiful.
        </p>
      </div>
      <div className="blog-tags">
        <span className="tag">Wigs</span>
        <span className="tag">Hair</span>
        <span className="tag">Beauty</span>
      </div>
    </div>
  );
}
