import React, { useState, useEffect, createRef } from 'react';
import './blogRightSideContent.scss';
import searchicon from "./img/searchiconz.svg";
import imgv1 from "./img/side-img1.png";
import imgv2 from "./img/side-img2.png";
import imgv3 from "./img/side-img3.png";
import imgv4 from "./img/side-img4.png";

function BlogRightSideContent (props) {

  let [ lastedItemList, setLastedItemList ] = useState([]);
  let [ tabItemList, setTabItemList ] = useState([]);

  const tabItemClick = async (value) => {
    // await props.getLastedData();
    alert(value);
  };

  useEffect(() => {
    let tempList = [
      { img: imgv1, 
        title: "Major Crypto Exchanges Face Action Over",
        hour: "8 hours age",
      },
      { img: imgv2, 
        title: "FinCEN issues regulations requiring that financial",
        hour: "8 hours age",
      },
      { img: imgv3, 
        title: "US State Bank Supervisors Issue Model",
        hour: "8 hours age",
      },
      { img: imgv4, 
        title: "Targeting Order for Certain Real Estate Transactions",
        hour: "8 hours age",
      }
    ];

    let tempTabList = [
      {name: "MoneyAlerts", text: "Money alerts"},
      {name: "News", text: "News"},
      {name: "Technology", text: "Technology"},
      {name: "crypto-currencies", text: "crypto-currencies"},
      {name: "AMLOutsourcing", text: "AML Outsourcing"},
      {name: "AMLServices", text: "AML Services"},
      {name: "Support", text: "Support"},
    ] 
    setLastedItemList(tempList);
    setTabItemList(tempTabList);
  }, []);


  return(
    <section className="relative blogRightSideContent">
      <div className='mb-[30px] text-[0.938rem] relative'>
        <input type="text" placeholder='Search here' className='w-full focus-visible:outline-none placeholder:text-blackz2 bg-[#F9FBFC] pl-[55px] pr-5 border-[1px] border-[#E6EDF3] rounded-lg h-[45px] sm:h-[50px] 4xl:h-[55px]'/>
        <img src={searchicon} alt="searchicon" className='inline-block absolute left-5 top-1/2 -translate-y-1/2'/>
      </div>
      <div className='mb-[30px] border-[1px] border-[#E6EDF3] rounded-lg relative'>
        <div className='px-[30px] py-3 bg-[#F9FBFC] rounded-t-lg text-base sm:text-lg text-blackz font-semibold'>
        Categories
        </div>
        <div className='px-[30px] py-[15px] text-blackz2 text-[0.938rem]'>
          <p className='mb-3 w-full flex'>
            <label className='mr-auto inline-block'>Alerts</label>
            <label className='inline-block'>35</label>
          </p>
          <p className='mb-3 w-full flex'>
            <label className='mr-auto inline-block'>Company News</label>
            <label className='inline-block'>28</label>
          </p>
        </div>
      </div>
      <div className='mb-[30px] border-[1px] border-[#E6EDF3] rounded-lg relative'>
        <div className='px-[30px] py-3 bg-[#F9FBFC] rounded-t-lg text-base sm:text-lg text-blackz font-semibold'>
        Recent post
        </div>
        <div className='px-[30px] py-[25px] text-blackz2 text-[0.938rem]'>
          {lastedItemList.map((item, key) => {
            return (
              <div className='mb-4 w-full flex' key={key}>
                <div className='w-[60px] rounded-[5px]'>
                  <img src={item.img} alt='img1' className='inline-block object-cover w-full rounded-[5px]'/>
                </div>
                <div className='flex-1 pl-4'>
                  <p className='mb-2 block text-sm text-blackz'>
                  {item.title}
                  </p>
                  <label className='block'>{item.hour}</label>
                </div>
              </div>
            );
          })} 
          
        </div>
      </div>

      <div className='mb-[30px] border-[1px] border-[#E6EDF3] rounded-lg relative'>
        <div className='px-[30px] py-3 bg-[#F9FBFC] rounded-t-lg text-base sm:text-lg text-blackz font-semibold'>
        Tag
        </div>
        <div className='px-[30px] py-[25px] text-blackz2 text-sm flex flex-wrap'>
          {tabItemList.map((tabitem, key) => {
            return (
              <div className='mb-4 mr-3 px-3 py-1 bg-[#E6EDF3] rounded-[5px] cursor-pointer' key={key} onClick={()=>tabItemClick(tabitem.name)}>
                <p className='block text-sm text-blackz'>
                  {tabitem.text}
                </p>
              </div>
            );
          })} 
          
        </div>
      </div>

      <div className='relative bg-[#015EB9] rounded-lg text-center'>
        <div className='px-[30px] py-[50px]'>
        <h4 className='mb-10 text-white text-[1.6rem] lg:text-[30px] 3xl:text-[2rem] font-bold'>
        Subscribe to KBZ Money Alerts
        </h4>
        <form action='#'>
          <div className='relative w-full mb-5'>
            <input type="text" className='bg-white focus-visible:outline-none placeholder:text-blackz2 placeholder:text-center px-5 h-[45px] rounded-lg w-full' placeholder='Email Address'/>
          </div>
          <div className='relative w-full'>
            <button type='submit' className='bg-[#20C2FF] text-white px-3 h-[45px] w-[134px] mx-auto rounded-lg'>Subscribe Now</button>
          </div>
        </form>
        </div>

      </div>

    </section>
  )
}


export default (BlogRightSideContent);