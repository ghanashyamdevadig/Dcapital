import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from './../Components/Header/Header';
import Banner from './../Components/Banner';
// import Our from "./../Components/Our";
import HowWeAreDifferent from './../Components/HowWeAreDifferent';
import AvailableLocations from './../Components/AvailableLocations';
import OngoingProjects from './../Components/OngoingProjects/index';
import FeaturedCollection from './../Components/FeaturedCollection/index';
import TrendingProjects from './../Components/TrendingProjects/index';
import Testimonials from './../Components/Testimonials/index';
// import RealEstate from "../Components/RealEstate";
import ConnectWithUs from "../Components/ConnectWithUs";
import Footer from "../Components/Footer";
// import NewHowWeAre from "../Components/NewHowWeAre";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div style={{width:"100%" ,height:"100%"}}>
      <Header />
      <Banner />
      {/* <NewHowWeAre/> */}
      {/* <Our background="#fff"/> */}
      <OngoingProjects/>
      <AvailableLocations background="#fff"/>
      <HowWeAreDifferent />
     
      <TrendingProjects background="#E8E8E8"/>
     <FeaturedCollection background="#fff"/>
      <Testimonials background="#E8E8E8" width={1300}/>
      {/* <RealEstate background="#fff"/> */}
      <ConnectWithUs />
      <Footer/>
      </div>
    </>
  );
}
