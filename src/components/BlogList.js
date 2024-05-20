'use client';
import Link from "next/link"
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import dayjs from "dayjs";
import init from "@/firebase";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin, FaUser } from "react-icons/fa";
import { MdCalendarMonth, MdFacebook, MdKeyboardDoubleArrowRight, MdSearch } from "react-icons/md";
const BlogList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const getBlogs = async () => {
    try {
      setLoading(true)
      const mycollection = collection(init.db, "blogs");
      let q = query(mycollection, orderBy('createdAt', 'desc'));
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
    <>
      <div className="breadcrumb-section section-bg overflow-hidden pos-relative">
        <div className="breadcrumb-shape-top-left"></div>
        <div className="breadcrumb-shape-bottom-right"></div>
        <div className="breadcrumb-box">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Blog</h2>
                  <ul className="breadcrumb-link">
                    <li><Link href="/">Home</Link></li>
                    <li className="active" aria-current="page">Blog List</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-list-section section-mt-165">
        <div className="blog-list-box">
          <div className="container">
            <div className="row flex-lg-row flex-column-reverse">
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar-widget-area">
                  <div className="sidebar-widget-single-area search-widgets">
                    <form className="search-widgets-box" action="#" method="post">
                      <input type="search" placeholder="Search here" />
                      <button> <MdSearch size={22} /></button>
                    </form>
                  </div>
                  <div className="sidebar-widget-single-area catagory-widgets">
                    <h3 className="title">Category</h3>
                    <ul className="widget-nav-list catagory-item-list">
                      <li><a href="#"><span className="text">UI/UX Design</span><span className="icon"><MdKeyboardDoubleArrowRight size={22} /></span></a></li>
                      <li><a href="#"><span className="text">Web Development</span><span className="icon"><MdKeyboardDoubleArrowRight size={22} /></span></a></li>
                      <li><a href="#"><span className="text">Brand Identity</span><span className="icon"><MdKeyboardDoubleArrowRight size={22} /></span></a></li>
                      <li><a href="#"><span className="text">Digital Marketing</span><span className="icon"><MdKeyboardDoubleArrowRight size={22} /></span></a></li>
                    </ul>
                  </div>
                  <div className="sidebar-widget-single-area recentpost-widget">
                    <h3 className="title">Recent Post</h3>
                    <ul className="recent-blog-item-list">
                      {
                        data?.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link href={`/blog/${item.slug}`} className="">
                                <Image src={item.image} height={80} width={80} quality={90} className="img-fluid" alt="Developer Shyam" style={{ height: '80px', width: '80px', borderRadius: '50%', border: "2px solid #fff" }} />
                              </Link>
                              <div className="content">
                                <p className="title" style={{ textAlign: 'justify', fontSize: '14px', fontWeight: '500' }}><Link href={`/blog/${item.slug}`}>{item.title}</Link></p>
                                <div className="post-meta">
                                  <Link href={`/blog/${item.slug}`} className="date icon-space-right"><MdCalendarMonth size={22} />{dayjs(item.createdAt.seconds * 1000).format('DD MMM, YY')}</Link>
                                </div>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className="sidebar-widget-single-area mb-4">
                    <h3 className="title">Follow Me</h3>
                    <ul className="social-link">
                      <li><a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank"><FaFacebookF size={22} /></a></li>
                      <li><a href={process.env.NEXT_PUBLIC_INSTA_LINK} target="_blank"><FaInstagram size={22} /></a></li>
                      <li><a href={process.env.NEXT_PUBLIC_LINKDIN_LINK} target="_blank"><FaLinkedin size={22} /></a></li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="blog-list">
                  {
                    loading && (
                      data?.map((_, i) => {
                        return (
                          <div className='mb-2 p-3' key={i}>
                            <SkeletonTheme highlightColor="#ccc" baseColor="#EEFFFD">
                              <Skeleton height={200} width={750} />
                            </SkeletonTheme>
                          </div>
                        )
                      })
                    )
                  }
                  {
                    data.map((item, index) => {
                      return (
                        <div className="blog-list-single-item" key={index}>
                          <div className="inner-shape inner-shape-top-right"></div>
                          <Link href={`/blog/${item.slug}`} className="image">
                            <Image src={item?.image} height={200} width={350} quality={90} className="" alt="Developer Shyam" style={{ backgroundSize: 'cover', borderRadius: '10px' }} />
                          </Link>
                          <div className="content">
                            <div className="post-meta-1">
                              <Link href={`/blog/${item.slug}`} className="catagory">{item.category}</Link>
                              <Link href={`/blog/${item.slug}`} className="date">{dayjs(item.createdAt.seconds * 1000).format('DD MMM, YY')}</Link>
                            </div>
                            <h4 className="title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>

                            <div className="post-meta-2">
                              <Link href={`/blog/${item.slug}`} className="icon-space-right"><FaUser size={22} /> {process.env.NEXT_PUBLIC_NAME} </Link>
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
        {/* <div className="blog-list-box">
          <div className="container">
            <div className="row">
              <div className="col-12">
               
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default BlogList
