import React from 'react'
import './projects.css'
import {Link} from 'react-scroll'
import Project1 from '../../ui/digitalmarketing.png'
import Project2 from '../../ui/ecommerce.jpg'
import Project3 from '../../ui/graphic.jpg'
import Project4 from '../../ui/mobileapp.jpg'
import Project5 from '../../ui/ui.png'


const Project = () => {
  return (
    <>
    <section id='projects'>
    
        <div class="title-section text-start text-sm-center">
    <h1>MY   <span>PORTFOLIO</span>
        </h1>
        <span class="title-bg">Projects</span>
    </div>
    
        <div>

        <div className='NavBarMenu'>
        <Link className='NavbarMenuList'>All</Link>
        <Link className='NavbarMenuList'>Ecommerce</Link>
        <Link className='NavbarMenuList'>graphic Designing</Link>
        <Link className='NavbarMenuList'>UI Designing</Link>
        <Link className='NavbarMenuList'>digitalmarketing</Link>
        </div>
        <div className='projectimgs'>
            <div className='imgwrapper'>
                <img src={Project1} alt='' className='projectimg blur'></img>
                <div className='imagecontent fade'>digitalmarketing</div>
            </div>

            <div className='imgwrapper'>
                <img src={Project2} alt='' className='projectimg blur'></img>
                <div className='imagecontent fade'>Ecommerce</div>
            </div>

            <div className='imgwrapper'>
                <img src={Project3} alt='' className='projectimg blur'></img>
                <div className='imagecontent fade'>Graphic Designing</div>
            </div>

            <div className='imgwrapper'>
                <img src={Project4} alt='' className='projectimg blur'></img>
                <div className='imagecontent fade'>Mobile App Development</div>
            </div>

            <div className='imgwrapper'>
                <img src={Project5} alt='' className='projectimg blur'></img>
                <div className='imagecontent fade'>UI Designing</div>
            </div>

        </div>
        </div>
        
        <div className='bg'></div>
    </section>
    </>
    )
}

export default Project