import React, { useState, useEffect, createRef } from 'react';
import './standOut.scss';
import img1 from "./img/sout-img1.png";

function StandOut (props) {

  useEffect(() => {

  }, []);


  return(
    <section className="relative py-[60px] sm:py-20 xl:py-[100px] 4xl:py-[120px] mx-auto containerv2 standOut">
    <div className='flex flex-wrap lg:flex-nowrap items-end'>
      <div className='w-full lg:w-1/2 lg:mr-7 3xl:mr-9 mb-10 lg:mb-0'>
        <img src={img1} alt="img1" />
      </div>
      <div className='w-full lg:w-1/2 lg:ml-7 3xl:ml-9'>
        <h3 className='mb-[25px] text-blackz text-2xl sm:text-3xl 3xl:text-[2.375rem] max-w-[395px] leading-[40px] sm:leading-[50px] 3xl:leading-[60px]'>Why We Stand Out in the Industry </h3>
        <div className='mb-10 text-blackz2 text-base sm:text-[1.063rem]'>
          <p className='last:mb-0 mb-[25px]'>
          KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership, innovation, and trust in the anti-money laundering compliance field in the United States, Latin America, Europe, Africa, the Middle East and the Far East.  Since its inception we have focused on innovative ways to deliver cutting edge Compliance solutions to our clients in a dynamic and fast-changing 
          regulatory landscape.
          </p>
        </div>
        <div>
          <a href='#' className='text-sm sm:text-[0.938rem] flex items-center justify-center rounded-full w-[198px] h-[45px] lg:h-[50px] bg-dangerz text-white'>
            <span className='mr-[10px]'>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g clipPath="url(#clip0_1_830)">
              <path d="M21.1933 9.08407L17.6458 5.49991C17.5606 5.41399 17.4592 5.3458 17.3475 5.29926C17.2358 5.25272 17.116 5.22876 16.995 5.22876C16.874 5.22876 16.7542 5.25272 16.6425 5.29926C16.5308 5.3458 16.4294 5.41399 16.3442 5.49991C16.1734 5.67166 16.0776 5.90399 16.0776 6.14616C16.0776 6.38833 16.1734 6.62066 16.3442 6.79241L19.6075 10.0832H0.916667C0.673552 10.0832 0.440394 10.1798 0.268485 10.3517C0.0965771 10.5236 0 10.7568 0 10.9999H0C0 11.243 0.0965771 11.4762 0.268485 11.6481C0.440394 11.82 0.673552 11.9166 0.916667 11.9166H19.6625L16.3442 15.2257C16.2583 15.311 16.1901 15.4123 16.1435 15.524C16.097 15.6358 16.073 15.7556 16.073 15.8766C16.073 15.9976 16.097 16.1174 16.1435 16.2291C16.1901 16.3408 16.2583 16.4422 16.3442 16.5274C16.4294 16.6133 16.5308 16.6815 16.6425 16.7281C16.7542 16.7746 16.874 16.7986 16.995 16.7986C17.116 16.7986 17.2358 16.7746 17.3475 16.7281C17.4592 16.6815 17.5606 16.6133 17.6458 16.5274L21.1933 12.9707C21.7083 12.4551 21.9976 11.7562 21.9976 11.0274C21.9976 10.2987 21.7083 9.5997 21.1933 9.08407Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1_830">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}


export default (StandOut);