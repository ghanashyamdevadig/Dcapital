import React from "react";
import trendingProjects from "./css/TrendingProjects.module.css";
import moreInfo from "./css/MoreInfo.module.css";
import SectionHeading from "./../SectionHeading/index";
import Carousel from "react-elastic-carousel";

export default function TrendingProjects({ background, width }) {
  return (
    <div style={{ background: background || "#FFF" }}>
      <div
        className={trendingProjects.featured_collection}
        style={{ maxWidth: width || 1400 }}
      >
        <SectionHeading
          title="Trending Projects"
          tagline="The  Noteworthy Real Estate in India"
        />
        <Carousel
            itemsToShow={1}
            enableAutoPlay
            autoPlaySpeed={3000}
            itemPadding={[0, 19, 0, 19]}
            showArrows={false}
          >
        <div className={trendingProjects.container}>
          <div className={trendingProjects.project_views}>
            <div className={trendingProjects.main_image_container}>
              <div className={trendingProjects.main_image_detail}>
                Typical Floor Plan
              </div>
              <img
                className={trendingProjects.main_image_view}
                src="/images/TrendingProjects/image1.png"
                alt=""
              />
              <img
                className={trendingProjects.approvel_stamp}
                src="/images/TrendingProjects/BBMP_approved.png"
                alt=""
              />
            </div>
            <div className={trendingProjects.small_images}>
              <img
                src="/images/TrendingProjects/small-image1.png"
                alt=""
                className={trendingProjects.small_image}
              />
              <img
                src="/images/TrendingProjects/small-image2.png"
                alt=""
                className={trendingProjects.small_image}
              />
              <img
                src="/images/TrendingProjects/small-image3.png"
                alt=""
                className={trendingProjects.small_image}
              />
            </div>
          </div>
          <div className={trendingProjects.project_details}>
            <div className={trendingProjects.company_details}>
              <img
                src="/images/TrendingProjects/company_logo.png"
                alt=""
                className={trendingProjects.company_logo}
              />
              <div className={trendingProjects.company_tagline}>
                A Higher Quality of Living
              </div>
            </div>
            <div className={trendingProjects.project_location}>
              2 BHK Luxury Apartment, Singasandra Bangalore
            </div>
            <ul className={trendingProjects.key_points}>
              <li className={trendingProjects.key_point}>
                This project is located at AECS Layout Singasandra, the most
                sought after residential area in the city of Bangalore.
              </li>
              <li className={trendingProjects.key_point}>
                At Sunrise the structure is designed and planned to have stilt
                car parking G+4 levels of dwelling units.
              </li>
              <li className={trendingProjects.key_point}>
                The design comprises 20 numbers of 2 BHK Homey, Pleasent & Firm
                homes just for you.
              </li>
            </ul>

            <MoreInfo
              iconUrl="/images/TrendingProjects/location_icon.png"
              title="Project Address"
              description="Survey # 192/C AECS Layout C Block, Singasandra, Bangalore - 560068"
            />
            <MoreInfo
              iconUrl="/images/TrendingProjects/approvel_icon.png"
              title="BBMP Approved"
              description="(Bruhat Bengaluru Mahanagara Palike, Bengaluru)"
            />
            <a href="/" className={trendingProjects.contact_btn}>Contact</a>
          </div>
        </div>
        <div className={trendingProjects.container}>
          <div className={trendingProjects.project_views}>
            <div className={trendingProjects.main_image_container}>
              <div className={trendingProjects.main_image_detail}>
                Typical Floor Plan
              </div>
              <img
                className={trendingProjects.main_image_view}
                src="/images/TrendingProjects/image1.png"
                alt=""
              />
              <img
                className={trendingProjects.approvel_stamp}
                src="/images/TrendingProjects/BBMP_approved.png"
                alt=""
              />
            </div>
            <div className={trendingProjects.small_images}>
              <img
                src="/images/TrendingProjects/small-image1.png"
                alt=""
                className={trendingProjects.small_image}
              />
              <img
                src="/images/TrendingProjects/small-image2.png"
                alt=""
                className={trendingProjects.small_image}
              />
              <img
                src="/images/TrendingProjects/small-image3.png"
                alt=""
                className={trendingProjects.small_image}
              />
            </div>
          </div>
          <div className={trendingProjects.project_details}>
            <div className={trendingProjects.company_details}>
              <img
                src="/images/TrendingProjects/company_logo.png"
                alt=""
                className={trendingProjects.company_logo}
              />
              <div className={trendingProjects.company_tagline}>
                A Higher Quality of Living
              </div>
            </div>
            <div className={trendingProjects.project_location}>
              2 BHK Luxury Apartment, Singasandra Bangalore
            </div>
            <ul className={trendingProjects.key_points}>
              <li className={trendingProjects.key_point}>
                This project is located at AECS Layout Singasandra, the most
                sought after residential area in the city of Bangalore.
              </li>
              <li className={trendingProjects.key_point}>
                At Sunrise the structure is designed and planned to have stilt
                car parking G+4 levels of dwelling units.
              </li>
              <li className={trendingProjects.key_point}>
                The design comprises 20 numbers of 2 BHK Homey, Pleasent & Firm
                homes just for you.
              </li>
            </ul>

            <MoreInfo
              iconUrl="/images/TrendingProjects/location_icon.png"
              title="Project Address"
              description="Survey # 192/C AECS Layout C Block, Singasandra, Bangalore - 560068"
            />
            <MoreInfo
              iconUrl="/images/TrendingProjects/approvel_icon.png"
              title="BBMP Approved"
              description="(Bruhat Bengaluru Mahanagara Palike, Bengaluru)"
            />
            <a href="/" className={trendingProjects.contact_btn}>Contact</a>
          </div>
        </div>
        <div className={trendingProjects.container}>
          <div className={trendingProjects.project_views}>
            <div className={trendingProjects.main_image_container}>
              <div className={trendingProjects.main_image_detail}>
                Typical Floor Plan
              </div>
              <img
                className={trendingProjects.main_image_view}
                src="/images/TrendingProjects/image1.png"
                alt=""
              />
              <img
                className={trendingProjects.approvel_stamp}
                src="/images/TrendingProjects/BBMP_approved.png"
                alt=""
              />
            </div>
            <div className={trendingProjects.small_images}>
              <img
                src="/images/TrendingProjects/small-image1.png"
                alt=""
                className={trendingProjects.small_image}
              />
              <img
                src="/images/TrendingProjects/small-image2.png"
                alt=""
                className={trendingProjects.small_image}
              />
              <img
                src="/images/TrendingProjects/small-image3.png"
                alt=""
                className={trendingProjects.small_image}
              />
            </div>
          </div>
          <div className={trendingProjects.project_details}>
            <div className={trendingProjects.company_details}>
              <img
                src="/images/TrendingProjects/company_logo.png"
                alt=""
                className={trendingProjects.company_logo}
              />
              <div className={trendingProjects.company_tagline}>
                A Higher Quality of Living
              </div>
            </div>
            <div className={trendingProjects.project_location}>
              2 BHK Luxury Apartment, Singasandra Bangalore
            </div>
            <ul className={trendingProjects.key_points}>
              <li className={trendingProjects.key_point}>
                This project is located at AECS Layout Singasandra, the most
                sought after residential area in the city of Bangalore.
              </li>
              <li className={trendingProjects.key_point}>
                At Sunrise the structure is designed and planned to have stilt
                car parking G+4 levels of dwelling units.
              </li>
              <li className={trendingProjects.key_point}>
                The design comprises 20 numbers of 2 BHK Homey, Pleasent & Firm
                homes just for you.
              </li>
            </ul>

            <MoreInfo
              iconUrl="/images/TrendingProjects/location_icon.png"
              title="Project Address"
              description="Survey # 192/C AECS Layout C Block, Singasandra, Bangalore - 560068"
            />
            <MoreInfo
              iconUrl="/images/TrendingProjects/approvel_icon.png"
              title="BBMP Approved"
              description="(Bruhat Bengaluru Mahanagara Palike, Bengaluru)"
            />
            <a href="/" className={trendingProjects.contact_btn}>Contact</a>
          </div>
        </div>
        </Carousel>

      </div>
    </div>
  );
}

export function MoreInfo({ iconUrl, title, description }) {
  return (
    <div className={moreInfo.container}>
      <img className={moreInfo.icon} src={iconUrl} />
      <div className={moreInfo.details_container}>
        <div className={moreInfo.title}>{title}</div>
        <div className={moreInfo.description}>{description}</div>
      </div>
    </div>
  );
}
