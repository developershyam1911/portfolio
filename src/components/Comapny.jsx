"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Image from "next/image";

const Comapny = () => {
  const [data, setData] = useState([
    {
      url: "/assets/images/company-logo/company-logo-1.png",
    },
    {
      url: "/assets/images/company-logo/company-logo-2.png",
    },
    {
      url: "/assets/images/company-logo/company-logo-3.png",
    },
    {
      url: "/assets/images/company-logo/company-logo-4.png",
    },
    {
      url: "/assets/images/company-logo/company-logo-5.png",
    },
    // {
    //     url: 'assets/images/company-logo/3.png'
    // },
    // {
    //     url: 'assets/images/company-logo/3.png'
    // },
  ]);
  return (
    <div className="company-logo-display section-mt-165 ">
      <div className="company-logo-display-box">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-content pos-relative">
                <span className="section-tag">Favourite Clients</span>
                <h2 className="section-title">Work With Trusted Comapny.</h2>
              </div>
            </div>
          </div>

          <div className="company-logo-display-wrapper">
            <div className="row">
              <div className="col">
                <div className="company-logo-display-slider">
                  <div className="swiper-container">
                    <div className="swiper-wrapper mb-5">
                      <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        breakpoints={{
                          320: {
                            slidesPerView: 1,
                          },
                          1024: {
                            slidesPerView: 4,
                          },
                        }}
                        autoplay={true}
                        className="mySwiper"
                      >
                        {data.map((item, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <div className="company-logo-single-item swiper-slide">
                                <a href="#" className=" ">
                                  <Image
                                    src={item.url}
                                    height={180}
                                    width={180}
                                    quality={90}
                                    className="img-fluid"
                                    alt="Developer Shyam"
                                  />
                                  {/* <Image src={item.url} height={100} width={120} quality={90} className="img-fluid" alt="Developer Shyam" /> */}
                                </a>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comapny;
