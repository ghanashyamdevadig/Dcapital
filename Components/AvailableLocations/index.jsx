import React, { useState } from "react";
import available_location from "./css/AvailableLocations.module.css";
import locationCard from "./css/LocationCard.module.css";
import Carousel from "react-elastic-carousel";
import SectionHeading from "./../SectionHeading/index";

export default function AvailableLocations({ width, background }) {
  const initialData = [
    {
      location: "Bangalore",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image1.png",
      btnUrl: "/",
    },
    {
      location: "Mysore",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image2.png",
      btnUrl: "/",
    },
    {
      location: "Mangaluru",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image3.png",
      btnUrl: "/",
    },

    {
      location: "Bangalore",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image1.png",
      btnUrl: "/",
    },
    {
      location: "Mysore",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image2.png",
      btnUrl: "/",
    },
    {
      location: "Mangaluru",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image3.png",
      btnUrl: "/",
    },

    {
      location: "Bangalore",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image1.png",
      btnUrl: "/",
    },
    {
      location: "Mysore",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image2.png",
      btnUrl: "/",
    },
    {
      location: "Mangaluru",
      propertiesCount: 6,
      image: "/images/AvailableLocations/image3.png",
      btnUrl: "/",
    },
  ];
  const [availableLocations, setAvailableLocations] = useState(initialData);
  return (
    <div style={{ background: background || "#E1E1E1" }}>
      <div
        className={available_location.available_location}
        style={{ maxWidth: width || 1400 }}
      >
        <SectionHeading
          title="We are Available at"
          tagline="Handpicked projects for you"
        />
        <div className={available_location.slider}>
          {/* use breakPoint for responsiveness */}
          <Carousel
            itemsToShow={3}
            enableAutoPlay
            autoPlaySpeed={3000}
            // itemPadding={[0, 19, 0, 19]}
            pagination={false}
          >
            {availableLocations.map((item) => {
              return (
                <LocationCard
                  location={item.location}
                  propertiesCount={item.propertiesCount}
                  image={item.image}
                  btnUrl={item.btnUrl}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export function LocationCard({ location, propertiesCount, image, btnUrl }) {
  return (
    <div className={locationCard.location_card}>
      <h2 className={locationCard.title}>{location}</h2>
      <div className={locationCard.availablity_status}>
        {propertiesCount}+ Properties
      </div>
      <div className={locationCard.city_details_container}>
        <a href={btnUrl} className={locationCard.explore_city_btn}>
          Explore in this city
          <img src="/images/AvailableLocations/icons/right-arrow.png" />
        </a>
        <img className={locationCard.city_image} src={image} alt={location} />
      </div>
    </div>
  );
}
