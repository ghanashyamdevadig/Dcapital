import React from "react";
import testimonials from "./css/Testimonials.module.css";
import testimonialCard from "./css/TestimonialCard.module.css";
import SectionHeading from "./../SectionHeading/index";
import Carousel from "react-elastic-carousel";

export default function Testimonials({ background, width }) {
  return (
    <div style={{ background: background || "#FFF", paddingTop:83, paddingBottom: 97 }}>
      <div
        className={testimonials.testimonials}
        style={{
          maxWidth: width || 1400,
          background: "url('/images/Testimonials/testimonials_bg.png')",
        }}
      >
        <SectionHeading
          title="Testimonials"
          tagline="Handpicked projects for you"
          color="#fff"
        />
        <Carousel
            itemsToShow={3}
            enableAutoPlay
            autoPlaySpeed={3000}
            itemPadding={[0, 19, 0, 19]}
            showArrows={false}
          >
        <TestimonialCard
          thumbnail="/images/Testimonials/image1.png"
          video="video-link.mp3"
          clientName="Sampath Kumar H R"
          clientImage="/images/Testimonials/client1.png"
          clientProfession="CEO of Value Point Systems"
          clientSays="C-Zentrix has great products. We have together delivered quite a few projects with C-Zentrix. The entire experience of working with Team."
        />
        <TestimonialCard
          thumbnail="/images/Testimonials/image1.png"
          video="video-link.mp3"
          clientName="Sampath Kumar H R"
          clientImage="/images/Testimonials/client1.png"
          clientProfession="CEO of Value Point Systems"
          clientSays="C-Zentrix has great products. We have together delivered quite a few projects with C-Zentrix. The entire experience of working with Team."
        />
        <TestimonialCard
          thumbnail="/images/Testimonials/image1.png"
          video="video-link.mp3"
          clientName="Sampath Kumar H R"
          clientImage="/images/Testimonials/client1.png"
          clientProfession="CEO of Value Point Systems"
          clientSays="C-Zentrix has great products. We have together delivered quite a few projects with C-Zentrix. The entire experience of working with Team."
        />
        <TestimonialCard
          thumbnail="/images/Testimonials/image1.png"
          video="video-link.mp3"
          clientName="Sampath Kumar H R"
          clientImage="/images/Testimonials/client1.png"
          clientProfession="CEO of Value Point Systems"
          clientSays="C-Zentrix has great products. We have together delivered quite a few projects with C-Zentrix. The entire experience of working with Team."
        />
          </Carousel>
      </div>
    </div>
  );
}

export function TestimonialCard({
  thumbnail,
  video,
  clientName,
  clientImage,
  clientProfession,
  clientSays,
}) {
  return <div className={testimonialCard.card_container}>
    <div className={testimonialCard.video_conatiner}>
      <img src={thumbnail} alt="" className={testimonialCard.thumbnail} />
      <div className={testimonialCard.circle_big}></div>
      <div className={testimonialCard.circle_meadium}></div>
      <div className={testimonialCard.circle_small}></div>
      <button className={testimonialCard.play_pause_btn}>
        <img src="/images/Testimonials/play_icon.png" alt="" />
      </button>
    </div>
    <div className={testimonialCard.client_quote}>
      <img src="/images/Testimonials/quote_icon.png" alt="" className={testimonialCard.quote_icon} />
      <p className={testimonialCard.phase}>{clientSays}</p>
    </div>
    <div className={testimonialCard.horizontal_devider}></div>
    <div className={testimonialCard.client_details}>
      <h3 className={testimonialCard.client_name}>{clientName}</h3>
      <div className={testimonialCard.client_profession}>{clientProfession}</div>
    </div>
    <img src={clientImage} alt="" className={testimonialCard.client_image} />
  </div>;
}
