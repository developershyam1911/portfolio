"use client"
import Link from 'next/link'
import { MdDownload, MdPlayCircle } from "react-icons/md";
const About = () => {
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
                                <h2 className="title">About Us</h2>
                                <ul className="breadcrumb-link">
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active" aria-current="page">About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              <div className="video-info-display-section section-gap-tb-165">
            <div className="video-info-display-box">
                <div className="container">
                    <div className="video-info-display-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-3 offset-lg-0">
                                <div className="video-card">
                                    <a className="wave-btn" href="https://www.youtube.com/@devshyamtech" data-autoplay="true" data-vbtype="video"><div className="ripple"> <MdPlayCircle size={22}/></div></a>
                                    <a href={process.env.NEXT_PUBLIC_RESUME} className="btn btn-xl btn-outline-one icon-space-left">Get Resume <MdDownload size={22} /></a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-8 offset-md-2 offset-lg-0 offset-xl-1">
                                <div className="video-info-content">
                                    <h2 className="title">I’m {process.env.NEXT_PUBLIC_NAME}</h2>

                                    <h3 className="sub-title">
                                    MERN: Full-stack efficiency.
                                    </h3>
                                    <p style={{textAlign:'justify'}}>Expert in creating dynamic and robust web applications using the MERN stack (MongoDB, Express, React, Node.js). Skilled in Laravel, React Native, and Next.js for versatile and scalable solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="resume-info-display-section  section-gap-tb-165 section-bg">
            <div className="resume-info-display-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="resume-tab nav">
                                <li className="nav-item">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#education-tab">Education</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#experience-tab">Experience</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-info-display-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="education-tab" role="tabpanel">
                                        <ul className="resume-list">
                                            <li className="resume-tab-list-single-item">
                                                <div className="content">
                                                    <div className="left">
                                                        <span className="year">2020 - 2023</span>
                                                    </div>
                                                    <div className="right">
                                                        <h3 className="title">Polytechnic (Diploma)</h3>
                                                        <span className="institute-name">Mahatma Jyotiba Phule Govt. Polytechnic, Kaushambi</span>
                                                        <p style={{textAlign:'justify'}}>Completed a diploma in Computer Science from Mahatma Jyotiba Phule Govt. Polytechnic, Kaushambi (2020-2023). Developed a strong foundation in software development, algorithms, and web technologies.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="resume-tab-list-single-item">
                                                <div className="content">
                                                    <div className="left">
                                                        <span className="year">Present</span>
                                                    </div>
                                                    <div className="right">
                                                        <h3 className="title">Bachelor of Technology.</h3>
                                                        <span className="institute-name">Dr. Rizvi College of Engineering, Kaushambi</span>
                                                        <p style={{textAlign:'justify'}}>Currently pursuing a B.Tech in Computer Science at Dr. Rizvi College of Engineering, Kaushambi, and in my second year. This program is enhancing my knowledge in advanced computing concepts, software engineering principles, and emerging technologies. </p>
                                                    </div>
                                                </div>
                                            </li>
                                   
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="experience-tab" role="tabpanel">
                                        <ul className="resume-list">
                                            <li className="resume-tab-list-single-item">
                                                <div className="content">
                                                    <div className="left">
                                                        <span className="year">2022 - 2023</span>
                                                    </div>
                                                    <div className="right">
                                                        <h3 className="title">Internship</h3>
                                                        <span className="institute-name">Full Stack Development</span>
                                                        <p style={{textAlign:'justify'}}>During my six-month internship at Event Planet Technologies India Pvt Ltd in Lucknow, I gained practical experience and enhanced my skills in various web development technologies. I worked extensively with React.js for building dynamic user interfaces, Node.js and Express.js for developing server-side applications, Next.js for server-side rendering and static site generation, and MongoDB for managing databases. This hands-on experience helped me understand the full stack development process and apply my knowledge to real-world projects.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="resume-tab-list-single-item">
                                                <div className="content">
                                                    <div className="left">
                                                        <span className="year">Present</span>
                                                    </div>
                                                    <div className="right">
                                                        <h3 className="title">Full Stack Developer</h3>
                                                        <span className="institute-name">Mern Stack Developer</span>
                                                        <p style={{textAlign:'justify'}}>I am currently working at Event Planet Technologies India Pvt Ltd in Lucknow, where I have been employed for the past year. In this role, I am primarily focused on the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. My responsibilities involve developing and maintaining web applications, creating dynamic user interfaces, building RESTful APIs, and managing databases. This position has allowed me to deepen my expertise in full stack development and contribute to various innovative projects within the company.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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

export default About
