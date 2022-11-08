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
          <img className='img__size1' src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-123318,resizemode-1,msid-91981821/small-biz/sme-sector/online-coding-platform-for-students-curiousjr-to-organise-all-india-coding-championship.jpg" alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header