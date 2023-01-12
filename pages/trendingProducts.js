import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/index"
import style from "../styles/trendingProducts.module.css";
import Country from "../Components/Utils/CountryCode.json";
import Image from "next/image";
// import trendingBanner from "../assets/png/trendingBanner.png";
import emoji from "../assets/png/emoji.png";
import vector from "../assets/png/Vector.png";
import rightMark from "../assets/png/rightMark.png";
import mark from "../assets/png/mark.png";
import homeMark from "../assets/png/homeMark.png";
import Speciality from "../Components/TrendingProducts/Speciality/speciality";
import Location from "../Components/TrendingProducts/Location/Location";
import OngoingProjects from "../Components/OngoingProjects/index"
// import Units from "../Components/TrendingProducts/Units/Units";
import Units from "./units";
import Amenities from "../Components/TrendingProducts/Amenities/Amenities"
import LineRight from "../assets/png/LineRight.png"
import LineLeft from "../assets/png/LineLeft.png"
import Share from "../assets/png/Share.png"
import Like from "../assets/png/Like.png"
import { useRouter } from 'next/router'


export default function trendingProducts({ width, background }) {
  const router = useRouter()
  const initialState = [
    {
      image: "/images/OngoingProject/image1.png",
      title: "Royal Sunrise",
      location:
        "Survey # 192/C AECS Layout C Block, Singasandra, Bangalore - 560068",
      price: "67.35 L - 1.6 Cr",
    },
  ];

  const [ongoingProjectsData, setOngoingProjectsData] =
    React.useState(initialState);



  return (
    <div>
        <div className={style.header}>
      <Header />
      </div>
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
            width: "90%",
          }}
        >
          <div className={style.mainText}>
            {ongoingProjectsData.map((item)=>{
              return(
                <div>
              <span>Home / Trending Products / </span><span style={{color:"black"}}>{item?.title}</span>
              </div>
            )})}
            
          </div>

          <div className={style.partition}>
            <div className={style.rightCntr}>
             <div className={style.shareLike}>
             <Image src={Share} alt="Share" />
             <Image src={Like} alt="Like" />
             </div>
             <div className={style.LeftRight}>
             <div className={style.rightLeft}>
             <Image src={LineLeft} alt="LineLeft" />
             <Image src={LineRight} alt="LineRight" />
             </div>
             </div>
            </div>
            <div className={style.leftCntr}>
              <div className={style.emojiCntr}>
                <Image src={emoji} alt="Emoji" />
                <span style={{ marginLeft: "1em" }}>
                  You have a fine taste. This property is great & nice!
                </span>
              </div>
              <div className={style.form}>
                <div>
                  <h2
                    style={{
                      marginBottom: "1em",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Connect with us
                  </h2>
                </div>
                <div className={style.formFields}>
                  <span className={style.labelText}>Full Name </span>
                  <input
                    className={style.fields}
                    type="text"
                    placeholder="    Eg: Kiran Kumar"
                    //   value={name}
                    //   onChange={nameHandler}
                  />
                  <span className={style.labelText}>Email </span>
                  <input
                    className={style.fields}
                    type="text"
                    placeholder="    Eg: Email Id"
                    //   value={email}
                    //   onChange={emailHandler}
                  />
                  <span className={style.labelText}>Phone Number</span>
                  <div className={style.flex}>
                    <div className={style.select}>
                      <select
                        name="code"
                        className={style.selectCountry}
                        // onChange={countryCodeHandler}
                        // value={countryCode}
                      >
                        {Country.map((code, index) => {
                          return (
                            <option key={index} value={`${code.dial_code}`}>
                              {` ${code.flag}`}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <input
                      type="text"
                      placeholder="    Phone number"
                      //   value={phone}
                      className={style.fieldss}
                      //   onChange={phoneHandler}
                    />
                  </div>
                  <div className={style.terms}>
                    <input type="checkBox" />
                    <span>I agree to</span> <a href="">Terms & Condition</a>
                  </div>
                  <div className={style.button}>
                    <a href="" className={style.connect_btn}>
                      CONNECT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.productDetails}>
            {ongoingProjectsData.map((item, index) => {
              return (
                <div className={style.firstBox}>
                  <div className={style.titlePrice}>
                    <div>
                      <h1>{item?.title}</h1>
                    </div>
                    <div>
                      <h1>{item?.price}</h1>
                    </div>
                  </div>
                  <div className={style.locationVastu}>
                    <div className={style.location}>
                      <Image
                        src={vector}
                        alt="location"
                        style={{ padding: "0.5em" }}
                      />
                      <p>{item?.location}</p>
                    </div>
                    <div className={style.bbmpVastu}>
                      <div className={style.Vastu}>
                        <span>100% Vastu</span>
                        <Image src={rightMark} alt="right Mark" />
                      </div>
                      <div className={style.bbmp}>
                        <span>BBMP</span>
                        <Image src={rightMark} alt="right Mark" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={style.secondBox}>
              <div className={style.items}  onClick={() => router.push('')}>About</div>
              <div className={style.items}  onClick={() => router.push('')}>Units</div> 
              <div className={style.items}>Amenities</div>
              <div className={style.items}>Speciality</div>
              <div className={style.items}>Brochure</div>
              <div className={style.items}>Locality</div>
            </div>

            <div className={style.thirdBox}>
              <div className={style.aboutContent}>
                <Image
                  src={homeMark}
                  alt="right Mark"
                  style={{ padding: "0.8em" }}
                />
                <p>
                  This Project is located at AECS Layout, Singasandra, the most
                  sought after residential area in the city of Bangalore.
                </p>
              </div>
              <div className={style.aboutContent}>
                <Image
                  src={homeMark}
                  alt="right Mark"
                  style={{ padding: "0.8em" }}
                />
                <p>
                  At Sunrise , the structure is designed and planned to have
                  stilt car parking, G+4 levels of dwelling units.
                </p>
              </div>
              <div className={style.aboutContent}>
                <Image
                  src={homeMark}
                  alt="right Mark"
                  style={{ padding: "0.8em" }}
                />
                <p>
                  The design comprises 20 numbers of 2 BHK Homey, Pleasant &
                  Firm homes just for you.
                </p>
              </div>

              <p style={{ paddingLeft: "1em" }}>DEVELOPED BY</p>
              <h3 style={{ paddingLeft: "0.8em" }}>ROYAL SUNRISE</h3>
              <div className={style.bbmpVastu}>
                <div className={style.bbmpApproved}>
                  <Image
                    src={mark}
                    alt="right Mark"
                    style={{ padding: "0.8em" }}
                  />
                  <p>BBMP Approved</p>
                </div>
                <div className={style.Vastudone} style={{ marginLeft: "1em" }}>
                  <Image
                    src={mark}
                    alt="right Mark"
                    style={{ padding: "0.8em" }}
                  />
                  <p>100% Vastu</p>
                </div>
              </div>
            </div>
            {/* <div className={style.units}>
             
                <div>
      <div className={style.featured_collection} style={{ maxWidth: width || 1400 }}>
        <div className={style.card_container}>
          {
            unitsdata.map(item=> {
              return (
                <UnitsCard  title={item.title} subTitle={item.subTitle} image={item.image}/>
              )
            })
          }
          </div>
      </div>
    </div>
            </div> */}
            <Units/>
            {/* <div className={style.amenities}>
             
             <div>
   <div className={style.collection} style={{ maxWidth: width || 1400 }}>
     <div className={style.amenitiContainer}>
       {
         amenitiesdata.map(item=> {
           return (
             <AmenitiesCard  title={item.title} image={item.image}/>
           )
         })
       }
       </div>
   </div>
 </div>
         </div> */}
         <Amenities/>
         <Speciality/>
         <Location/>
         <div className={style.ongoing}>
         <OngoingProjects
         />
         </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

// export function UnitsCard({title, subTitle, image}) {
//     return (
//       <div className={style.featured_card1}>
//       <div className={style.featured_card}>
//         <div className={style.details}>
//         <img src={image} alt={title} className={style.image} />
//         </div>
//         <div className={style.titleSubTitle}>
//           <p className={style.title}>{title}</p>
//           <p className={style.subTitle}>{subTitle}</p>
//           </div>
//        </div>
//       </div>
//     )
//   }

  export function AmenitiesCard({title,  image}) {
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
    )
  }
