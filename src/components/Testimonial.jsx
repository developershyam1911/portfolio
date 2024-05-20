"use client";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import init from '@/firebase';
import { MdStar } from 'react-icons/md';

const Testimonial = () => {
    const [data, setData] = useState([]);
    const getTestimonial = async () => {
        const mycollection = collection(init.db, "testimonial");
        let q = query(mycollection, orderBy('createdAt', 'desc'));
        const data = await getDocs(q);
        setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    useEffect(() => {
        getTestimonial();
    }, []);
  return (
    <div className="testimonial-display-section section-gap-tb-165 section-bg">
    <div className="testimonial-display-box d-flex flex-column align-items-center d-xl-block pos-relative">
        <div className="container overflow-hidden">
            <div className="row">
            <div className="col-12 col-xl-12 d-block d-md-flex justify-content-between">
                            <div className="section-content pos-relative">
                                <span className="section-tag">Testimonial</span>
                                <h2 className="section-title">Satisfied Clients Say</h2>
                            </div>
                        </div>
            </div>
            <div className="testimonial-display-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            <div className="swiper-container">
                                <div className="">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1
                                        },
                                        1024: {
                                            slidesPerView: 3
                                        },
                                    }}
                                    className="mySwiper"
                                >
                                  {
                                    data.map((item, index)=>{
                                        return(
                                            <SwiperSlide key={index}>
                                            <div class="testimonial-slider-single-item swiper-slide">
                                                        {/* <div class="inner-shape inner-shape-top-right"></div> */}
                                                        <div class="">
                                                            <span class="icon">“</span>
                                                            <p class="">{item.review}</p>
                                                            <div class="info">
                                                                <div class="author">
                                                                    <h4 class="name">{item.name}</h4>
                                                                    <span class="designation">{item.deg}</span>
                                                                </div>
                                                                <ul class="review">
                                                                    <li class="fill"><MdStar size={22}/></li>
                                                                    <li class="fill"><MdStar size={22}/></li>
                                                                    <li class="fill"><MdStar size={22}/></li>
                                                                    <li class="fill"><MdStar size={22}/></li>
                                                                </ul>
                                                            </div>
                                                        </div>
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

export default Testimonial
