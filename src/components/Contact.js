"use client";

import Link from "next/link";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import init from "@/firebase";
import Swal from "sweetalert2";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
    mobno: "",
  });
  const formHanler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, subject, email, mobno, message } = data;
    if (
      name !== "" &&
      subject !== "" &&
      email !== "" &&
      mobno !== "" &&
      message !== ""
    ) {
      try {
        await addDoc(collection(init.db, "enquiry"), {
          name,
          subject,
          email,
          mobno,
          message,
          createdAt: serverTimestamp(),
        });
        Swal.fire("Your Message Send Successfully", "", "success");
        setData({
          name: "",
          subject: "",
          message: "",
          email: "",
          mobno: "",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      Swal.fire(
        "All field is Required",
        "Please fill all the required filled !",
        "error"
      );
    }
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
                  <h2 className="title">Contact Us</h2>
                  <ul className="breadcrumb-link">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active" aria-current="page">
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section section-gap-tb-165">
        <div className="contact-box pos-relative">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="map">
                  <div className="gmap-box">
                    <h4>
                      Location: Captain Manoj Pandey Chauraha, Gomti Nagar,
                      Lucknow
                    </h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0489423961296!2d80.992175!3d26.8535656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2cef6d7237f%3A0xc11e4da2f4a7652!2sCaptain%20Manoj%20Pandey%20Chauraha%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1699717123472!5m2!1sen!2sin"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex-lg-row flex-column-reverse">
              <div className="col-lg-4">
                <div className="contact-sidebar-wapper">
                  <div className="contact-sidebar">
                    <ul className="contact-sidebar-list-item">
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Phone:</h6>
                        <a
                          href={`tel:${process.env.NEXT_PUBLIC_PHONE_NO}`}
                          className="link"
                        >
                          {process.env.NEXT_PUBLIC_PHONE_NO}
                        </a>
                      </li>
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Email:</h6>
                        <a
                          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`}
                          className="link"
                        >
                          {process.env.NEXT_PUBLIC_EMAIL_ID}
                        </a>
                      </li>
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Website:</h6>
                        <a
                          href={process.env.NEXT_PUBLIC_WEB_URL}
                          className="link"
                        >
                          {process.env.NEXT_PUBLIC_WEB_URL}
                        </a>
                      </li>
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Address:</h6>
                        <span className="text">
                          {" "}
                          {process.env.NEXT_PUBLIC_ADDRESS}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget-single-area ">
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
              <div className="col-lg-7 offset-lg-1">
                <div className="contact-form-wrapper section-mt-165">
                  <div className="content">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="title">
                      If you have any porject or need help. Contact me
                    </h2>
                  </div>
                  <div className="contact-form-box">
                    <form
                      id="contact-form"
                      className="default-form contact-form"
                    >
                      <div className="row mb-n6">
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="name"
                              type="text"
                              placeholder="Name"
                              value={data.name}
                              onChange={formHanler}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="email"
                              type="email"
                              placeholder="Email"
                              value={data.email}
                              onChange={formHanler}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="mobno"
                              type="number"
                              max={12}
                              minLength={10}
                              placeholder="Phone"
                              value={data.mobno}
                              onChange={formHanler}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="subject"
                              type="text"
                              placeholder="Subject"
                              value={data.subject}
                              onChange={formHanler}
                            />
                          </div>
                        </div>
                        <div className="col-xl-12 mb-6">
                          <div className="default-form-group">
                            <textarea
                              name="message"
                              value={data.message}
                              onChange={formHanler}
                              placeholder="Comment"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12 mb-6">
                          <div className="default-form-group tex-center">
                            <button
                              type="submit"
                              className="btn btn-lg btn-outline-one"
                              onClick={submitHandler}
                            >
                              Submit Message
                            </button>
                          </div>
                        </div>
                        <p className="form-messege"></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
