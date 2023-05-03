import { useState } from "react";

export default function Product() {
  const [braidedWigDropDown, setBraidedWigDropDown] = useState(false);
  const [humanWigDropDown, setHumanWigDropDown] = useState(false);
  const [laceWigDropDown, setLaceWigDropDown] = useState(false);
  const [coloredWigDropDown, setColoredWigDropDown] = useState(false);
  const [afroWigDropDown, setAfroWigDropDown] = useState(false);
  const [accessoriesDropDown, setAccessoriesDropDown] = useState(false);

  return (
    <div className="product-container">
      <ul className="product-side-menu">
        <h1 className="text-2xl font-bold ">Explore</h1>
        <li className="braided-wig-container">
          <button
            onClick={() => {
              setBraidedWigDropDown(!braidedWigDropDown);
            }}
          >
            <img
              className="side-menu-icon"
              src="./images/side-menu-icon/braided.png"
              alt="braided Logo"
            />
            Braided Wig
          </button>
          {braidedWigDropDown && (
            <ul className="dropdown braided-wig-list">
              <li className="braided-wig-list-item">Box Braid</li>
              <li className="braided-wig-list-item">Corn crows Braid</li>
              <li className="braided-wig-list-item">Micro Braid</li>
              <li className="braided-wig-list-item">Twist Braid</li>
            </ul>
          )}
        </li>

        <li className="human-wig-container">
          <button
            onClick={() => {
              setHumanWigDropDown(!humanWigDropDown);
            }}
          >
            <img
              className="side-menu-icon"
              src="./images/side-menu-icon/hairstyle.png"
              alt="human hair Logo"
            />
            Human Wig
          </button>
          {humanWigDropDown && (
            <ul className="dropdown human-wig-list">
              <li className="human-wig-list-item">Curly Human Hair</li>
              <li className="human-wig-list-item">Full Lace Human Hair</li>
              <li className="human-wig-list-item">Long Human Hair</li>
              <li className="human-wig-list-item">Bone Straight</li>
              <li className="human-wig-list-item">Wavy Human Hair</li>
            </ul>
          )}
        </li>

        <li className="lace-wig-container">
          <button
            onClick={() => {
              setLaceWigDropDown(!laceWigDropDown);
            }}
          >
            <img
              className="side-menu-icon"
              src="./images/side-menu-icon/hair-dye.png"
              alt="braided Logo"
            />
            Lace Wig
          </button>
          {laceWigDropDown && (
            <ul className="dropdown lace-wig-list">
              <li className="lace-wig-list-item">Colored Lace Wig</li>
              <li className="lace-wig-list-item">Transparent Lace wig</li>
              <li className="lace-wig-list-item">Full Lace Wig</li>
              <li className="lace-wig-list-item">Lace Front Wig</li>
            </ul>
          )}
        </li>

        <li className="colored-wig-container">
          <button
            onClick={() => {
              setColoredWigDropDown(!coloredWigDropDown);
            }}
          >
            <img
              className="side-menu-icon"
              src="./images/side-menu-icon/hair-color.png"
              alt="braided Logo"
            />
            Colored Wig
          </button>
          {coloredWigDropDown && (
            <ul className="dropdown colored-wig-list">
              <li className="colored-wig-list-item">Blonde Colored Wig</li>
              <li className="colored-wig-list-item">Brunette Colored Wig</li>
              <li className="colored-wig-list-item">Red Colored Wig</li>
            </ul>
          )}
        </li>
        <li className="afro-wig-container">
          <button
            onClick={() => {
              setAfroWigDropDown(!afroWigDropDown);
            }}
          >
            <img
              className="side-menu-icon"
              src="./images/side-menu-icon/afro.png"
              alt="afro Logo"
            />
            Afro Wig
          </button>
          {afroWigDropDown && (
            <ul className="dropdown afro-wig-list">
              <li className="afro-wig-list-item">Afro Curly</li>
              <li className="afro-wig-list-item">Afro Puff</li>
              <li className="afro-wig-list-item">Kinky Afro</li>
              <li className="afro-wig-list-item">Lace Afro</li>
              <li className="afro-wig-list-item">Long Afro</li>
              <li className="afro-wig-list-item">Short Afro</li>
            </ul>
          )}
        </li>

        <li className="wig-accessories-container">
          <button
            onClick={() => {
              setAccessoriesDropDown(!accessoriesDropDown);
            }}
          >
            <img
              className="side-menu-icon"
              src="./images/side-menu-icon/hair-extension.png"
              alt="extension Logo"
            />
            Wig Accessories
          </button>
          {accessoriesDropDown && (
            <ul className="dropdown wig-accessories-list">
              <li className="wig-accessories-list-item">
                Wig Brushes and Combs
              </li>
              <li className="wig-accessories-list-item">Wig Caps and Liners</li>
              <li className="wig-accessories-list-item">Wig Glue and Tapes</li>
              <li className="wig-accessories-list-item">
                Wig Stands and Mannequins
              </li>
              <li className="wig-accessories-list-item">
                Wig Shampoo and Conditioners
              </li>
              <li className="wig-accessories-list-item">Wig Clips and Pins</li>
            </ul>
          )}
        </li>

        <li className="helpCenter">
          <img
            className="side-menu-icon"
            src="./images/side-menu-icon/vec.png"
          />
          <p>Help Center</p>
        </li>
      </ul>

      <main className="product-detail-container">
        <h1>I am the product</h1>
      </main>
    </div>
  );
}
