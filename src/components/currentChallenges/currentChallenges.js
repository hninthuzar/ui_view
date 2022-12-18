import React, { useState, useEffect, createRef } from 'react';
import './currentChallenges.scss';
import img1 from "./img/cc-imgv1.png";

function CurrentChallenges (props) {

  useEffect(() => {

  }, []);


  return(
    <section className="relative py-[60px] sm:py-20 xl:py-[100px] 4xl:py-[120px] mx-auto containerv2 currentChallenges">
      <div className='flex flex-wrap lg:flex-nowrap items-end'>
        <div className='w-full lg:w-1/2 lg:mr-7 3xl:mr-9 mb-10 lg:mb-0'>
          <img src={img1} alt="img1" />
        </div>
        <div className='w-full lg:w-1/2 lg:ml-7 3xl:ml-9'>
          <h3 className='mb-[25px] text-blackz text-2xl sm:text-3xl 3xl:text-[2.375rem]'>The Current Challenges </h3>
          <div className='text-blackz2 text-base sm:text-[1.063rem]'>
            <p className='mb-[25px]'>
            Legal requirements and recent developments compel Financial Institutions to adopt comprehensive and effective risk-based controls to prevent misuse by money launderers or purveyors of terrorist acts.
            </p>
            <p className='mb-[25px]'>
            Anti Money Laundering, Terrorism Financing, Fraud, and related regulations continue to increase compliance operating costs for companies in the financial services space.
            </p>
            <p className='last:mb-0 mb-[25px]'>
            Untested, rubber stamp solutions adopted to appease regulators will not do in today’s environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default (CurrentChallenges);