import React from 'react'
import './about.css'


const index = () => {
  return (
    <section id='about'>
      <div class="title-section text-start text-sm-center">
        <h1 className='section--title'>ABOUT <span>ME</span>
        </h1>
        <span class="title-bg">Resume</span>
      </div>
     
<div className='aboutcontainer'>
  <div className='info'>
    <h1 className='section--subtitle'>PERSONAL INFOS</h1>
    <ul className='info--list grid'>
      <li className='info--item'>
        <span className='info--title'>First Name: </span>
        <span className='info--discription'>Urooj</span>
      </li>
      <li className='info--item'>
        <span className='info--title'>Last Name: </span>
        <span className='info--discription'>Sadiq</span>
      </li>
      <li className='info--item'>
        <span className='info--title'>Age: </span>
        <span className='info--discription'>23 Years</span>
      </li>
      <li className='info--item'>
        <span className='info--title'>Nationality: </span>
        <span className='info--discription'>Pakistani</span>
      </li>
      <li className='info--item'>
        <span className='info--title'>Freelance: </span>
        <span className='info--discription'>Available</span>
      </li>
      <li className='info--item'>
         <span className='info--title'>Address: </span>
         <span className='info--discription'>Nazimabad</span>
      </li>
      <li className='info--item'>
         <span className='info--title'>Phone: </span>
         <span className='info--discription'>+123 111 456</span>
      </li>
      <li className='info--item'>
         <span className='info--title'>Email: </span>
         <span className='info--discription'>abc@gmail.com</span>
      </li>
      <li className='info--item'>
         <span className='info--title'>LinkedIn: </span>
         <span className='info--discription'> Urooj Sadiq</span>
      </li>
      <li className='info--item'>
         <span className='info--title'>Languages: </span>
         <span className='info--discription'>Urdu, English</span>
      </li>
    </ul>
</div>
          
          
<div className='bgleft'></div>

<div className='box'>
  <div className='stats--box'>
    <h1 className='stats-no'>7+</h1>
    <p className='stats--title'>years of <span>experience</span></p>
  </div>

  <div className='stats--box'>
     <h1 className='stats-no'>57+</h1>
     <p className='stats--title'>completed <span>projects</span></p>
  </div>

  <div className='stats--box'>
     <h1 className='stats-no'>81+</h1>
     <p className='stats--title'>Happy <span> customers </span></p>
  </div>

</div>
</div>

</section>
  )
}

export default index
