"use client";
import Link from "next/link";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import init from "@/firebase";
import Image from "next/image";
const ProjectList = () => {
  const [data, setData] = useState([]);
  const getProjects = async () => {
    const mycollection = collection(init.db, "projects");
    let q = query(mycollection, orderBy("createdAt", "desc"));
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
                  <h2 className="title">Complete Projects</h2>
                  <ul className="breadcrumb-link">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active" aria-current="page">
                      Complete Projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section section-gap-tb-165">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="projects-wrapper-gallery-content">
                <div className="row">
                  {data?.map((item, index) => {
                    return (
                      <div
                        className="col-md-6  filter-item industwordpressrial"
                        key={index}
                      >
                        <div className="project-box-single-item">
                          <div className="img-box">
                            <div className="bg-overlay"></div>
                            <div className="bg-image">
                              <Image
                                src={item.image}
                                height={250}
                                width={400}
                                quality={90}
                                className="img-fluid"
                                alt="Developer Shyam"
                              />
                            </div>
                            <div className="image">
                              <Image
                                src={item.image}
                                height={250}
                                width={400}
                                quality={90}
                                className="img-fluid"
                                alt="Developer Shyam"
                              />
                            </div>
                          </div>
                          <div className="content">
                            <h4 className="title">{item.title}</h4>
                            <ul className="catagory-nav-item">
                              <li>{item.language}</li>
                            </ul>
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
      </div>
    </>
  );
};

export default ProjectList;
