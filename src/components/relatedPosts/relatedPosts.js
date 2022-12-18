import React, { useState, useEffect, createRef } from 'react';
import './relatedPosts.scss';
import imgv1 from './img/money-aimg1.png';
import imgv2 from './img/money-aimg2.png';
import imgv3 from './img/money-aimg3.png';
import iconv1 from './img/ma-icon1.png';
import iconv2 from './img/ma-icon2.png';
import iconv3 from './img/ma-icon3.png';
import clockicon from './img/clockicon.svg';
import arrowicon from './img/arrowicon.svg';
import bgimg from './img/bgimgz.png';

function RelatedPosts (props) {

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
      }
    ];
    setItemList(tempList);
  }, []);


  return(
    <section className="relative relatedPosts">
      <div className='z-10 relative py-[60px] sm:py-20 xl:py-[100px] mx-auto containerv2'>
        <div className='mb-[50px] text-center'>
          <h3 className='text-blackz text-2xl sm:text-3xl 3xl:text-[2.375rem] leading-[40px] sm:leading-[50px] 3xl:leading-[60px]'>
          Related Post
          </h3>
        </div>
        <div className=' relative grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          {itemList.map((item, key) => {
              return (
                <div key={key}>
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
                </div>
              );
            })} 
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img src={bgimg} alt="bgimg" className='object-cover w-full h-full'/>
      </div>
    </section>
  )
}


export default (RelatedPosts);