import React from "react";
import style from "./header.module.css";
import logo from "../../assets/png/logo.png"
import jobs from "../../assets/svg/jobs.svg"
import whishlist from "../../assets/svg/whishlistwithbadge.svg"
import loginlogo from "../../assets/svg/loginlogo.svg"
import hamberger from "../../assets/svg/hamburger.svg"
import Image from "next/image"; 

export default function Header() {
  return (
    <div>
    <div className={style.maindiv}>
      <div className={style.logo}>
        <Image src={logo} alt="" className={style.logoWidth}/>
      </div>
      <div className={style.menulink}>
        <ul>
          <li className={style.listItem}>
            <a className={style.anchortag} href="/home">HOME</a>
          </li>
          <li className={style.listItem}>
            <a className={style.anchortag} href="#">ABOUT</a>
          </li>
          <li className={style.listItem}> 
            <a className={style.anchortag} href="#">NEWS</a>
          </li>
          <li className={style.listItem}>
            <a className={style.anchortag} href="#">AGENT</a>
          </li>
          <li className={style.listItem}>
            <a className={style.anchortag} href="#">INVEST</a>
          </li>
          <li className={style.listItem}>
            <a className={style.anchortag} href="#">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className={style.loginbox}>
        <div className={style.round}>
        <Image src={jobs} alt="" className={style.jobs}/>
        </div>
        <div className={style.whish}>
        <Image src={whishlist} alt="" className={style.whishlist}/>
        </div>
        <div className={style.round}>
        <Image src={loginlogo} alt="" className={style.loginlogo}/>
        </div>
      </div>
      <div className={style.loginText}>
        <p >LOGIN</p>
      </div>
      <div  className={style.hamberger}>
      <Image src={hamberger} className={style.hambergerIcon}/>
      </div>
    </div>
    </div>
  );
}
