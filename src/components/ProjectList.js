"use client"
import Link from "next/link"
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules';
import init from '@/firebase';
import Image from "next/image";
const ProjectList = () => {
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
    <>
                <div className="breadcrumb-section section-bg overflow-hidden pos-relative">
            <div className="breadcrumb-shape-top-left"></div>
            <div className="breadcrumb-shape-bottom-right"></div>
            <div className="breadcrumb-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2 className="title">Completed Projects</h2>
                                <ul className="breadcrumb-link">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active" aria-current="page">Completed Projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-section section-gap-tb-165">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="projects-gallery-filter-nav">
                            <button class="btn btn-outline-secondary active" data-filter="*">All</button>
                            <button class="btn btn-outline-secondary" data-filter=".html">React Js</button>
                            <button class="btn btn-outline-secondary" data-filter=".wordpress">Mern Stack</button>
                            <button class="btn btn-outline-secondary" data-filter=".shopify">React Native</button>
                            <button class="btn btn-outline-secondary" data-filter=".seo">Laravel</button>
                            <button class="btn btn-outline-secondary" data-filter=".seo">Next Js</button>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="projects-wrapper-gallery-content">
                            <div class="row">
                            {
                                    data?.map((item, index)=>{
                                        return(
                                            <div class="col-md-6  filter-item industwordpressrial">
                                    <div class="project-box-single-item">
                                        <div class="img-box">
                                            <div class="bg-overlay"></div>
                                            <div class="bg-image">
                                            <Image src={item.image} height={250} width={400} quality={90} className="img-fluid" alt="Developer Shyam" />
                                            </div>
                                            <div class="image">
                                            <Image src={item.image} height={250} width={400} quality={90} className="img-fluid" alt="Developer Shyam" />
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h4 class="title">{item.title}</h4>
                                            <ul class="catagory-nav-item">
                                                <li>{item.language}</li>
                                            </ul>
                                        </div>
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
        </div>
    </>
  )
}

export default ProjectList
