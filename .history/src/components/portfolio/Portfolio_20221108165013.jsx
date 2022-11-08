import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg' 
import IMG2 from '../../assets/portfolio2.jpg' 
import IMG3 from '../../assets/portfolio3.jpg' 
import IMG4 from '../../assets/portfolio4.jpg' 
import IMG5 from '../../assets/portfolio5.png' 
import IMG6 from '../../assets/portfolio6.jpg' 
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container port-container'>
        <article className='port-item'>
          <div className='port-item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Aamazon Clone</h3>
          <div className='port-item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='port-item'>
          <div className='port-item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Twitter Clone</h3>
         <div className='port-item-cta'>
            <a href='https://github.com/ro23a/react-twitter' className='btn' target='_blank'>GitHub</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='port-item'>
          <div className='port-item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Instagram Clone</h3>
         <div className='port-item-cta'>
            <a href='https://github.com/ro23a/instagram-clone' className='btn' target='_blank'>GitHub</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className='port-item'>
          <div className='port-item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Adivce App</h3>
          <div className='port-item-cta'>
            <a href='https://github.com/ro23a/advice-app' className='btn' target='_blank'>GitHub</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='port-item'>
          <div className='port-item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='port-item'>
          <div className='port-item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article> 
      </div>
    </section>
  )
}

export default Portfolio