import React, {useState} from 'react'
import featuredCollection from "./css/FeaturedCollection.module.css"
import featuredCard from "./css/FeaturedCard.module.css"

export default function FeaturedCollection({background, width}) {
  const initialData = [
    {
      title: "Ready to Move-In",
      propertiesCount: 234,
      background: "#FFB1AB",
      image:"/images/FeaturedCollection/image1.png"
    },
    {
      title: "Independent House",
      propertiesCount: 234,
      background: "#C9F5FF",
      image:"/images/FeaturedCollection/image2.png"
    },
    {
      title: "Budget Friendly",
      propertiesCount: 234,
      background: "#C9F5FF",
      image:"/images/FeaturedCollection/image3.png"
    },
    {
      title: "Luxury",
      propertiesCount: 234,
      background: "#FEDC9C",
      image:"/images/FeaturedCollection/image4.png"
    },
    {
      title: "Budget Friendly",
      propertiesCount: 234,
      background: "#B8C88A",
      image:"/images/FeaturedCollection/image5.png"
    },
    {
      title: "Townships",
      propertiesCount: 234,
      background: "#FDFFAF",
      image:"/images/FeaturedCollection/image6.png"
    },
    
  ]
  const [collectionData, setCollectionData] = useState(initialData)
  return (
    <div style={{ background: background || "#FFF" }}>
      <div className={featuredCollection.featured_collection} style={{ maxWidth: width || 1400 }}>
      <h1 className={featuredCollection.title}>Featured Collection</h1>
        <p className={featuredCollection.tagline}>Handpicked projects for you</p>
        <div className={featuredCollection.card_container}>
          {
            collectionData.map(item=> {
              return (
                <FeaturedCard background={item.background} title={item.title} propertiesCount={item.propertiesCount} image={item.image}/>
              )
            })
          }
          </div>
      </div>
    </div>
  )
}

export function FeaturedCard({background, title, propertiesCount, image}) {
  return (
    <div className={featuredCard.featured_card1}>
    <div className={featuredCard.featured_card} style={{background: background || "#fff"}}>
      <div className={featuredCard.details}>
        <h3 className={featuredCard.title}>{title}</h3>
        <div className={featuredCard.property_count}>{propertiesCount}+ Properties</div>
      </div>
      <img src={image} alt={title} className={featuredCard.image} />
    </div>
    </div>
  )
}