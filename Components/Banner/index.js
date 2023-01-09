import React from "react";
import Image from "next/image";
import style from "./homePageBanner.module.css";

function HomePageBanner() {
  let tags = [
    { text: "Find it.  ", color: "#007FDB" },
    { text: "Tour it.  ", color: "#FF334B" },
    { text: "Own it.  ", color: "#2EA32C" },
  ];
  return (
    <div className={style.banner}>
      <div className={style.bannerTextContr}>
        <div>
          <h3 className={style.bannnerMainText}>
            Discover Properties in India
          </h3>
          <p className={style.bannerTextsmall}>
            We help you to find your new home
          </p>
          <div className={style.tagsContr}>
            {tags.map((item, index) => {
              return (
                <p
                  style={{
                    color: item.color,
                    fontSize: "2em",
                    // marginLeft: "0.2em",
                  }}
                >
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
