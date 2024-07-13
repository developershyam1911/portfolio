"use client";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import init from "@/firebase";
import { MdDownload } from "react-icons/md";
const Skills = () => {
  const [data, setData] = useState([]);
  const getSkills = async () => {
    const mycollection = collection(init.db, "skills");
    let q = query(mycollection, orderBy("createdAt", "desc"));
    const data = await getDocs(q);
    setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };
  useEffect(() => {
    getSkills();
  }, []);
  //  const [data, setData] = useState([
  //     {
  //         title:'React Js',
  //         persent:80
  //     },
  //     {
  //         title:'Next Js',
  //         persent:80
  //     },
  //     {
  //         title:'React Native',
  //         persent:60
  //     },
  //     {
  //         title:'Node & Express',
  //         persent:70
  //     }
  //  ])
  return (
    <div className="skill-display-section section-gap-tb-165 section-bg pos-relative">
      <div className="skill-display-section-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-xxl-5">
              <div className="section-content">
                <span className="section-tag">Special Skills</span>
                <h2 className="section-title">My Special Skill Field Here.</h2>
                <a
                  href={process.env.NEXT_PUBLIC_RESUME}
                  className="btn btn-xl btn-outline-one icon-space-left"
                >
                  Get Resume <MdDownload size={22} />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-6 offset-xxl-1">
              <div className="skill-display-wrapper">
                {data?.map((item, i) => {
                  return (
                    <div className="skill-progress-single-item" key={i}>
                      <span className="tag">{item.title}</span>
                      <ProgressBar
                        striped
                        variant="primary"
                        now={item.persent}
                        label={`${item.persent}%`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-display-shape"></div>
    </div>
  );
};

export default Skills;
