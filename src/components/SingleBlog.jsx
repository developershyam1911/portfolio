'use client';
import Link from "next/link"
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import dayjs from "dayjs";
import init from "@/firebase";
import Image from "next/image";
import { MdCalendarMonth, MdKeyboardDoubleArrowRight, MdSearch } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin, FaUser } from "react-icons/fa";
const SingleBlog = ({ slug }) => {
    const [data, setData] = useState([]);
    const [laoding, setLoading] = useState(false)
    const getBlogs = async () => {
        try {
            setLoading(true)
            const mycollection = collection(init.db, "blogs");
            let q = query(mycollection, where('slug', '==', slug), orderBy('createdAt', 'desc'));
            const data = await getDocs(q);
            setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false)
        } catch (err) {
            console.log('Error', err);
        }
    };
    const [resent, setResent] = useState([]);
    const getRecentBlogs = async () => {
        try {
            const mycollection = collection(init.db, "blogs");
            let q = query(mycollection, orderBy('createdAt', 'desc'), limit(10));
            const data = await getDocs(q);
            setResent(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        } catch (err) {
            console.log('Error', err);
        }
    };
    useEffect(() => {
        getBlogs();
        getRecentBlogs()
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
                                    <h2 className="title">{data[0]?.title}</h2>
                                    <ul className="breadcrumb-link">
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active" aria-current="page">{slug}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-section section-gap-tb-165">
                <div className="blog-details-box">
                    <div className="container">
                        <div className="row flex-lg-row-reverse flex-column-reverse">
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar-widget-area">
                                    <div className="sidebar-widget-single-area search-widgets">
                                        <form className="search-widgets-box" action="#" method="post">
                                            <input type="search" placeholder="Search here" />
                                            <button><MdSearch size={22}/></button>
                                        </form>
                                    </div>
                                    <div className="sidebar-widget-single-area catagory-widgets">
                                        <h3 className="title">Category</h3>
                                        <ul className="widget-nav-list catagory-item-list">
                                            <li><a href="#"><span className="text">UI/UX Design</span><span className="icon"><MdKeyboardDoubleArrowRight size={22}/></span></a></li>
                                            <li><a href="#"><span className="text">Web Development</span><span className="icon"><MdKeyboardDoubleArrowRight size={22}/></span></a></li>
                                            <li><a href="#"><span className="text">Brand Identity</span><span className="icon"><MdKeyboardDoubleArrowRight size={22}/></span></a></li>
                                            <li><a href="#"><span className="text">Digital Marketing</span><span className="icon"><MdKeyboardDoubleArrowRight size={22}/></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-widget-single-area recentpost-widget">
                                        <h3 className="title">Recent Post</h3>
                                        <ul className="recent-blog-item-list">
                                            {
                                                resent?.map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link href={`/blog/${item.slug}`} className="">
                                                    <Image src={item.image} height={80} width={80} quality={90} className="img-fluid" alt="Developer Shyam" style={{height: '80px', width: '80px',  borderRadius: '50%', border: "2px solid #fff" }} />
                                                            </Link>
                                                            <div className="content">
                                                                <p className="title" style={{ textAlign: 'justify', fontSize: '14px', fontWeight: '500' }}><Link href={`/blog/${item.slug}`}>{item.title}</Link></p>
                                                                <div className="post-meta">
                                                                    <Link href={`/blog/${item.slug}`} className="date icon-space-right"><MdCalendarMonth size={22}/>{dayjs(item.createdAt.seconds * 1000).format('DD MMM, YY')}</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="sidebar-widget-single-area ">
                                        <h3 className="title">Follow Me</h3>
                                        <ul className="social-link">
                                        <li><a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank"><FaFacebookF size={22}/></a></li>
                      <li><a href={process.env.NEXT_PUBLIC_INSTA_LINK} target="_blank"><FaInstagram size={22} /></a></li>
                      <li><a href={process.env.NEXT_PUBLIC_LINKDIN_LINK} target="_blank"><FaLinkedin size={22}/></a></li>
                   </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 offset-xl-1">
                                <div className="blog-content-area">
                                    <div className="default-content-style pos-relative">
                                        <div className="content-meta">
                                            <span className="section-tag">{data[0]?.category}</span>
                                            <div className="post-meta-2">
                                                <span className="icon-space-right"><FaUser size={22}/>{process.env.NEXT_PUBLIC_NAME}</span>
                                                <span className="icon-space-right"><MdCalendarMonth size={22}/>{dayjs(data[0]?.createdAt.seconds * 1000).format('DD MMM, YY')}</span>
                                            </div>
                                        </div>
                                        <h2 className="mt-2">{data[0]?.title}</h2>
                                        <div className="content-inner-image image-double">
                                            <div className="my-2">
                                                <Image src={data[0]?.image} height={450} width={700} quality={90} className="img-fluid" alt="Developer Shyam" style={{borderRadius:'10px'}} />
                                            </div>
                                        </div>
                                        <p>  <div dangerouslySetInnerHTML={{ __html: data[0]?.desc }} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog
