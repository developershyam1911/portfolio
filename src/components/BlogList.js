"use client";
import Link from "next/link";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import init from "@/firebase";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin, FaUser } from "react-icons/fa";
import {
  MdCalendarMonth,
  MdFacebook,
  MdKeyboardDoubleArrowRight,
  MdSearch,
} from "react-icons/md";
const BlogList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const getBlogs = async () => {
    try {
      const mycollection = collection(init.db, "blogs");
      let q = query(mycollection, orderBy("createdAt", "desc"));
      const data = await getDocs(q);
      const blogs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(blogs);
      setFilteredData(blogs);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const [category, setCategory] = useState([]);
  const getBlogCategories = async () => {
    const mycollection = collection(init.db, "blogCategory");
    const data = await getDocs(mycollection);
    setCategory(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };
  useEffect(() => {
    getBlogCategories();
    getBlogs();
  }, []);

  const categoryHandler = (cat) => {
    const filteredBlogs = data.filter((item) => item.category === cat);
    console.log("Filtered Blogs", filteredBlogs);
    setFilteredData(filteredBlogs);
  };
  const allBlogShowing = () => {
    setFilteredData(data);
  };
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
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active" aria-current="page">
                      Blog List
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-list-section section-mt-165">
        <div className="row">
          <div className="col-12">
            <div className="projects-gallery-filter-nav">
              <button
                className="btn btn-outline-secondary active"
                data-filter="*"
                onClick={allBlogShowing}
              >
                All
              </button>
              <button
                className="btn btn-outline-secondary"
                data-filter=".html"
                onClick={() => categoryHandler("React Js")}
              >
                React Js
              </button>
              <button
                className="btn btn-outline-secondary"
                data-filter=".wordpress"
                onClick={() => categoryHandler("App Development")}
              >
                App Development
              </button>
              <button
                className="btn btn-outline-secondary"
                data-filter=".shopify"
                onClick={() => categoryHandler("Web Development")}
              >
                Web Development
              </button>
              <button
                className="btn btn-outline-secondary"
                data-filter=".seo"
                onClick={() => categoryHandler("React Native")}
              >
                React Native
              </button>
              <button
                className="btn btn-outline-secondary"
                data-filter=".seo"
                onClick={() => categoryHandler("Next  Js")}
              >
                Next Js
              </button>
            </div>
          </div>
        </div>
        <div className="blog-list-box">
          <div className="container">
            <div className="row flex-lg-row flex-column-reverse">
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar-widget-area">
                  <div className="sidebar-widget-single-area search-widgets">
                    <form
                      className="search-widgets-box"
                      action="#"
                      method="post"
                    >
                      <input
                        type="search"
                        placeholder="Search here"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                      />
                      <button>
                        {" "}
                        <MdSearch size={22} />
                      </button>
                    </form>
                  </div>
                  <div className="sidebar-widget-single-area catagory-widgets">
                    <h3 className="title">Category</h3>
                    <ul className="widget-nav-list catagory-item-list">
                      {category?.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link
                              href="#"
                              onClick={() => categoryHandler(item.name)}
                            >
                              <span className="text">{item.name}</span>
                              <span className="icon">
                                <MdKeyboardDoubleArrowRight size={22} />
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="sidebar-widget-single-area recentpost-widget">
                    <h3 className="title">Recent Post</h3>
                    <ul className="recent-blog-item-list ">
                      {data?.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link href={`/blog/${item.slug}`} className="">
                              <Image
                                src={item.image}
                                height={80}
                                width={80}
                                quality={90}
                                className="img-fluid"
                                alt="Developer Shyam"
                                style={{
                                  height: "80px",
                                  width: "80px",
                                  borderRadius: "50%",
                                  border: "2px solid #fff",
                                }}
                              />
                            </Link>
                            <div className="content">
                              <p
                                className="title"
                                style={{
                                  textAlign: "justify",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              >
                                <Link href={`/blog/${item.slug}`}>
                                  {item.title}
                                </Link>
                              </p>
                              <div className="post-meta">
                                <Link
                                  href={`/blog/${item.slug}`}
                                  className="date icon-space-right"
                                >
                                  <MdCalendarMonth size={22} />
                                  {dayjs(item.createdAt.seconds * 1000).format(
                                    "DD MMM, YY"
                                  )}
                                </Link>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="sidebar-widget-single-area mb-4">
                    <h3 className="title">Follow Me</h3>
                    <ul className="social-link">
                      <li>
                        <a
                          href={process.env.NEXT_PUBLIC_FACEBOOK_LINK}
                          target="_blank"
                        >
                          <FaFacebookF size={22} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={process.env.NEXT_PUBLIC_INSTA_LINK}
                          target="_blank"
                        >
                          <FaInstagram size={22} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={process.env.NEXT_PUBLIC_LINKDIN_LINK}
                          target="_blank"
                        >
                          <FaLinkedin size={22} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="blog-list mb-3">
                  {filteredData
                    ?.filter((blog) =>
                      blog.title.toLowerCase().includes(searchQuery)
                    )
                    .map((item, index) => {
                      return (
                        <div className="blog-list-single-item" key={index}>
                          <div className="inner-shape inner-shape-top-right"></div>
                          <Link href={`/blog/${item.slug}`} className="image">
                            <Image
                              src={item?.image}
                              height={200}
                              width={350}
                              quality={90}
                              className=""
                              alt="Developer Shyam"
                              style={{
                                backgroundSize: "cover",
                                borderRadius: "10px",
                              }}
                            />
                          </Link>
                          <div className="content">
                            <div className="post-meta-1">
                              <Link
                                href={`/blog/${item.slug}`}
                                className="catagory"
                              >
                                {item.category}
                              </Link>
                              <Link
                                href={`/blog/${item.slug}`}
                                className="date"
                              >
                                {dayjs(item.createdAt.seconds * 1000).format(
                                  "DD MMM, YY"
                                )}
                              </Link>
                            </div>
                            <h4 className="title">
                              <Link href={`/blog/${item.slug}`}>
                                {item.title}
                              </Link>
                            </h4>

                            <div className="post-meta-2">
                              <Link
                                href={`/blog/${item.slug}`}
                                className="icon-space-right"
                              >
                                <FaUser size={22} />{" "}
                                {process.env.NEXT_PUBLIC_NAME}{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
  );
};

export default BlogList;
