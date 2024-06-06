import React from "react";
import reviewsData from "../../data/reviewsData";
import useActive from "../../hooks/useActive";
import ProductReviews from "./ProductReviews";

const ProductSummary = (props) => {
  const { brand, title, info, category, type, connectivity } = props;
  const { active, handleActive, activeClass } = useActive("specs");

  return (
    <>
      <section id="product_summary" className="section">
        <div className="container">
          {/*===== Product-Summary-Tabs =====*/}
          <div className="prod_summary_tabs">
            <ul className="tabs">
              <li
                className={`tabs_item ${activeClass("specs")}`}
                onClick={() => handleActive("specs")}
              >
                Tavsifi
              </li>
              {/* <li
                className={`tabs_item ${activeClass("overview")}`}
                onClick={() => handleActive("overview")}
              >
                Umumiy koʻrinish
              </li> */}
              <li
                className={`tabs_item ${activeClass("reviews")}`}
                onClick={() => handleActive("reviews")}
              >
                Sharhlar
              </li>
            </ul>
          </div>

          {/*===== Product-Summary-Details =====*/}
          <div className="prod_summary_details">
            {active === "specs" ? (
              <div className="prod_specs">
                <ul>
                  <li>
                    <span>Brand: </span>
                    <span>{brand}</span>
                  </li>
                  <li>
                    <span>Nomi: </span>
                    <span>{title}</span>
                  </li>
                  <li>
                    <span>bo'lim:</span>
                    <span>{category}</span>
                  </li>
                  <li>
                    <span>turi:</span>
                    <span>{type}</span>
                  </li>
                  <li>
                    <span>Ishlab chiqarilgan:</span>
                    <span>{connectivity}</span>
                  </li>
                  <li>
                    <span>kafolat (1oy):</span>
                    <span>Ha</span>
                  </li>
                </ul>
              </div>
            ) : active === "overview" ? (
              <div className="prod_overview">
                <h3>
                  lorem <span>{title}</span> {info} ipsum dolor sit amet
                </h3>
                <ul>
                  <li>Faol turmush tarziga ega bo‘lgan odamlar uchun</li>
                  <li>
                    Yorqin dizayn markazda e’tiborli bo‘lish imkonini beradi
                  </li>
                  <li>
                    Kopyushon yomg‘ir vaqtida qulaylikni sezish imkonini beradi
                  </li>
                </ul>
                <p>
                  Buy the{" "}
                  <b>
                    {title} {info}
                  </b>{" "}
                  Kostyum insonning individualligini yoki ijtimoiy guruhni
                  ifodalovchi muayyan obrazli badiiy sistema. Pidjak va shim
                  yoki jaket va yubkadan iborat ustki kiyim. Yoqasi qaytarilgan,
                  koʻkrak oldi ochiq, tugmali kalta ustki kiyim; pidjak yoki
                  jaket.
                </p>
              </div>
            ) : (
              <div className="prod_reviews">
                <ul>
                  {reviewsData.map((item) => (
                    <ProductReviews key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSummary;
