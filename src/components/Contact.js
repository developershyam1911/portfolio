"use client"

import Link from "next/link"
import { useState } from "react"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import init from "@/firebase";
import Swal from 'sweetalert2'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        subject: '',
        message: '',
        email: '',
        mobno: '',
    })
    const formHanler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        const { name, subject, email, mobno, message } = data
        if (name !== "" && subject !== "" && email !== "" && mobno !== '' && message !== '') {
            try {
                await addDoc(collection(init.db, 'enquiry'), {
                    name, subject, email, mobno, message, createdAt: serverTimestamp()
                })
                Swal.fire('Your Message Send Successfully', '', 'success');
                setData({
                    name: '',
                    subject: '',
                    message: '',
                    email: '',
                    mobno: '',
                })
                
            } catch (err) {
                console.log(err)
            }
        } else {
            Swal.fire('All field is Required', 'Please fill all the required filled !', 'error');
        }
    }
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
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active" aria-current="page">Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-section section-gap-tb-165">
                <div class="contact-box pos-relative">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="map">
                                    <div class="gmap-box">
                                        <iframe id="gmap_canvas" src='https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed'></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row flex-lg-row flex-column-reverse">
                            <div class="col-lg-4">
                                <div class="contact-sidebar-wapper">
                                    <div class="contact-sidebar">
                                        <ul class="contact-sidebar-list-item">
                                            <li class="contact-sidebar-single-box">
                                                <h6 class="title-text">Phone:</h6>
                                                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NO}`} class="link">{process.env.NEXT_PUBLIC_PHONE_NO}</a>
                                            </li>
                                            <li class="contact-sidebar-single-box">
                                                <h6 class="title-text">Email:</h6>
                                                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`} class="link">{process.env.NEXT_PUBLIC_EMAIL_ID}</a>
                                            </li>
                                            <li class="contact-sidebar-single-box">
                                                <h6 class="title-text">Website:</h6>
                                                <a href={process.env.NEXT_PUBLIC_WEB_URL} class="link">{process.env.NEXT_PUBLIC_WEB_URL}</a>
                                            </li>
                                            <li class="contact-sidebar-single-box">
                                                <h6 class="title-text">Address:</h6>
                                                <span class="text"> {process.env.NEXT_PUBLIC_ADDRESS}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-widget-single-area ">
                                        <h3 class="title">Follow Me</h3>
                                        <ul class="social-link">
                                            <li><a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank"><FaFacebookF size={22} /></a></li>
                                            <li><a href={process.env.NEXT_PUBLIC_INSTA_LINK} target="_blank"><FaInstagram size={22} /></a></li>
                                            <li><a href={process.env.NEXT_PUBLIC_LINKDIN_LINK} target="_blank"><FaLinkedin size={22} /></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 offset-lg-1">
                                <div class="contact-form-wrapper section-mt-165">
                                    <div class="content">
                                        <span class="section-tag">Get In Touch</span>
                                        <h2 class="title">If you have any porject or need help. Contact me</h2>
                                    </div>
                                    <div class="contact-form-box">
                                        <form id="contact-form" class="default-form contact-form"  >
                                            <div class="row mb-n6">
                                                <div class="col-xl-6 mb-6">
                                                    <div class="default-form-group">
                                                        <input name="name" type="text" placeholder="Name" value={data.name} onChange={formHanler} />
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 mb-6">
                                                    <div class="default-form-group">
                                                        <input name="email" type="email" placeholder="Email" value={data.email} onChange={formHanler} />
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 mb-6">
                                                    <div class="default-form-group">
                                                        <input name="mobno" type="number" max={12} minLength={10} placeholder="Phone" value={data.mobno} onChange={formHanler} />
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 mb-6">
                                                    <div class="default-form-group">
                                                        <input name="subject" type="text" placeholder="Subject" value={data.subject} onChange={formHanler} />
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 mb-6">
                                                    <div class="default-form-group">
                                                        <textarea name="message" value={data.message} onChange={formHanler} placeholder="Comment" ></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-6">
                                                    <div class="default-form-group tex-center">
                                                        <button type="submit" class="btn btn-lg btn-outline-one" onClick={submitHandler}>Submit Message</button>
                                                    </div>
                                                </div>
                                                <p class="form-messege"></p>
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
    )
}

export default Contact
