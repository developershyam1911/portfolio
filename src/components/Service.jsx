'use client';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import init from '@/firebase';
import Image from 'next/image';


const Service = () => {
    const [data, setData] = useState([]);
    const getServices = async () => {
        const mycollection = collection(init.db, "services");
        let q = query(mycollection, orderBy('createdAt', 'desc'));
        const data = await getDocs(q);
        setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    useEffect(() => {
        getServices();
    }, []);
    // const [data, setData] = useState([
    //     {
    //         title:'Web Develop.',
    //         language:[ 'HTML5','CSS','JavaScript','React Js','Next Js'],
    //         url:'assets/images/icon/service-icon-2.png'
    //     },
    //     {
    //         title:'App Development',
    //         language:[ 'Dart','React Native','Flutter','Kotlin','Java'],
    //         url:'assets/images/icon/service-icon-2.png'
    //     },
    //     {
    //         title:'Digital Marketing',
    //         language:[ 'Google Campaign','SEO','Social Media Marketing','Google Ranking','Keywords Analizer'],
    //         url:'assets/images/icon/service-icon-1.png'
    //     }
    // ])
    return (
        <>
            <div className="breadcrumb-section section-bg overflow-hidden pos-relative">
                <div className="breadcrumb-shape-top-left"></div>
                <div className="breadcrumb-shape-bottom-right"></div>
                <div className="breadcrumb-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">Services</h2>
                                    <ul className="breadcrumb-link">
                                        <li>Service</li>
                                        <li className="active" aria-current="page">Service List</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-display-section section-gap-tb-165 pos-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-content">
                                <span className="section-tag">My Services</span>
                                <h2 className="section-title">Service Provide For My Clients.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-display-wrapper">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="row">
                                {
                                    data?.map((item, index) => {
                                        return (
                                            <div className='col-md-4 shadow p-2' key={index}>
                                                <div className="service-box-single-item swiper-slide">
                                                    <div className="inner-shape inner-shape-top-right"></div>
                                                    <div className="mb-2">
                                                    <Image src={item.image} height={50} width={50} quality={90} className="img-fluid" alt="Developer Shyam" />
                                                        </div>
                                                    <h4 className="title">{item.title}</h4>
                                                    <ul className="list-item">
                                                        <li>{item.skill1}</li>
                                                        <li>{item.skill2}</li>
                                                        <li>{item.skill3}</li>
                                                        <li>{item.skill4}</li>
                                                        <li>{item.skill5}</li>
                                                    </ul>
                                                    <div className="inner-shape inner-shape-bottom-right"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
