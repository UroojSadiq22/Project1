import React from 'react'
import './contact.css'
import Facebook from '../../ui/facebook.png'
import Instagram from '../../ui/instagram.png'
import Linkedin from '../../ui/linkedin.png'
import Twitter from '../../ui/twitter.png'
import Github from '../../ui/github.png'


const Contact = () => {
  return (

    <>
    <section id="contact">
    
    <div class="title-section text-start text-sm-center">
    <h1>GET   <span>INTOUCH</span>
    </h1>
    <span class="title-bg">Contact</span>
</div>
<div>
    
<form className='form'>
    <input className='Name' type='text' name='Name' placeholder='Your Name' required></input>
    <input className='email' type='email' name='email' placeholder='Your Email' required></input>
    <textarea className='msg' name='Message' rows="6" placeholder='Your Message'></textarea>
    <button className='submitbtn' type='submit'>Submit</button>
</form>
<div className='socialdes'><h1>Follow me on:</h1></div>
<div className='socialicons'>
                    <img src={Facebook} alt='' className='socialicon'></img>
                    <img src={Instagram} alt='' className='socialicon'></img>
                    <img src={Linkedin} alt='' className='socialicon'></img>
                    <img src={Twitter} alt='' className='socialicon'></img>
                    <img src={Github} alt='' className='socialicon'></img>
                </div>
            </div>
        </section>
       
    
    
</>
    
    
  )
}

export default Contact
