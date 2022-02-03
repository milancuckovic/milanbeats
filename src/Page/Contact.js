import React from 'react';
import Footer from '../Components/Footer';
import Stars from '../Components/Stars';
import Menu from '../Components/Menu';
export default function Contact() {
  return <>
  <Stars/>
  <Menu/>
  <h1 className='text-white text-center'>Contact me:</h1>
  <div className='contact'>
    <form action="https://formspree.io/f/mzboevpo" method="POST">
      <label>
      Your email:<br/>
      <input type="email" name="_replyto"/>
      </label>
      <label>
      Your message:<br/>
      <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
  <Footer/>
</>
}
