"use client";

import Image from "next/image";

const Clients = () => {
  return (
    <div className="counter-display-section section-gap-tb-165 section-bg-2">
    <div className="counter-display-wrapper">
        <div className="container">
            <div className="row justify-content-center justify-content-sm-start">
                <div className="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">
                    <div className="counterup-single-item">
                        <div className="icon">
                        <Image src="/assets/images/icon/counterup-icon-1.png" height={50} width={50} quality={90} className="img-fluid" alt="Developer Shyam" />
                        </div>
                        <div className="content">
                            <h2 className="number"><span className="counter">20</span>+</h2>
                            <span className="text">Happy Clients</span>
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-4">
                    <div className="counterup-single-item">
                        <div className="icon">
                        <Image src="/assets/images/icon/counterup-icon-2.png" height={50} width={50} quality={90} className="img-fluid" alt="Developer Shyam" />
                        </div>
                        <div className="content">
                            <h2 className="number"><span className="counter">20</span>+</h2>
                            <span className="text">Project Complete</span>
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4">
                    <div className="counterup-single-item">
                        <div className="icon">
                        <Image src="/assets/images/icon/counterup-icon-3.png" height={50} width={50} quality={90} className="img-fluid" alt="Developer Shyam" />

                        </div>
                        <div className="content">
                            <h2 className="number"><span className="counter">2</span>+</h2>
                            <span className="text">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Clients
