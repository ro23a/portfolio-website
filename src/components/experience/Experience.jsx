import React from 'react'
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className='container exp-container'>
        <div className='exp-frontend'>
          <h3>Frontend Development</h3>
          <div className='exp-content'>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill />
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>TailWind</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        <div className='exp-backend'>
          <h3>Backend Development</h3>
          <div className='exp-content'>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>Express JS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='exp-details'>
            <BsPatchCheckFill className='exp-det-icon'/>
            <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience