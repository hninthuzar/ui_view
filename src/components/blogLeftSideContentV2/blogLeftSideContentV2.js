import React, { useState, useEffect, createRef } from 'react';
import './blogLeftSideContentV2.scss';
import usericon from "./img/usericon.png" ;
import calendericon from "./img/calendericon.svg" ;
import eyeicon from "./img/eyeicon.svg" ;
import clockicon from "./img/clockicon.svg" ;
import brlcimg from "./img/brlc-img.png";
import BlogRightSideContent from "../blogRightSideContent/blogRightSideContent";

function BlogLeftSideContentV2 (props) {

  let [ itemList, setItemList ] = useState([]);

  useEffect(() => {

  }, []);


  return(
    <section className="relative blogLeftSideContentV2">
      <div className='z-10 relative pt-[80px] sm:pt-[120px] xl:pt-[160px] 4xl:pt-[200px] pb-[60px] sm:pb-20 xl:pb-[100px] 4xl:pb-[120px] mx-auto containerv2'>
        <div className='flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap'>
          <div className='w-full lg:w-[70%] lg:pr-[30px] mt-10 lg:mt-0'>
              <h4 className='mb-[30px] text-[1.25rem] sm:text-2xl 3xl:text-[1.75rem] leading-[30px] sm:leading-[40px] 3xl:leading-[48px] text-blackz font-semibold'>
              FinCEN Issues a Geographic Targeting Order for Certain Real Estate Transactions
              </h4>
              <div className='flex flex-wrap xsm:flex-nowrap items-center text-blackz2 text-sm w-full'>
                <div className='w-full xsm:w-auto flex items-center mr-auto mb-3 xsm:mb-0'>
                  <img src={usericon} alt="" className='inline-block' />
                  <label className='inline-block ml-4 font-semibold'>Wade Warren</label>
                </div>
                <div className='w-full xsm:w-auto flex items-center'>
                  <div className='flex items-center'>
                    <img src={calendericon} alt="" className='inline-block'/>
                    <label className='inline-block ml-[6px]'>8/30/21</label>
                  </div>
                  <div className='flex items-center mx-4 xsm:mx-5'>
                    <img src={eyeicon} alt="" className='inline-block'/>
                    <label className='inline-block ml-[6px]'>25k views</label>
                  </div>
                  <div className='flex items-center'>
                    <img src={clockicon} alt="" className='inline-block'/>
                    <label className='inline-block ml-[6px]'>4 min read</label>
                  </div>
                </div>
              </div>

              <div className='mb-[60px] mt-10 text-blackz2 text-base'>
                <div className='mb-10'>
                  <img src={brlcimg} alt='brlcimg' className='object-cover w-full h-full'/>
                </div>
                <div className='mb-10'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
                </div>
                <div>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </div>
              </div>
            <div className='relative text-blackz2 text-base'>
              <p className='mb-5 text-blackz text-lg sm:text-[1.25rem] 3xl:text-[1.375rem] font-bold'>
              Benifits
              </p>
              <div className='mb-10'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic may be there will some words etc.
              </div>
              <div>
              Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic ther will be some words etc.
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[30%]'>
          <BlogRightSideContent />
          </div>
        </div>
      </div>
    </section>
  )
}


export default (BlogLeftSideContentV2);