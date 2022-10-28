import React from 'react'
import './Header.css'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
import ME from '../../assets/me.png'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Rawan Atef</h1>
        <h5 className='text-light'>A Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header