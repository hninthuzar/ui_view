import React, { useState, useEffect, createRef } from 'react';
import './blogLeftSideContentV1.scss';
import imgv1 from './img/blsc-img1.png';
import imgv2 from './img/blsc-img2.png';
import imgv3 from './img/blsc-img3.png';
import imgv4 from './img/blsc-img4.png';
import imgv5 from './img/blsc-img5.png';
import imgv6 from './img/blsc-img6.png';
import iconv1 from './img/blsc-icon1.png';
import iconv2 from './img/blsc-icon2.png';
import iconv3 from './img/blsc-icon3.png';
import iconv4 from './img/blsc-icon4.png';
import iconv5 from './img/blsc-icon5.png';
import iconv6 from './img/blsc-icon6.png';
import clockicon from './img/clockicon.svg';
import arrowicon from './img/arrowicon.svg';
import BlogRightSideContent from "../blogRightSideContent/blogRightSideContent";

function BlogLeftSideContentV1 (props) {

  let [ itemList, setItemList ] = useState([]);

  useEffect(() => {
    let tempList = [
      { img: imgv1, 
        icon: iconv1, 
        title: "Major Crypto Exchanges Face Action Over",
        name: "Darlene Robertson",
        date: "5/27/15",
        text: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency..."
      },
      { img: imgv2, 
        icon: iconv2,
        title: "FinCEN issues regulations requiring that financial",
        name: "Courtney Henry",
        date: "22 Dec 2021",
        text: "FinCEN is issuing final rules under the Bank Secrecy Act to clarify and strengthen customer due diligence..."
      },
      { img: imgv3, 
        icon: iconv3,
        title: "US State Bank Supervisors Issue Model", 
        name: "Jerome Bell",
        date: "22 Dec 2021",
        text: "The Conference of State Bank Supervisors (CSBS) has released a draft proposal for regulating digital currency..." 
      },
      { img: imgv4, 
        icon: iconv4,
        title: "US State Bank Supervisors Issue Model", 
        name: "Jerome Bell",
        date: "22 Dec 2021",
        text: "The Conference of State Bank Supervisors (CSBS) has released a draft proposal for regulating digital currency..." 
      },
      { img: imgv5, 
        icon: iconv5,
        title: "US State Bank Supervisors Issue Model", 
        name: "Jerome Bell",
        date: "22 Dec 2021",
        text: "The Conference of State Bank Supervisors (CSBS) has released a draft proposal for regulating digital currency..." 
      },
      { img: imgv6, 
        icon: iconv6,
        title: "US State Bank Supervisors Issue Model", 
        name: "Jerome Bell",
        date: "22 Dec 2021",
        text: "The Conference of State Bank Supervisors (CSBS) has released a draft proposal for regulating digital currency..." 
      }
    ];
    setItemList(tempList);
  }, []);


  return(
    <section className="relative blogLeftSideContentV1">
      <div className='z-10 relative pt-[50px] sm:pt-[70px] 4xl:pt-[80px] pb-[60px] sm:pb-20 xl:pb-[100px] 4xl:pb-[120px] mx-auto containerv2'>
        <div className='mb-[50px] text-center'>
          <h3 className='text-blackz text-2xl sm:text-3xl 3xl:text-[2.375rem] leading-[40px] sm:leading-[50px] 3xl:leading-[60px]'>
          Latest News
          </h3>
        </div>
        <div className='flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap'>
          <div className='w-full lg:w-[70%] lg:pr-[30px] mt-10 lg:mt-0'>
            <div className=' relative grid grid-cols-1 xsm:grid-cols-2 gap-[30px]'>
            {itemList.map((item, key) => {
                return (
                  <div key={key}>
                    <a href='./blogdetail' target="_blank">
                    <div className='rounded-[10px] shadow-csv2'>
                      <div className={`flex rounded-t-[10px] ${item.bgcolor}`}>
                        <img src={item.img} alt={"img" + key} className="object-cover w-full"/>
                      </div>
                      <div className='py-[25px] px-[30px]'>
                        <p className='mb-7 text-blackz text-lg sm:text-[1.25rem] 3xl:text-[1.375rem]'>{item.title}</p>
                        <div className='text-blackz2'>
                          <div className='flex items-center justify-between'>
                            <div className='flex-1 flex items-center'>
                              <img src={item.icon} alt={"icon" + key} className="mr-1 inline-block"/>
                              <label className='text-[0.813rem]'>{item.name}</label>
                            </div>
                            <div className='flex-1 justify-end flex items-center'>
                              <img src={clockicon} alt={"clockicon"} className="mr-1 inline-block"/>
                              <label className='text-[0.813rem]'>{item.date}</label>
                            </div>
                          </div>
                          <div className='mt-[15px] mb-7'>
                          {item.text}
                          </div>
                          <div className='flex items-center'>
                            <label className='text-blackz text-sm'>Read More</label>
                            <img src={arrowicon} alt='arrowicon' className='ml-2 inline-block'/>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    </a>
                  </div>
                );
              })} 
            </div>
            <div className='mt-[50px] w-full text-center'>
              <a href='#' className='mx-auto text-sm sm:text-[0.938rem] flex items-center justify-center rounded-full w-[198px] h-[45px] lg:h-[50px] bg-darkbluez text-white'>
                <span className='mr-[10px]'>Load More</span>
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
          <div className='w-full lg:w-[30%]'>
              <BlogRightSideContent />
          </div>
        </div>
      </div>
    </section>
  )
}


export default (BlogLeftSideContentV1);