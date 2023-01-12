import React, { useState } from "react";
import style from "../styles/units.module.css";

export default function Units() {
  const [unitsdata, setUnitsData] = useState([
    {
      image: "./images/TrendingProducts/size.png",
      title: "Sizes",
      subTitle: "1156.00 sq.ft - 1380.00 sq.ft.",
    },
    {
      image: "./images/TrendingProducts/projectSize.png",
      title: "Project Size",
      subTitle: "1 Building - 20 Units",
    },
    {
      image: "./images/TrendingProducts/avgPrice.png",
      title: "Avg. Price",
      subTitle: "₹4.15 K/sq.ft",
    },
    {
      image: "./images/TrendingProducts/Possesion.png",
      title: "Posession Starts",
      subTitle: "Dec, 2022",
    },
    {
      image: "./images/TrendingProducts/configuration.png",
      title: "Configuration",
      subTitle: "2 BHK Apartment",
    },
    {
      image: "./images/TrendingProducts/rera.png",
      title: "Rera Id",
      subTitle: "RERA ID Not Available",
    },
  ]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#E8E8E8",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div className={style.productDetails}>
            <div className={style.units}>
              <div>
                <div className={style.featured_collection}>
                  <div className={style.card_container}>
                    {unitsdata.map((item) => {
                      return (
                        <UnitsCard
                          title={item.title}
                          subTitle={item.subTitle}
                          image={item.image}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UnitsCard({ title, subTitle, image }) {
  return (
    <div className={style.featured_card1}>
      <div className={style.featured_card}>
        <div className={style.details}>
          <img src={image} alt={title} className={style.image} />
        </div>
        <div className={style.titleSubTitle}>
          <p className={style.title}>{title}</p>
          <p className={style.subTitle}>{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
