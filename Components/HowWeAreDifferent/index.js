import React from "react";
import style from "./howWeAre.module.css";
import Image from "next/image";
import Illustration from "../../assets/png/Illustration.png";
import point1 from "../../assets/svg/Point 1.svg";
import point2 from "../../assets/svg/Point2.svg";
import point3 from "../../assets/svg/Point3.svg";
import point4 from "../../assets/svg/Point 4.svg";
import point5 from "../../assets/svg/Point 5.svg";
import Arrow from "../../assets/svg/arrow.svg";

function howWeAre() {
  return (
    <div className={style.mainCntr}>
      <div  style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
      <div className={style.partition}>
        <div className={style.leftCntr}>
          <Image
            src={Illustration}
            alt="Illustration"
            // style={{ marginTop: "5em", marginBottom: "2em" }}
            className={style.img}
          />
          <div className={style.TextBoxText}>
          <h3 className={style.IllustrationText}>
            Aspects that make Delight Capital Solutions
          </h3>
          <h3 className={style.IllustrationText}>
            India's leading Real Estate Advisory
          </h3>
          <p className={style.IllustrationTextSmall}>
            You can leave it to us to provide your dream home the perfect
          </p>
          <p className={style.IllustrationTextSmall}>
            decor and design which it deserves.
          </p>
          <p className={style.IllustrationTextSmall1}>
            You can leave it to us to provide your dream home the 
          </p>
          <p className={style.IllustrationTextSmall1}>
          perfect decor and design which it deserves.
          </p>
          </div>
        </div>
        <div className={style.right}>
        <div className={style.rightCntr}>
          <div className={style.howWeAre}>
            <h1>How we are different from others?</h1>
          </div>
          <div className={style.howWeAre1}>
            <h1>How we are different </h1>
            <h1>from others?</h1>
          </div>
          <div className={style.adjust}>
          <div className={style.points}>
            <div className={style.imageIcon}>
              <Image src={point1} alt="point1" className={style.imageIconArrow}/>
            </div>
            <div>
              <h3 className={style.textHeader}>Rera approved properties. </h3>
              <p className={style.textsmall}>
                Those days are now passé when purchasing a home used to be a
                very arduous task ...
              </p>
            </div>
            <div className={style.arrowIcon}>
              <Image src={Arrow} alt="Arrow" className={style.imageIconArrow}/>
            </div>
          </div>
          <div className={style.points}>
            <div className={style.imageIcon}>
              <Image src={point2} alt="point2" className={style.imageIconArrow}/>
            </div>
            <div>
              <h3 className={style.textHeader}>
                BMRDA / Other planing Approved.{" "}
              </h3>
              <p className={style.textsmall}>
                Those days are now passé when purchasing a home used to be a
                very arduous task ...
              </p>
            </div>
            <div className={style.arrowIcon}>
              <Image src={Arrow} alt="Arrow" className={style.imageIconArrow}/>
            </div>
          </div>
          <div className={style.points}>
            <div className={style.imageIcon}>
              <Image src={point3} alt="point3" className={style.imageIconArrow}/>
            </div>
            <div>
              <h3 className={style.textHeader}>
                Only A - Kata and e- Kata properties.{" "}
              </h3>
              <p className={style.textsmall}>
                Those days are now passé when purchasing a home used to be a
                very arduous task ...
              </p>
            </div>
            <div className={style.arrowIcon}>
              <Image src={Arrow} alt="Arrow" className={style.imageIconArrow}/>
            </div>
          </div>
          <div className={style.points}>
            <div className={style.imageIcon}>
              <Image src={point4} alt="point4" className={style.imageIconArrow}/>
            </div>
            <div>
              <h3 className={style.textHeader}>Bank approved layout. </h3>
              <p className={style.textsmall}>
                Those days are now passé when purchasing a home used to be a
                very arduous task ...
              </p>
            </div>
            <div className={style.arrowIcon}>
              <Image src={Arrow} alt="Arrow" className={style.imageIconArrow}/>
            </div>
          </div>
          <div className={style.points}>
            <div className={style.imageIcon}>
              <Image src={point5} alt="point5" className={style.imageIconArrow}/>
            </div>
            <div>
              <h3 className={style.textHeader}>
                On Behalf on you our DC team will verify the properties and we
                will give 100% assurance before handover..{" "}
              </h3>
              <p className={style.textsmall}>
                Those days are now passé when purchasing a home used to be a
                very arduous task ...
              </p>
            </div>
            <div className={style.arrowIcon}>
              <Image src={Arrow} alt="Arrow" className={style.imageIconArrow}/>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default howWeAre;
