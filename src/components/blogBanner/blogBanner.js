import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import './blogBanner.scss';
import bgimg1 from './img/blog-bgimg1.png';
import bgimg2 from './img/blog-bgimg2.png';

function BlogBanner (props) {

  let title = props.title;

  return(
    <section className="relative bg-[#063A78] blogBanner">
      <div className='z-10 relative py-[60px] sm:py-20 xl:py-[100px] mx-auto text-white containerv2'>
        <h3 className='font-semibold text-center mb-5 sm:mb-[25px] text-2xl sm:text-3xl 3xl:text-[2.375rem] leading[38px] sm:leading-[48px] 3xl:leading-[56px] mx-auto'>
         {title}
        </h3>
        <div className='text-center'>
          <label className='text-[#8FA5AE]'><Link to="/">Home</Link></label>
          <span className='inline-block mx-3'> > </span>
          <label>Blog</label>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-auto h-auto max-w-[100px] xsm:max-w-[150px] md:max-w-[180px] xl:max-w-[200px] 4xl:max-w-[220px]'>
        <img src={bgimg2} alt="bgimg1" className=''/>
      </div>
      <div className='absolute bottom-0 right-0 w-auto h-auto max-w-[50px] xsm:max-w-[60px] md:max-w-[80px] xl:max-w-[100px] 4xl:max-w-[120px]'>
        <img src={bgimg1} alt="bgimg2" className=''/>
      </div>
    </section>
  )
}


export default (BlogBanner);