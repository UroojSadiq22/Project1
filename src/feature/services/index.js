import React from 'react'
import './sevices.css'
import icon1 from '../../ui/gdicon.jpg'
import icon2 from '../../ui/digitalicon.jpg'
import icon3 from '../../ui/mobileappicon.jpg'
import icon4 from '../../ui/uiicon.jpg'

const Services = () => {
  return (
    <><section id='services'>
        <div class="title-section text-start text-sm-center">
    <h1>WHAT   <span>I  DO?</span>
        </h1>
        <span class="title-bg">Services</span>
    </div>
    <div className='skillbars'>

        <div className='skillbar'>
            <img src={icon1} alt='graphicdesign' className='skillbarimg'></img>
            <div className='skillbartext'>
                <h2>Graphic Designing</h2>
                <p>I combines creativity and precision to craft visually stunning and impactful designs matched to your unique identity and bring your vision to life, ensuring a lasting impression on your audience.</p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={icon2} alt='digitalmarketing' className='skillbarimg'></img>
            <div className='skillbartext'>
                <h2>Digital Marketing</h2>
                <p>From search engine optimization (SEO) to social media management, my services aim to optimize online performance, boost brand awareness, and achieve measurable business goals in the dynamic digital landscape.</p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={icon3} alt='mobileappdevelopment' className='skillbarimg'></img>
            <div className='skillbartext'>
                <h2>Mobile App Development</h2>
                <p>I specialize in crafting custom solutions for iOS and Android platforms, leveraging cutting-edge technologies to deliver seamless and engaging user experiences. </p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={icon4} alt='UI/UXDesign' className='skillbarimg'></img>
            <div className='skillbartext'>
                <h2>UI/UX Design</h2>
                <p>I transform your ideas into visually appealing and user-friendly interfaces with my UI/UX design services.</p>
            </div>
        </div>

    </div>
    </section>
    
    </>
    
  )
}

export default Services