import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import './headerV1.scss';
import icon from './img/OCG logo 2.svg';
import phoneicon from './img/mobile-icon.svg';
import emailicon from './img/email-icon.svg';
import searchicon from './img/search-icon.svg';

function HeaderV1 (props) {

  let [ searchz, setlSearchz] = useState([]);
 
  let lactivez = props.lactivez;

  const showSearch = () => {
    (searchz == "searchactive")? setlSearchz("") : setlSearchz("searchactive");
  };

  useEffect(() => {

  }, []);


  return(
    <header className="relative headerV1">
      <div className='bg-[#DFF6FF] text-[0.825rem]'>
        <div className='py-3 w-full flex flex-wrap md:flex-nowrap text-center md:text-left item-center justify-center md:justify-between mx-auto containerv2'>
          <div className='flex justify-center w-full md:w-auto'>
            <img src={phoneicon} className="inline-block mr-3" alt="phone-icon"/>
            <a href='tel:+959 7980 65880'>+959 7980 65880</a>
          </div>
          <div className='w-full md:w-auto my-2 md:my-0'>
            <p>UPDATES – Click Here for KBZ Money News Alerts – UPDATES</p>
          </div>
          <div className='flex justify-center w-full md:w-auto'> 
            <a href='mailto:admin@kbzmoney.com'>admin@kbzmoney.com</a>
            <img src={emailicon} className="inline-block ml-3" alt="email-icon"/>
          </div>
        </div>
      </div>
      
      <div className='bg-white boxshadowv1'>
        <div className='flex flex-wrap md:flex-nowrap w-full item-center mx-auto containerv2'>
          <div className='py-4 4xl:py-5 mb-3 md:mb-0 w-full md:w-auto md:mr-[100px] lg:mr-[145px]'>
            <Link to="/"><img src={icon} className="inline-block" alt="icon"/></Link>
          </div>
          <div className='flex '>
            <ul className='flex menuz'>
              <li className={`ml-2 mr-5 md:mx-[30px] relative flex items-center h-full ${lactivez == "home"? "activez" : ""}`}><Link to='/' className='inline-flex items-center'>Home</Link></li>
              <li className={`mx-5 md:mx-[30px] relative flex items-center h-full ${lactivez == "blog"? "activez" : ""}`}><Link to='/blog' className='inline-flex items-center'>Blog</Link></li>
            </ul>
          </div>
          <div className='ml-auto flex items-center'>
            <input type="text" placeholder='Search ...' className={`mr-1 text-sm focus-visible:outline-none px-3 py-2 placeholder:text-blackz2 rounded-lg border-[1px] border-[#E6EDF3] hidden ${searchz}`} />
            <div className='inline-block cursor-pointer' onClick={showSearch}><img src={searchicon} alt="search-icon"/></div>
          </div>
        </div>
      </div>
      
    </header>
  )
}


export default (HeaderV1);