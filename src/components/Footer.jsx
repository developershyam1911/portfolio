"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaGithubAlt,
  FaHeart,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail, MdHeartBroken, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer-section section-bg overflow-hidden pos-relative">
        <div className="footer-inner-shape-top-left"></div>
        <div className="footer-inner-shape-top-right"></div>

        <div className="footer-center section-gap-tb-165">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-n5">
              <div className="col-auto mb-3">
                <div className="footer-single-info">
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE_NO}`}
                    className="info-box"
                  >
                    <span className="icon">
                      <MdPhone size={22} />
                    </span>
                    <span className="text">
                      {process.env.NEXT_PUBLIC_PHONE_NO}
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-auto mb-3">
                <div className="footer-single-info">
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`}
                    className="info-box"
                  >
                    <span className="icon">
                      <MdEmail size={22} />
                    </span>
                    <span className="text">
                      {process.env.NEXT_PUBLIC_EMAIL_ID}
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-auto mb-3">
                <div className="footer-single-info">
                  <ul className="social-link">
                    {/* <li>
                      <a
                        href={process.env.NEXT_PUBLIC_FACEBOOK_LINK}
                        target="_blank"
                      >
                        <FaFacebookF size={22} />
                      </a>
                    </li> */}
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
                    <li>
                      <a
                        href={process.env.NEXT_PUBLIC_GITHUB_LINK}
                        target="_blank"
                      >
                        <FaGithub size={22} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-center justify-content-md-between align-items-center flex-column-reverse flex-md-row">
              <div className="col-auto">
                <div className="footer-copyright">
                  <p className="copyright-text">
                    &copy; 2024 <a href="/">devshyamtech</a> Made with{" "}
                    <FaHeart size={22} color="white" /> by{" "}
                    <a href="https://devshyamtech.in/" target="_blank">
                      Shyam
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="col-auto">
                <a href="/" className="footer-logo">
                  <div className="logo">
                    <Image
                      src={process.env.NEXT_PUBLIC_LOGO}
                      height={120}
                      width={150}
                      quality={90}
                      className="img-fluid"
                      alt="Developer Shyam"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
