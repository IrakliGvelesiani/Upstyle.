import React from "react";

import img1 from "../../Assets/Images/Slider/slide-1.jpg";
import img2 from "../../Assets/Images/Slider/slide-2.jpg";
import img3 from "../../Assets/Images/Slider/slide-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";
const HeroSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide>
          <div className="hero-slider">
            {" "}
            <img src={img1} alt="" />
            <div className="content-info">
              <h3>#NEW SUMMER COLLECTION 2023</h3>
              <h1>New Arrivals</h1>
              <h5>
                A specialist label creating luxury essentials. Ethically <br />{" "}
                crafted with an unwavering commitment to <br /> exceptional
                quality.
              </h5>
              <button>Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slider">
            {" "}
            <img src={img2} alt="" />
            <div className="content-info">
              <h3>#NEW SUMMER COLLECTION 2023</h3>
              <h1>New Arrivals</h1>
              <h5>
                A specialist label creating luxury essentials. Ethically <br />{" "}
                crafted with an unwavering commitment to <br /> exceptional
                quality.
              </h5>
              <button>Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slider">
            {" "}
            <img src={img3} alt="" />
            <div className="content-info">
              <h3>#NEW SUMMER COLLECTION 2023</h3>
              <h1>New Arrivals</h1>
              <h5>
                A specialist label creating luxury essentials. Ethically <br />{" "}
                crafted with an unwavering commitment to <br /> exceptional
                quality.
              </h5>
              <button>Shop now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
