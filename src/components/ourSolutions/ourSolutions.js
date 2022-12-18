import React, { useState, useEffect, createRef } from 'react';
import './ourSolutions.scss';
import bgimg from './img/osolution-bgimg.png';
import imgv1 from './img/osolution-img1.png';

function OurSolutions (props) {

  useEffect(() => {

  }, []);


  return(
    <section className="relative ourSolutions">
      <div className='z-10 relative py-[60px] sm:py-20 xl:py-[100px] 4xl:py-[120px] mx-auto containerv2'>
        <div className='flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap items-end'>          
          <div className='w-full lg:w-1/2 lg:mr-7 3xl:mr-9 text-white mt-10 lg:mt-0'>
            <h3 className='mb-[25px] text-2xl sm:text-3xl 3xl:text-[2.375rem]'>Our Solutions </h3>
            <div className=' text-base sm:text-[1.063rem]'>
              <p className='mb-[25px]'>
              KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.
              </p>
              <p className='mb-[25px]'>
              KBZ Money offers a proven skill and delivers best-in-class AML/BSA consulting and automated AML/BSA and OFAC compliance solutions to financial institutions the world over.
              </p>
              <p className='last:mb-0 mb-[25px]'>
              Our deployment strategies are tailored to meet the individual needs of our clients in the context of a risk-laden world.  Our approach is to provide the most protection in the most intelligent, effective and cost-efficient manner.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 lg:ml-7 3xl:ml-9'>
            <img src={imgv1} alt="img1" />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img src={bgimg} alt="bg-img" className='object-cover w-full h-full'/>
      </div>
    </section>
  )
}


export default (OurSolutions);