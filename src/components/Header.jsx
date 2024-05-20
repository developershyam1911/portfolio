'use client';
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';
const Header = () => {
    const [toggle , setToggle] = useState(false)
  return (
    <>
      <header className="header-section sticky-header d-none d-lg-block sticky">
            <div className="header-wrapper">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col">
                            <a href="/" className="header-logo">
                            <Image src={process.env.NEXT_PUBLIC_LOGO} height={120} width={150} quality={90} className="img-fluid" alt="Developer Shyam" />
                            </a>
                        </div>
                        <div className="col-auto">
                            <ul className="header-nav">
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/services'>Services</Link></li>
                                <li><Link href='/blog'>Blog</Link></li>
                                <li><Link href='/about-us'>About Us</Link></li>
                                <li><Link href='/projects'>Projects</Link></li>
                                <li><Link href='/contact-us'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="header-btn-link text-end">
                                <Link href='/contact-us' className="btn btn-sm btn-outline-one icon-space-left">Hire Me </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="mobile-header d-block d-lg-none">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col">
                        <div className="mobile-logo">
                            <Link href='/'>
                            <Image src={process.env.NEXT_PUBLIC_LOGO} height={100} width={100} quality={90} className="img-fluid" alt="Developer Shyam" />
                                </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mobile-action-link text-end">
                            <a  className="offcanvas-toggle offside-menu"><MdMenu onClick={()=>setToggle(true)}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="mobile-menu-offcanvas" className={`${toggle ? 'offcanvas offcanvas-rightside offcanvas-mobile-menu-section offcanvas-open' : 'offcanvas offcanvas-rightside offcanvas-mobile-menu-section '}`}>

            <div className="offcanvas-header text-end">
                <button className="offcanvas-close"><MdClose onClick={()=>setToggle(false)}/></button>
            </div>
            <div className="offcanvas-mobile-menu-wrapper">
                <div className="mobile-menu-bottom">
                    <div className="offcanvas-menu">
                        <ul>
                                <li onClick={()=>setToggle(false)}><Link href='/'>Home</Link></li>
                                <li onClick={()=>setToggle(false)}><Link href='/services'>Services</Link></li>
                                <li onClick={()=>setToggle(false)}><Link href='/blog'>Blog</Link></li>
                                <li onClick={()=>setToggle(false)}><Link href='/about-us'>About Us</Link></li>
                                <li onClick={()=>setToggle(false)}><Link href='/projects'>Projects</Link></li>
                                <li onClick={()=>setToggle(false)}><Link href='/contact-us'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-contact-info text-center">
                    <ul className="social-link">
                    <li><a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank"><FaFacebookF size={22}/></a></li>
                      <li><a href={process.env.NEXT_PUBLIC_INSTA_LINK} target="_blank"><FaInstagram size={22} /></a></li>
                      <li><a href={process.env.NEXT_PUBLIC_LINKDIN_LINK} target="_blank"><FaLinkedin size={22}/></a></li>
                 
                    </ul>
                </div>
            </div> 
        </div>
        <div className="offcanvas-overlay" style={{display:`${toggle?'block':'none'}`}}></div>
    </>
  )
}

export default Header
