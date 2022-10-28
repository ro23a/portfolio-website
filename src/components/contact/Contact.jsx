import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l304kca', 'template_gdqaf4b', form.current, 'vcXA8jBhk3rCA8pdI')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container cont-container'>
        <div className='cont-options'>
          <article className='cont-option'>
            <MdOutlineEmail className='cont-option-icon'/>
            <h4>Email</h4>
            <h5>atefrawan941@gmail.com</h5>
            <a href='mailto:atefrawan941@gmail.com' target="_blank">Send A Message</a>
          </article>
          <article className='cont-option'>
            <RiMessengerLine className='cont-option-icon'/>
            <h4>Messenger</h4>
            <h5>atefrawan941@gmail.com</h5>
            <a href='mailto:https://www.facebook.com/rawan.atef.18' target="_blank">Send A Message</a>
          </article>
          <article className='cont-option'>
            <BsWhatsapp className='cont-option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+20109584304</h5>
            <a href='https://api.whatsapp.com/send?phone+201095584304' target="_blank">Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact