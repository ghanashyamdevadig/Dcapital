import React from "react";
import Image from "next/image";
import style from "./footer.module.css";
import logo from "../../assets/svg/DC_Logo-HR_white (4) 1.svg";
import twitter from "../../assets/svg/Twitter.svg";
import FB from "../../assets/svg/FB.svg";
import Insta from "../../assets/svg/Insta.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Arrow from "../../assets/svg/arrowfooter.svg";
import phone from "../../assets/svg/VectorPhone.svg";
import emailbox from "../../assets/svg/emailBox.svg";
import location from "../../assets/svg/locationFooter.svg";
import playstore from "../../assets/png/playstore.png";
import apple from "../../assets/png/apple.png";
// import twitter2 from "../../assets/png/twitter.png";
import FB2 from "../../assets/png/facebook.png";
import Insta2 from "../../assets/png/insta.png";
import Youtube2 from "../../assets/png/in.png";


function footer() {
  return (
    <div className={style.footerMainDiv}>
      <div className={style.footerDiv}>
        <div className={style.firstDiv}>
          <div className={style.logo}>
            <Image src={logo} alt="" />
          </div>

          <div className={style.discription}>
            <p>
              Delight Capital Solutions is a company with rich experience in
              real estate{" "}
              <p>
                {" "}
                advisory that believes each real estate experience should be a
                simple and{" "}
              </p>{" "}
              <p>
                successful execution from a Dream to Reality. Our team of Real
                Estate advisors{" "}
              </p>{" "}
              <p>
                is driven by the fundamental values of customer satisfaction,
                credibility and{" "}
              </p>
              <p>
                professionalism 360 Realtors has some of the best professionals
                in real estate{" "}
              </p>{" "}
              <p>
                industry who specialize in finding property just as per your
                requirement.
              </p>
            </p>
          </div>

          <div className={style.socialMedia}>
            <Image src={twitter} alt="" style={{margin:"0.3em"}}/>
            <Image src={FB} alt="" style={{margin:"0.3em"}}/>
            <Image src={Insta} alt="" style={{margin:"0.3em"}}/>
            <Image src={Youtube} alt="" style={{margin:"0.3em"}}/>
          </div>
        </div>

        <div className={style.secondDiv}>
          <div className={style.quickLinks}>
            <h4>QUICK LINKS</h4>
          </div>
          <div >
            <div className={style.links}>
              <Image src={Arrow} alt="" className={style.arrowButton} style={{marginRight:"1em"}}/>
              <a href="">HOME</a>
            </div>
            <div className={style.links}>
              <Image src={Arrow} alt="" className={style.arrowButton} style={{marginRight:"1em"}}/>
              <a href="">ABOUT US</a>
            </div>
            <div className={style.links}>
              <Image src={Arrow} alt="" className={style.arrowButton} style={{marginRight:"1em"}}/>
              <a href="">SERVICES</a>
            </div>
            <div className={style.links}>
              <Image src={Arrow} alt="" className={style.arrowButton} style={{marginRight:"1em"}}/>
              <a href="">CAREER</a>
            </div>
            <div className={style.links}>
              <Image src={Arrow} alt="" className={style.arrowButton} style={{marginRight:"1em"}}/>
              <a href="">BLOGS</a>
            </div>
            <div className={style.links}>
              <Image src={Arrow} alt="" className={style.arrowButton}  style={{marginRight:"1em"}}/>
              <a href="">CONTACT US</a>
            </div>
          </div>
        </div>

        <div className={style.thirdDiv}>
          <div className={style.contactUs}>
            <h4>CONTACT US</h4>
          </div>
          <div >
            <div className={style.link}>
              <Image src={phone} alt=""  style={{marginRight:"1em"}}/>
              <p>90354 79766, 90354 79767</p>
            </div>
            <div className={style.link}>
              <Image src={emailbox} alt=""  style={{marginRight:"1em"}}/>
              <p>sales@delightcapitals.com, info@delightcapitals.com</p>
            </div>
            <div className={style.link}>
              <Image src={location} alt=""  style={{marginRight:"1em"}}/>
              <p>Basaveshwara Nagar, Bangalore-560079</p>
            </div>
          </div>
          <div  className={style.app}>
            <h4>EXPERIENCE DCS APP ON MOBILE</h4>
            <div className={style.apps}>
            <div>
              {" "}
              <Image src={playstore} alt="" style={{marginRight:"1em"}}/>
            </div>
            <div>
              {" "}
              <Image src={apple} alt="" />
            </div>
            </div>
          </div>
        </div>
        
      </div>
 <div className={style.footerDiv1}>
        <div className={style.firstDiv1}>
          <div className={style.logo1}>
            <Image src={logo} alt="" />
          </div>

         
        </div>

        <div className={style.secondDiv1}>
          <div className={style.quickLinks1}>
            <h5>QUICK LINKS</h5>
          </div>
          <div >
            <div className={style.links1}>
             
              <a href="">HOME</a>
            </div>
            <div className={style.links1}>
            
              <a href="">ABOUT US</a>
            </div>
            <div className={style.links1}>
            
              <a href="">SERVICES</a>
            </div>
            <div className={style.links1}>
        
              <a href="">CAREER</a>
            </div>
            <div className={style.links1}>
            
              <a href="">BLOGS</a>
            </div>
            <div className={style.links1}>
  
              <a href="">CONTACT US</a>
            </div>
          </div>
        </div>

        <div className={style.thirdDiv1}>
          <div className={style.contactUs1}>
            <h5>CONTACT US</h5>
          </div>
          <div >
            <div className={style.link1}>
              <Image src={phone} alt=""  style={{marginRight:"1em"}}/>
              <p>90354 79766, 90354 79767</p>
            </div>
            <div className={style.link1}>
              <Image src={emailbox} alt=""  style={{marginRight:"1em"}}/>
              <p>sales@delightcapitals.com, info@delightcapitals.com</p>
            </div>
            <div className={style.link1}>
              <Image src={location} alt=""  style={{marginRight:"1em"}}/>
              <p>Basaveshwara Nagar, Bangalore-560079</p>
            </div>
          </div>
          <div className={style.socialMedia1}>
            <Image src={FB2} alt="" style={{margin:"1em"}}/>
            <Image src={FB2} alt="" style={{margin:"1em"}}/>
            <Image src={Insta2} alt="" style={{margin:"1em"}}/>
            <Image src={Youtube2} alt="" style={{margin:"1em"}}/>
          </div>
        </div>
        <p className={style.footerEndText1}>Copyright © 2021 Delight Capital Solutions - All Rights Reserved.</p>
      </div>
      <hr className={style.hr}/>
<div className={style.footerEnd}>
<p className={style.footerEndText}>Copyright © 2021 Delight Capital Solutions - All Rights Reserved.</p>
      </div>
    </div>
    
  );
}

export default footer;
