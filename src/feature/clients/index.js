import React from 'react'
import './clients.css'

import Client2 from '../../ui/user2.jpg'
import Client3 from '../../ui/user3.jpg'


const Clients = () => {
  return (
  <>
<section id= 'Clients'>
<div id='clients'>
    <div class="title-section text-start text-sm-center">
    <h1>CLIENT   <span>SPEAK</span>
        </h1>
        <span class="title-bg">Testimonial</span>
    </div>

    <div className='allclients'>
        <div className='Client'>
          <div className='clientimg'>
            <img src={Client3} alt=''></img>
          </div>
            <h3>Paul Jack</h3>
            <p className='location'>Melbourne, Australia</p>
            <p>I am happy Working with printing and typesetting industry. I have used her twice now. Good rates, very efficient service. Excellent.
            </p>
        </div>
        <div className='Client'>
        <div className='clientimg'>
            <img src={Client2} alt=''></img>
          </div>
            <h3>Amrita Bay</h3>
            <p className='location'>Berlin, Germany</p>
            <p>Only trying it out since a few days. But up to now excellent. Seems to work flawlessly.
            </p>
        </div>
        <div className='Client'>
        <div className='clientimg'>
            <img src={Client3} alt=''></img>
          </div>
            <h3>Franklin Doe</h3>
            <p className='location'>Texas, USA</p>
            <p>We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive.
            </p>
        </div>
    </div>

    
    </div>
    <div className='bg'></div>
</section>
  
    </>
    
  )
}

export default Clients
