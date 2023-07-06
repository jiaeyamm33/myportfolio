import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  const [profileChange, setProfileChange] = useState(false);
  const [ hovered, setHovered ] = useState('');
  const location = useLocation();
  
  /* 마우스 오버 시 profile bg-img 변경*/
  let profileImg;
  if (profileChange === false) {
    profileImg = `url(${process.env.PUBLIC_URL}/images/profile1.png)`;
  } else {
    profileImg = `url(${process.env.PUBLIC_URL}/images/loopy.png)`;
  }

  const isActive = (pathname) => {
    return location.pathname === pathname ? 'gnbOn' : '';
  }
  
  const mouseOverGnb = (target) => {
    setHovered(target);
  };

  const mouseOutGnb = () => {
    setHovered('');
  };

  
  return (
    <nav className='nav_wrap flex'>

    <h1 className='hidden'>&nbsp;</h1>
    
    <div className='nav_box'>
    <div className='index'></div>
    {/* 테마 박스 */}
    <div className='theme_wrap'>
      <h2>테마</h2>
      <ul className='theme_list flex'>
        <li>
          <div
          onClick={(e)=> {
            props.setThema(0);
          }}
          ></div>
          basic
        </li>
        <li>
          <div
             onClick={(e)=> {
              props.setThema(1);
            }}></div>
          linear
        </li>
        <li>
        <div
           onClick={(e)=> {
            props.setThema(2);
          }}></div>
        light
        </li>
      </ul>
    </div>
    
    <p className='device'> PC와 Laptop에 적합한 <br />
    포트폴리오 사이트입니다.</p>
    <div className='nav_bottom'>
  <div
  className="character_img"
  style={{ backgroundImage: profileImg,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}
  onMouseOver={() => setProfileChange(true)}
  onMouseLeave={() => setProfileChange(false)}
></div>
    <p>Designed & Built by Jiae &copy; 2023 </p>
    </div>
    </div>

    <nav className='gnb'>
    <ul>
      <li
        className={`${isActive('/') ? 'width_up' : ''} ${hovered === 'home' ? 'width_up' : ''}`}
        onMouseEnter={() => mouseOverGnb('home')}
        onMouseLeave={mouseOutGnb}
      >
        <Link to="/">{(isActive('/') || hovered === 'home') && 'home'}</Link>
      </li>
      <li
        className={`${isActive('/about') ? 'width_up' : ''} ${hovered === 'about' ? 'width_up' : ''}`}
        onMouseEnter={() => mouseOverGnb('about')}
        onMouseLeave={mouseOutGnb}
      >
        <Link to="/about">{(isActive('/about') || hovered === 'about') && 'about'}</Link>
      </li>
      <li
       className={`${isActive('/portfolio') ? 'width_up' : ''} ${hovered === 'portfolio' ? 'width_up' : ''}`}
       onMouseEnter={() => mouseOverGnb('portfolio')}
       onMouseLeave={mouseOutGnb}
      >
        <Link to="/portfolio">{(isActive('/portfolio') || hovered === 'portfolio') && 'portfolio'}</Link>
      </li>
      <li 
      className={`${isActive('/contact') ? 'width_up' : ''} ${hovered === 'contact' ? 'width_up' : ''}`}
      onMouseEnter={() => mouseOverGnb('contact')}
      onMouseLeave={mouseOutGnb}
      >
        <Link to="/contact">{(isActive('/contact') || hovered === 'contact') && 'contact'}</Link>
      </li>
    </ul>

    </nav>
    
    </nav>
  );
}

export default Nav;