import React from "react";
import ongoingProjects from "./css/OngoingProjects.module.css";
import projectCard from "./css/ProjectCard.module.css";
import Carousel from "react-elastic-carousel";
import SectionHeading from './../SectionHeading/index';



export default function OngoingProjects({ width, background }) {

 
  const initialState = [
    {
      image: "/images/OngoingProject/image1.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
    {
      image: "/images/OngoingProject/image2.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
    {
      image: "/images/OngoingProject/image3.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
    {
      image: "/images/OngoingProject/image4.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
    {
      image: "/images/OngoingProject/image1.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
    {
      image: "/images/OngoingProject/image2.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
    {
      image: "/images/OngoingProject/image3.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
    {
      image: "/images/OngoingProject/image4.png",
      title: "Marathon Millanium",
      location: "Whitefield, Bangalore",
      price: { from: "67.35 L", to: "1.6 Cr" },
    },
  ];
  const [ongoingProjectsData, setOngoingProjectsData] =
    React.useState(initialState);


  return (
    <div style={{ background: background || "#E1E1E1" }}>
      <div className={ongoingProjects.ongoing_projects} style={{ maxWidth: width || 1400 }}>
      <SectionHeading title="Ongoing Projects" tagline="Based on preferences of users like you"/>
        <div className={ongoingProjects.slider}>
          {/* use breakPoint for responsiveness */}
          <Carousel
            itemsToShow={4}
            enableAutoPlay
            autoPlaySpeed={3000}
            itemPadding={[0, 19, 0, 19]}
            pagination={false}
            className={ongoingProjects.carousel}
          >
            {ongoingProjectsData.map((project, index) => (
              <ProjectCard
                image={project.image}
                title={project.title}
                location={project.location}
                price={project.price}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ image, title, location, price }) {
  return (
    <div className={projectCard.project_card}>
      <div className={projectCard.project_card_image}>
        <div className={projectCard.tag}>
          <img src="/images/OngoingProject/icons/rera.png" alt="" />
        </div>
        <div className={projectCard.like}>
          <img src="/images/OngoingProject/icons/heart-fill.png" alt="" />
        </div>
        <img src={image} />
      </div>
      <div className={projectCard.content}>
        <h2 className={projectCard.title}>{title}</h2>
        <div className={projectCard.location}>{location}</div>
        <div className={projectCard.rooms_detail}>
          <div className={projectCard.rooms}>
            <span>Bedroom</span>
            <div>
              <img src="/images/OngoingProject/icons/bed.png" />
              <p>2 room</p>
            </div>
          </div>
          <div className={projectCard.vertical_devider}></div>
          <div className={projectCard.rooms}>
            <span>Bedroom</span>
            <div>
              <img src="/images/OngoingProject/icons/bath-tub.png" />
              <p>2 room</p>
            </div>
          </div>
        </div>
        <div className={projectCard.price}>
          <div className={projectCard.rupee_symbol}>₹</div>
          <div className={projectCard.price_from}>
            {price ? price.from : 0}
          </div>
          <div className={projectCard.horizontal_devider}> - </div>
          <div className={projectCard.price_to}>{price ? price.to : 0}</div>
        </div>
        <a href="/trendingProducts" className={projectCard.contact_btn} >
          Contact
        </a>
      </div>
    </div>
  );
}
