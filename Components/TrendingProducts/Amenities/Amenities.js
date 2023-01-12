import React, { useState } from "react";
import style from "../Amenities/amenities.module.css";

export default function Units() {
  const [amenitiesdata, setAmenitiesData] = useState([
    {
      image: "./images/TrendingProducts/Frame 61836.png",
      title: "24/7 Security",
    },
    {
      image: "./images/TrendingProducts/Frame 61836 (1).png",
      title: "CCTV",
    },
    {
      image: "./images/TrendingProducts/Frame 61836 (2).png",
      title: "Car Parking",
    },
    {
      image: "./images/TrendingProducts/Frame 61836 (3).png",
      title: "Power Backup",
    },
    {
      image: "./images/TrendingProducts/Frame 61836 (4).png",
      title: "Elevator / Lift",
    },
    {
      image: "./images/TrendingProducts/Frame 61836 (5).png",
      title: "Rain Water Harwesting",
    },
    {
      image: "./images/TrendingProducts/Frame 61836 (6).png",
      title: "24/7 Water Speciality",
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
            <div className={style.amenities}>
              <div>
                <div
                  className={style.collection}
                >
                  <div className={style.amenitiContainer}>
                    {amenitiesdata.map((item) => {
                      return (
                        <AmenitiesCard title={item.title} image={item.image} />
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

export function AmenitiesCard({ title, image }) {
  return (
    <div>
      <div className={style.featuredCard}>
        <div className={style.amenitiesDetails}>
          <img src={image} alt={title} className={style.image} />
        </div>
        <div>
          <p className={style.amenitiestitle}>{title}</p>
        </div>
      </div>
    </div>
  );
}
