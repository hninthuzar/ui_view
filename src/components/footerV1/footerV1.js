import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import './footerV1.scss';

import logo from './img/footer-logo-z.png';
import fb from './img/fbz.png';
import phone from './img/hotline.png';
import instagram from './img/instaz.png';
import linkedin from './img/linkz.png';
import location from './img/location.png';
import support from './img/support.png';
import twitter from './img/twiz.png';
import footerbgimg from './img/footerbg-img.png';

function FooterV1 (props) {

  useEffect(() => {

  }, []);


  return(
    <footer className="relative footerV1">
      <section className="relative bg-footerbg">
          <div className="containerv2 mx-auto">
              <div className="flex py-10 xl:py-14 items-center flex-wrap">
                  <div className="w-full md:w-1/2 md:max-w-md mb-5 md:mb-0">
                    <h4 className='text-white text-[1.6rem] lg:text-[30px] 3xl:text-[2rem] font-bold'>Subscribe Newslatter & get KBZ Money Alerts</h4>
                  </div>
                  <div className="w-full md:w-1/2 ml-auto">
                    <form action="#" className=' flex w-full flex-wrap'>
                        <input type="email" name="mail" placeholder='Email address' className=' mb-2 4xs:mb-0 h-10 lg:h-auto focus-visible:outline-none basis-full 4xs:flex-1 4xs:mr-5 bg-transparent rounded-lg py-3 xl:py-3 px-4 xl:px-5 border-2 border-solid border-white'/>
                        <button className="w-full 4xs:w-auto h-10 lg:h-auto py-2 xl:py-3  px-6 xl:px-10 bg-white  text-darkbluez font-semibold rounded-lg">Subscribe</button>
                    </form>
                  </div>
              </div>
          </div>
      </section>
      <section className="relative bg-darkbluez">
          <div className="relative containerv2 mx-auto z-10">
              <div className="flex pt-7 md:pt-14 lg:pt-20 pb-5 md:pb-7 lg:pb-12 items-center flex-wrap">
                  <div className="mb-6 lg:mb-0 flex-1 lg:flex-auto w-full lg:w-2/5">
                     <div className="footer-logo mb-5">
                        <Link to="/"><img src={logo} alt="" className='max-w-[250px] sm:max-w-[280px]'/></Link>
                     </div>
                     <div className="flex mb-4">
                        <div className=' w-4 mr-3 mt-1'>
                          <img src={location} alt="" />
                        </div>
                        
                        <p className='text-white'>1250 Capital of Texas Hwy. South Building 3, Suite 400 Austin, TX 78746</p>
                     </div>
                     <div className="flex mb-4 mt-1">
                        <div className=' w-4 mr-3'>
                          <img src={support} alt="" />
                          </div>
                        <p className=' text-white'>Support: admin@kbzmoney.com</p>
                     </div>
                     <div className="flex">
                        <div className=' w-4 mr-3 mt-1'>
                          <img src={phone} alt="" />
                          </div>
                        <p className=' text-white'>Hotline: +959 7980 65880</p>
                     </div>
                  </div>
                  <div className=" justify-between lg:justify-end w-full lg:w-3/5 flex flex-wrap">
                      <div className="mb-5 xs:mb-0 lg:ml-auto w-full 4xs:w-1/2 xs:w-1/3 text-white">
                          <h5 className=' text-[20px] font-semibold mb-5 lg:mb-7'>Quick Links</h5>
                          <ul>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Home</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Services</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>AML Technology</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Crypto Currencies</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Crypto Currencies</a></li>
                          </ul>
                      </div>
                      <div className="mb-5 xs:mb-0 w-full 4xs:w-1/2 xs:w-1/3 text-white">
                          <h5 className=' hidden xs:block text-[20px] font-semibold mb-7 opacity-0'>Other</h5>
                          <ul>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Contact</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>About Us</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Client Support</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Alerts</a></li>
                          </ul>
                      </div>
                      <div className="w-full 4xs:w-auto text-white">
                          <h5 className=' text-[20px] font-semibold mb-7'>About us</h5>
                          <ul>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Disclaimer</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Privacy Policy</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Terms of Service</a></li>
                            <li><a href="#" className='leading-5 mb-3 lg:mb-4 inline-block'>Carrier</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className='relative bg-darkbluez '>
         <div className='relative containerv2 mx-auto z-10'>
            <div className="flex justify-center md:justify-between py-5 lg:py-7 border-t-[1px] border-white flex-wrap">
                <div className="justify-center md:justify-start w-full md:w-auto lg:w-1/2 flex items-center mb-3 md:mb-0">
                  <p className='text-center md:text-left text-white'>Copyright © 2022 <span className=' text-[#E68523]'>KBZ Money</span>. All Rights Reserved. </p>
                </div>
                <div className="w-full md:w-auto lg:w-1/2  flex justify-center md:justify-end">
                    <div className="footer-social-img mr-4 md:ml-auto z-10"><a href='#' target="_blank"><img src={fb} alt="" /></a></div>
                    <div className="footer-social-img mr-4 z-10"><a href='#' target="_blank"><img src={linkedin} alt="" /></a></div>
                    <div className="footer-social-img mr-4 z-10"><a href='#' target="_blank"><img src={instagram} alt="" /></a></div>
                    <div className="footer-social-img z-10"><a href='#' target="_blank"><img src={twitter} alt="" /></a></div>
                </div>
            </div>
         </div>
      </section>
      <div className='absolute bottom-0 left-0 h-[200px] xl:h-[230px]'>
        <img src={footerbgimg} alt="footerbgimg" className='object-cover w-full h-full'/>
      </div>
    </footer>
  )
}


export default (FooterV1);