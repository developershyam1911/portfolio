"use client"
import Link from "next/link"
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import dayjs from "dayjs";
import init from "@/firebase";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Blog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const getBlogs = async () => {
        try {
            setLoading(true)
            const mycollection = collection(init.db, "blogs");
            let q = query(mycollection, orderBy('createdAt', 'desc'), limit(3));
            const data = await getDocs(q);
            setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false)
        } catch (err) {
            console.log('Error', err);
        }
    };
    useEffect(() => {
        getBlogs();
    }, []);
    return (
        <div className="blog-feed-display-section section-gap-tb-165">
            <div className="blog-feed-display-box">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-content pos-relative text-center">
                                <span className="section-tag">Blog Post</span>
                                <h2 className="section-title">Latest Tips & Tricks</h2>
                            </div>
                        </div>
                    </div>
                    <div class="blog-feed-display-wrapper">
                        <div class="row mb-n5">
                            {
                                data?.map((item, index) => {
                                    return (
                                        <div class="col-12 mb-5"  key={index}>
                                            <div class="blog-feed-single-item">
                                                <div class="inner-shape inner-shape-top-right"></div>
                                                <Link href={`/blog/${item.slug}`} className="image">
                                                    <Image src={item?.image} height={200} width={300} quality={90} className="" alt="Developer Shyam" style={{background: 'cover', borderRadius: '10px' }} />
                                                </Link>
                                                <div class="content-box">
                                                    <div class="content">
                                                        <div class="post-meta">
                                                            <Link href={`/blog/${item.slug}`} className="catagory">{item.category}</Link>
                                                            <Link href={`/blog/${item.slug}`} className="date">{dayjs(item.createdAt.seconds * 1000).format('DD MMM, YY')}</Link>
                                                        </div>
                                                        <h4 className="title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                                                    </div>
                                                    <Link href={`/blog/${item.slug}`} class="btn btn-md btn-outline-one icon-space-left">
                                                        Read More <MdKeyboardDoubleArrowRight size={22}/>
                                                    </Link>
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
    )
}

export default Blog
