import React, { useState, useEffect, createRef } from 'react';
import bg from './img/home-bg-new.png';
import tech from './img/tech.png';
import out from './img/outsourcing.png';
import cur from './img/currencies.png';
import arrowBlue from './img/ar-blue.png';
import './homeBanner.scss'

function HomeBanner (props) {
  

  return(
    <div className='homeBanner'>
      <section className='pb-[250px] xl:pb-[335px] pt-20 xl:pt-32 bg-center' style={{ backgroundImage: `url(${bg})` }}>
        <div className=' containerv2 mx-auto relative'>
            <div className=' w-full'>
                <h2 className='text-[1.75rem] sm:text-3xl lg:text-4xl 3xl:text-[42px] leading-[36px] sm:leading-[42px] lg:leading-[50px] 3xl:leading-[56px] font-bold max-w-[608px] mb-5'><span className=' text-[#015EB9]'>KBZ Money</span> compass anti moneylaundering technology and services redefined</h2>
                <p className=' text-[17px] text-[#4F5A5E] max-w-lg mb-7 lg:mb-10'>KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership.</p>  
                <a href="#" className="text-sm sm:text-[0.938rem] flex items-center justify-center rounded-full w-[198px] h-[45px] lg:h-[50px] bg-dangerz text-white"><span className="mr-[10px]">Get Started</span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><g clipPath="url(#clip0_1_830)"><path d="M21.1933 9.08407L17.6458 5.49991C17.5606 5.41399 17.4592 5.3458 17.3475 5.29926C17.2358 5.25272 17.116 5.22876 16.995 5.22876C16.874 5.22876 16.7542 5.25272 16.6425 5.29926C16.5308 5.3458 16.4294 5.41399 16.3442 5.49991C16.1734 5.67166 16.0776 5.90399 16.0776 6.14616C16.0776 6.38833 16.1734 6.62066 16.3442 6.79241L19.6075 10.0832H0.916667C0.673552 10.0832 0.440394 10.1798 0.268485 10.3517C0.0965771 10.5236 0 10.7568 0 10.9999H0C0 11.243 0.0965771 11.4762 0.268485 11.6481C0.440394 11.82 0.673552 11.9166 0.916667 11.9166H19.6625L16.3442 15.2257C16.2583 15.311 16.1901 15.4123 16.1435 15.524C16.097 15.6358 16.073 15.7556 16.073 15.8766C16.073 15.9976 16.097 16.1174 16.1435 16.2291C16.1901 16.3408 16.2583 16.4422 16.3442 16.5274C16.4294 16.6133 16.5308 16.6815 16.6425 16.7281C16.7542 16.7746 16.874 16.7986 16.995 16.7986C17.116 16.7986 17.2358 16.7746 17.3475 16.7281C17.4592 16.6815 17.5606 16.6133 17.6458 16.5274L21.1933 12.9707C21.7083 12.4551 21.9976 11.7562 21.9976 11.0274C21.9976 10.2987 21.7083 9.5997 21.1933 9.08407Z" fill="white"></path></g><defs><clipPath id="clip0_1_830"><rect width="22" height="22" fill="white"></rect></clipPath></defs></svg></a>
            </div>
            {/* <div className=' absolute top-0 right-0'>
                <img src={img} alt="" />
            </div> */}
        </div>
      </section>
      <section className=' 3col -mt-36'>
            <div className=' containerv2 mx-auto'>
                <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                   <div className="bg-white py-10 px-7 rounded-md shadow-md cursor-pointer active">
                      <div className="img-wrapper mb-6">
                          <img src={tech} alt="" />
                      </div>
                      <h3 className='text-[17px] font-medium mb-4 text-[#082A36]'>AML Technology</h3>
                      <p className='mb-4 text-sm'>KBZ Money’s AML Compass Platform combines cutting-edge technology and proven...</p>
                      <a href="#" className=' text-[#015EB9] text-[13px]'>Get Started <img src={arrowBlue} alt="" className=' inline-block ml-1' /></a>
                   </div>
                   <div className="bg-white py-10 px-7 rounded-md shadow-md cursor-pointer">
                      <div className="img-wrapper mb-6">
                          <img src={out} alt="" />
                      </div>
                      <h3 className='text-[17px] font-medium mb-4 text-[#082A36]'>AML Outsourcing</h3>
                      <p className='mb-4 text-sm'>Compliance as a Service ™ or CAS delivers not just systems through its AML Compass...</p>
                      <a href="#" className=' text-[#015EB9] text-[13px]'>Get Started <img src={arrowBlue} alt="" className=' inline-block ml-1' /></a>
                   </div>
                   <div className="bg-white py-10 px-7 rounded-md shadow-md cursor-pointer">
                      <div className="img-wrapper mb-6">
                          <img src={cur} alt="" />
                      </div>
                      <h3 className='text-[17px] font-medium mb-4 text-[#082A36]'>Crypto Currencies</h3>
                      <p className='mb-4 text-sm'>The Crypto currency market is one of the most exciting and rapidly developing...</p>
                      <a href="#" className=' text-[#015EB9] text-[13px]'>Get Started <img src={arrowBlue} alt="" className=' inline-block ml-1' /></a>
                   </div>
                </div>
            </div>
      </section>
    </div>
    
  )
}


export default (HomeBanner);