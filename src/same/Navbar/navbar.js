import React from 'react';
import './navbar.css';
import logo from '../../ui/logop.jpg';

const Navbar = () => {
  return (
    <nav className='navbar'>
       <div className='logocontainer'>
       <img src={logo} alt='logo' className='logo'></img>
        <div className='portfolio'>Portfolio</div>
       </div>
        <div className='NavbarMenu'>
          <ul>
            <li className='NavbarMenuList'><a href='#home'>Home</a></li>
            <li className='NavbarMenuList'><a href='#about'>About</a></li>
            <li className='NavbarMenuList'><a href='#services'>Services</a></li>
            <li className='NavbarMenuList'><a href='#projects'>Projects</a></li>
            <li className='NavbarMenuList'><a href='#Clients'>Clients</a></li>
            <li className='NavbarMenuList'><a href='#contact'>Contact Us</a></li>
          </ul>
        </div>

    </nav>
  )
}

export default Navbar
