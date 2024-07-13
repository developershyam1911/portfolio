"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdDownload, MdPlayArrow, MdPlayCircle } from "react-icons/md";

const Intro = () => {
  return (
    <div className="hero-section section-dark-blue-bg">
      <div className="hero-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7">
              <div className="hero-content">
                <h3 className="title-big">Hello! I’m</h3>
                <h2 className="title-large">{process.env.NEXT_PUBLIC_NAME}</h2>
                <p>Full Stack Developer </p>
                {/* <p style={{textAlign:'justify'}} className="p-2">Expert in creating dynamic and robust web applications using the MERN stack (MongoDB, Express, React, Node.js). Skilled in Laravel, React Native, and Next.js for versatile and scalable solutions.</p> */}
                <a
                  href={process.env.NEXT_PUBLIC_RESUME}
                  className="btn btn-xl btn-outline-one icon-space-left"
                >
                  Get Resume <MdDownload size={22} />
                </a>
                {/* <div className="video-link">
                            <a className="wave-btn" href="https://youtu.be/MKjhBO2xQzg" data-autoplay="true" data-vbtype="video">
                                <div className="ripple"><MdPlayCircle size={22}/></div>
                            </a>
                            <span className="video-text"> Watch Video</span>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape hero-top-shape">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-shape hero-bottom-shape">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-portrait">
          <div className="image">
            <Image
              src="/assets/images/portrait/portrait-hero.png"
              height={1300}
              width={650}
              quality={90}
              className="img-fluid"
              alt="Developer Shyam"
            />
            <div className="image-half-round-shape"></div>
            <div className="social-link">
              <a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank">
                <FaFacebookF size={22} />
              </a>
              <a href={process.env.NEXT_PUBLIC_INSTA_LINK} target="_blank">
                <FaInstagram size={22} />
              </a>
              <a href={process.env.NEXT_PUBLIC_LINKDIN_LINK} target="_blank">
                <FaLinkedin size={22} />
              </a>
              <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank">
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
