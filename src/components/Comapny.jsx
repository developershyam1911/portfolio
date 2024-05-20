"use client"
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import Image from 'next/image';

const Comapny = () => {
    const [data, setData] = useState([
        {
            url: '/assets/images/company-logo/company-logo-1.png'
        },
        {
            url: '/assets/images/company-logo/company-logo-2.png'
        },
        {
            url: '/assets/images/company-logo/company-logo-3.png'
        },
        {
            url: '/assets/images/company-logo/company-logo-4.png'
        },
        {
            url: '/assets/images/company-logo/company-logo-5.png'
        },
        // {
        //     url: 'assets/images/company-logo/3.png'
        // },
        // {
        //     url: 'assets/images/company-logo/3.png'
        // },
    ])
    return (
        <div class="company-logo-display section-mt-165 ">
            <div class="company-logo-display-box">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="section-content pos-relative">
                                <span class="section-tag">Favourite Clients</span>
                                <h2 class="section-title">Work With Trusted Comapny.</h2>
                            </div>

                        </div>
                    </div>

                    <div class="company-logo-display-wrapper">
                        <div class="row">
                            <div class="col">
                                <div class="company-logo-display-slider">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper mb-5">
                                            <Swiper
                                                slidesPerView={4}
                                                spaceBetween={40}
                                                breakpoints={{
                                                    320: {
                                                        slidesPerView: 1
                                                    },
                                                    1024: {
                                                        slidesPerView: 4
                                                    },
                                                }}
                                                autoplay={true}
                                                className="mySwiper"
                                            >


                                                {
                                                    data.map((item, i) => {
                                                        return (
                                                            <SwiperSlide key={i}>
                                                                <div class="company-logo-single-item swiper-slide">
                                                                    <a href="#" class=" ">
                                                                        <Image src={item.url} height={180} width={180} quality={90} className="img-fluid" alt="Developer Shyam" />
                                                                        {/* <Image src={item.url} height={100} width={120} quality={90} className="img-fluid" alt="Developer Shyam" /> */}
                                                                    </a>
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }
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

    )
}

export default Comapny
