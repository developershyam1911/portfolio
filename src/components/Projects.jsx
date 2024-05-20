"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules';
import init from '@/firebase';
import Image from 'next/image';

const Projects = () => {
    const [data, setData] = useState([]);
    const getProjects = async () => {
        const mycollection = collection(init.db, "projects");
        let q = query(mycollection, orderBy('createdAt', 'desc'));
        const data = await getDocs(q);
        setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="project-display-section section-gap-tb-165">
            <div className="project-display-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-12 d-block d-md-flex justify-content-between">
                            <div className="section-content pos-relative">
                                <span className="section-tag">Awesome Portfolio</span>
                                <h2 className="section-title">My Complete Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-display-wrapper">
                    <div className="project-display-slider">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    className="mySwiper"
                                    modules={[Autoplay]}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1
                                        },
                                        1024: {
                                            slidesPerView: 3
                                        },
                                    }}
                                >
                                    {
                                        data?.map((item, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <div className="project-box-single-item swiper-slide">
                                                        <div className="img-box">
                                                            <div className="bg-overlay"></div>
                                                            <div className="bg-image">
                                                                <Image src={item.image} height={250} width={400} quality={90} className="img-fluid" alt="Developer Shyam" />
                                                            </div>
                                                            <div className="image">     
                                                                <Image src={item.image} height={250} width={400} quality={90} className="img-fluid" alt="Developer Shyam" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title text-center">{item.title}</h4>
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
    )
}

export default Projects
