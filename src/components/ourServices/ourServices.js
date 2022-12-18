import React, { useState, useEffect, createRef } from 'react';
import './ourServices.scss';
import bgimg from './img/bg-ourserive.png';
import imgv1 from './img/ourservice-img1.svg';
import imgv2 from './img/ourservice-img2.svg';
import imgv3 from './img/ourservice-img3.svg';
import imgv4 from './img/ourservice-img4.svg';
import imgv5 from './img/ourservice-img5.svg';
import imgv6 from './img/ourservice-img6.svg';

function OurServices (props) {

  let [ itemList, setItemList ] = useState([]);

  useEffect(() => {
    let tempList = [
      {img: imgv1, text: "Consulting", active: ""},
      {img: imgv2, text: "Licensing", active: "activez"},
      {img: imgv3, text: "Training", active: ""},
      {img: imgv4, text: "Correspondent Account", active: ""},
      {img: imgv5, text: "Independent AML/BSA Reviews", active: ""},
      {img: imgv6, text: "Look Back Reviews", active: ""}
    ];
    setItemList(tempList);
  }, []);


  return(
    <section className="relative ourServices">
      <div className='z-10 relative py-[60px] sm:py-20 xl:py-[100px] mx-auto containerv2'>
        <div className='mb-[60px] text-center'>
          <h3 className='mb-5 text-blackz text-2xl sm:text-3xl 3xl:text-[2.375rem] leading-[40px] sm:leading-[50px] 3xl:leading-[60px]'>Our Services </h3>
          <div className='mb-10 text-blackz2 text-base sm:text-[1.063rem] max-w-[730px] mx-auto'>
            <p className=''>
            KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.
            </p>
          </div>
        </div>
        <div className='relative grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          {itemList.map((item, key) => {
              return (
                <div key={key}>
                  <div className={`py-10 bg-white shadow-csv2 text-center rounded-[10px] ${item.active}`} >
                    <img src={item.img} alt={"img" + key} className="mb-[25px] mx-auto"/>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })} 
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img src={bgimg} alt="bg-img" className='object-cover w-full h-full'/>
      </div>
    </section>
  )
}


export default (OurServices);