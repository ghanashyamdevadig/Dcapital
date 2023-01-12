import React, { useState } from "react";
import style from "../Location/location.module.css";

export default function Location() {
  const [locationData, setLocationData] = useState([
    {
      location: "Basapur Road metro station",
      image: "./images/TrendingProducts/locationRound.png",
      km: "3KM",
    },
    {
      location: "Singasandra metro station",
      image: "./images/TrendingProducts/locationRound.png",
      km: "4KM",
    },
    {
      location: "Electronic city",
      image: "./images/TrendingProducts/locationRound.png",
      km: "6KM",
    },
    {
      location: "Koramangal",
      image: "./images/TrendingProducts/locationRound.png",
      km: "7KM",
    },
    {
      location: "J P Nagar",
      image: "./images/TrendingProducts/locationRound.png",
      km: "8KM",
    },
    {
      location: "Jayanagar",
      image: "./images/TrendingProducts/locationRound.png",
      km: "9KM",
    },
    {
      location: "Sarjapur",
      image: "./images/TrendingProducts/locationRound.png",
      km: "10KM",
    },
    {
      location: "M G Road",
      image: "./images/TrendingProducts/locationRound.png",
      km: "15KM",
    },
    {
      location: "Indira Nagar",
      image: "./images/TrendingProducts/locationRound.png",
      km: "15KM",
    },
    {
      location: "Airport",
      image: "./images/TrendingProducts/locationRound.png",
      km: "48KM",
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
            <div className={style.locatities}>
              <div>
                <div className={style.featured_collection}>
                  <div className={style.card_container}>
                    {locationData.map((item) => {
                      return (
                        <LocationCard
                          location={item.location}
                          km={item.km}
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

export function LocationCard({ location, km, image }) {
  return (
    <div className={style.Card}>
        <div className={style.longCard}>
      <div className={style.locationCntr}>
        <div className={style.location}>
          <p className={style.title}>{location}</p>
        </div>
        <div className={style.image}>
          <img src={image} />
        </div>
        </div>
        </div>
        <div className={style.smallCard}>
        <div className={style.km}>
          <p>{km}</p>
        
        </div>
      </div>
    </div>
  );
}
