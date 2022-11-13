import React from 'react'
import './footer.css'
import logo from "../../assets/new/heyjobs logo.png"
//social icons
import fb from "../../assets/fb.png"
import twt from "../../assets/twt.png"
import ln from "../../assets/ln.png"
import google from "../../assets/google.png"
//payment icons
import appstore from "../../assets/appStore.png"
import gp from "../../assets/gpay.png"
//businesses icons
import nnacres from "../../assets/nnacres.png"
import ng from "../../assets/ng.png"
import jeevansathi from "../../assets/jeevansathi.png"
import firstNaukri from "../../assets/firstNaukri.png"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='jobLooking'>
            <div>
                <h3>Looking For a Job</h3>
                <p>Your next level product development company asset your next level product</p>
            </div>
            <a href='/dashboard/resume'>
                <button>Submit Your Resume</button>
            </a>
        </div>
        <div className='footerMain'>
            <div className="up">
                <div className='logo'>
                    <div className="niyukti">
                        <img src={logo} alt="" />
                    </div>
                    <div className="social">
                        <p>Connect with us</p>
                        <div className="social-logo">
                            <img src={fb} alt="" />
                            <img src={ln} alt="" />
                            <img src={twt} alt="" />
                            <img src={google} alt="" />
                        </div>
                    </div>
                </div>
                <div className='list'>
                    <div className="list1">
                        <a href="https://niyukti.netlify.app/">About us</a>
                        <a href="https://niyukti.netlify.app/">Careers</a>
                        <a href="https://niyukti.netlify.app/">Employer home</a>
                        
        
                    </div>
                    <div className="list2">
                        <a href="https://niyukti.netlify.app/">Help center</a>
                        <a href="https://niyukti.netlify.app/">Summons/Notices</a>
                        <a href="https://niyukti.netlify.app/">Grievances</a>
                        
                    </div>
                    <div className="list3">
                        <a href="https://niyukti.netlify.app/">Privacy policy</a>
                        <a href="https://niyukti.netlify.app/">Terms & conditions</a>
                        <a href="https://niyukti.netlify.app/">Fraud alert</a>
                        
                    </div>
                    <div className="list4">
                        <a href="https://niyukti.netlify.app/">Sitemap</a>
                        <a href="https://niyukti.netlify.app/">Report issue</a>
                        <a href="https://niyukti.netlify.app/">Trust & safety</a>
                    </div>
                </div>
                <div className='store'>
                    <div className="store-head">
                        <h4>Coming Soon</h4>
                    </div>
                    <div className="store-para">
                        
                    </div>
                    <div className="store-app">
                        <img src={gp} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="down">
                <div className="left">
                    <div className="p">
                        <p>All trademarks are the property of their respective owners.</p>
                        <p>All rights reserved © 2022 Info Edge (India) Ltd.</p>
                    </div>
                    
                </div>

                <div className="right">
                    <p className="p">Our Businesses</p>
                    {/* <div className="businessImage">
                        <img src={jeevansathi} alt="" />
                        <img src={ng} alt="" />
                        <img src={nnacres} alt="" />
                        <img src={firstNaukri} alt="" />
                    </div> */}
                    
                </div>
            </div>
        </div>

    </div>
  )
}
