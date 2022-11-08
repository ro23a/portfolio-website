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
              <small>2 Years Working</small>
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
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis justo id varius dignissim. Quisque eu lectus nec sapien accumsan euismod sit amet ut ligula. Vivamus elit mauris, luctus in rhoncus nec, scelerisque in libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lobortis luctus ligula a egestas. Fusce sit amet commodo eros. Morbi odio dolor, laoreet quis ipsum id, feugiat accumsan justo. Curabitur tincidunt vestibulum pellentesque. Proin blandit eleifend dolor nec malesuada. Phasellus at lobortis nisl. Sed facilisis dolor purus, at tristique ligula tristique a. Maecenas vitae metus leo. Duis sapien felis, sollicitudin quis eros nec. 
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About