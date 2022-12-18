import React, { useState, useEffect, createRef } from 'react';
import './ourClients.scss';
import imgv1 from './img/our-cl-img1.png';
import imgv2 from './img/our-cl-img2.png';
import imgv3 from './img/our-cl-img3.png';
import imgv4 from './img/our-cl-img4.png';

function OurClients (props) {

  let [ itemList, setItemList ] = useState([]);

  useEffect(() => {
    let tempList = [
      {img: imgv1, text: "North America & Caribbean", bgcolor: "bg-[#FFF4E3]",
        detailList: [
          {text: "United States"},
          {text: "Mexico"},
          {text: "Dominican Republic"},
          {text: "Jamaica"}
        ]
      },
      {img: imgv2, text: "Central & South America", bgcolor: "bg-[#F2FBFF]",
        detailList: [
          {text: "Costa Rica"},
          {text: "El Salvador"},
          {text: "Panama"},
          {text: "Venezuela"},
          {text: "Chile"},
          {text: "Argentina"},
          {text: "Colombia"},
          {text: "Uruguay"}
        ]
      },
      {img: imgv3, text: "Europe & Africa", bgcolor: "bg-[#FCEBFF]",
      detailList: [
        {text: "United Kingdom"},
        {text: "Spain"},
        {text: "Bulgaria"},
        {text: "Ethiopia"},
        {text: "Somalia"},
        {text: "Cote de Ivory"},
        {text: "Djibouti"}
      ]  
    },
      {img: imgv4, text: "Middle East & Far East", bgcolor: "bg-[#E1F6EF]",
      detailList: [
        {text: "Israel"},
        {text: "Saudi Arabia"},
        {text: "Dubai"},
        {text: "Philippines"}
      ]
    }
    ];
    setItemList(tempList);
  }, []);


  return(
    <section className="relative ourClients">
      <div className='z-10 relative py-[60px] sm:py-20 xl:py-[100px] 4xl:py-[120px] mx-auto containerv2'>
        <div className='mb-[60px] text-center'>
          <h3 className='mb-5 text-blackz text-2xl sm:text-3xl 3xl:text-[2.375rem] leading-[40px] sm:leading-[50px] 3xl:leading-[60px]'>
          Our Clients and Footprint
          </h3>
          <div className='mb-10 text-blackz2 text-base sm:text-[1.063rem] max-w-[790px] mx-auto'>
            <p className=''>
            Clients include Banks, Non-Banking Financial Institutions, Non-Financial Institutions, Insurance Companies, Broker Dealers, Payment Processors, Check Cashers, Digital Payments Companies, Money Transmitters, and Crypto Currency Solution Companies including Exchanges and Market Places.
            </p>
          </div>
        </div>
        <div className='relative grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          {itemList.map((item, key) => {
              return (
                <div key={key}>
                    <div className='rounded-[10px] shadow-csv2'>
                    <div className={`flex py-3 rounded-t-[10px] h-[180px] ${item.bgcolor}`}>
                      <img src={item.img} alt={"img" + key} className="m-auto"/>
                    </div>
                    <div className='py-[25px] px-[30px]'>
                      <p className='mb-5 pb-[10px] border-b-[1px] border-[#D3D3D3] text-blackz text-lg sm:text-[1.188rem] 3xl:text-[1.25rem]'>{item.text}</p>
                      <ul className='text-blackz2'>
                      {item.detailList.map((detail, key1) => {
                          return (
                            <li key={key1} className="last:mb-0 mb-3">{detail.text}</li>
                          );
                        })
                      }
                      </ul>
                    </div>
                    
                  </div>
                </div>
              );
            })} 
        </div>
      </div>
    </section>
  )
}


export default (OurClients);