import React from "react";
import sectionHeading from "./css/SectionHeading.module.css";

export default function SectionHeading({title, tagline, color}) {
  return (
    <>
      <h1 className={sectionHeading.title} style={{color: color}}>{title}</h1>
      <p className={sectionHeading.tagline} style={{color: color}}>{tagline}</p>
    </>
  );
}
