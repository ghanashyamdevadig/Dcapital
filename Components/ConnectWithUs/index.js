import React from "react";
import style from "./connect.module.css";
import Image from "next/image";
import building2 from "../../assets/png/buildings 1 1.png";
import building1 from "../../assets/png/buildings 2.png";
import email from "../../assets/svg/Email.svg";
import Phone from "../../assets/svg/Phone.svg";
import Location from "../../assets/svg/Location.svg";
import Country from "../../Components/Utils/CountryCode.json";
import { useState } from "react";

function ConnectWithUs() {
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <div
    className={style.mainDiv}
    >
      <div className={style.ConnectWithUs}>
        <div className={style.staticContent}>
          <div className={style.staticFields}>
            <div className={style.Email}>
              <div>
                <Image src={email} alt="Email" className={style.icons}/>
              </div>
              <div>
                <p
                  style={{
                    color: "#949494",
                    fontFamily: "Roboto, sans-serif",
                    margin: "0.2em",
                  }}
                  className={style.text}
                >
                  Email:
                </p>
                <p
                  style={{ color: "#FFFFFF", fontFamily: "Roboto, sans-serif" }}
                  className={style.text}
                >
                  sales@delightcapitals.com
                </p>
              </div>
            </div>
            <div className={style.Phone}>
              <div>
                <Image src={Phone} alt="Phone" className={style.icons}/>
              </div>
              <div>
                <p
                  style={{
                    color: "#949494",
                    fontFamily: "Roboto, sans-serif",
                    margin: "0.2em",
                  }}
                  className={style.text}
                >
                  Phone:
                </p>
                <p
                  style={{ color: "#FFFFFF", fontFamily: "Roboto, sans-serif" }}
                  className={style.text}
                >
                  90354 79766
                </p>
              </div>
            </div>
            <div className={style.Location}>
              <div>
                <Image src={Location} alt="Phone" className={style.icons}/>
              </div>
              <div>
                <p
                  style={{
                    color: "#949494",
                    fontFamily: "Roboto, sans-serif",
                    margin: "0.2em",
                  }}
                  className={style.text}
                >
                  Location:
                </p>
                <p
                  style={{ color: "#FFFFFF", fontFamily: "Roboto, sans-serif" }}
                  className={style.text}
                >
                  Basaveshwara Nagar, Bangalore-560079
                </p>
              </div>
            </div>
          </div>
          <div className={style.building1}>
            <Image
            className={style.image1}
              // width={600}
              // style={{ position: "absolute", left: "0", bottom: "0" }}
              src={building1}
              alt="bulidings"
            ></Image>
          </div>
        </div>

        <div className={style.DynamicContent}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
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
                <div className={style.button}>
                  <a href="/" className={style.connect_btn}>
                    CONNECT
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.building2}>
            <Image
            className={style.image2}
              src={building2}
              alt="bulidings"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithUs;
