import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiFolderPlus} from 'react-icons/bi'
import './About.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img className="img__size" src="https://intelog.net/wp-content/uploads/2019/05/Web-Development0.jpg" alt='about' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Learning</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Beginner</small>
            </article>
            <article className='about__card'>
              <BiFolderPlus className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>I'm Rawan. A self motivated junior web developer with excellent knowledge in HTML, CSS, JS, jQuery, and Bootstrap. I thrive on innovation and overcoming challenges and most importantly, the best user experience. I'm very attentive to details and I'm able to multitask and juggle multiple pressing projects simultaneously.

            I consider myself a person who follows modern web development practices and new technologies; a person who never stops learning; a person who is trustworthy, responsible, respects deadlines and knows that customer’s satisfaction is the key to success.
            </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About