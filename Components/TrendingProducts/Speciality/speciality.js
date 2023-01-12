import React, { useState } from "react";
import style from "../Speciality/speciality.module.css";



export default function speciality(){

const [floringData , setFloringData] = useState([{
    title :"Living/Dining",
    subTitle :"Vitrified Tiles"
},
{
    title :"Master Bedroom",
    subTitle :"Vitrified Tiles"
},
{
    title :"Other Bedroom",
    subTitle :"Vitrified Tiles"
},
{
    title :"Kitchen",
    subTitle :"Vitrified Tiles"
},
{
    title :"Toilets",
    subTitle :"Anti-Skid Ceramic Tiles"
},])


const [fittingData , setFittingData] = useState([{
    title :"Electrical",
    subTitle :"Concealed copper wiring"
},
{
    title :"Toilets",
    subTitle :"Sanitary Fittings of Jaguar /  Kohler or Equivalent"
},
{
    title :"Kitchen",
    subTitle :"Granite platform with stainless steel sink"
},
{
    title :"Doors",
    subTitle :"Teak Wood Frame"
},
{
    title :"Windows",
    subTitle :"UPVC Windows with M.S Grill"
},])

const [wallData , setWallData] = useState([{
    title :"Interior",
    subTitle :"Asian Paint"
},
{
    title :"Exterior",
    subTitle :"Asian Paint"
},
{
    title :"Kitchen",
    subTitle :"Glazed Tiles Dado up to 2 Feet Height Above Platform"
},
{
    title :"Toilets",
    subTitle :"Glazed Tiles Dado up to 7 Feet Height Above Platform"
},])


    return(
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

          {/* <div className={style.partition}> */}
         
          <div className={style.productDetails}>
         
         <div className={style.speciality}>
             <h2 className={style.Heading}>Speciality</h2>
             <div>
   <div className={style.collection} >
    <h3 className={style.sideHeading}>Floring</h3>
     <div className={style.specialityContainer1}>
       {
         floringData.map(item=> {
           return (
             <SpecialityCard  title={item.title} subTitle={item.subTitle} />
           )
         })
       }
       </div>
       <hr className={style.hr}/>
   </div>
   <div className={style.collection} >
    <h3 className={style.sideHeading}>Fitting</h3>
     <div className={style.specialityContainer2}>
       {
         fittingData.map(item=> {
           return (
             <SpecialityCard  title={item.title} subTitle={item.subTitle} />
           )
         })
       }
       </div>
       <hr className={style.hr}/>
   </div>
   <div className={style.collection} >
    <h3 className={style.sideHeading}>Wall</h3>
     <div className={style.specialityContainer3}>
       {
         wallData.map(item=> {
           return (
             <SpecialityCard  title={item.title} subTitle={item.subTitle} />
           )
         })
       }
       </div>
   </div>
 </div>
         </div>
         </div>
          </div>
        </div>
      </div>
        // </div>
    )

}

export function SpecialityCard({title, subTitle}) {
    return (
      <div className={style.featured_card}>
        <div className={style.titleSubTitle}>
          <p className={style.title}>{title}</p>
          <p className={style.subTitle}>{subTitle}</p>
          </div>
       </div>
    )
  }