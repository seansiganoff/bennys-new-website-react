import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



const Nav = () => {
  return (
    <div className='nav-container'>
            <div className='nav-number'>Call Now For A Free Estimate <br /> <span><a href="tel:561-573-5887"> 561-573-5887</a></span></div>
            <div className='nav-links'>
              <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/pictures-and-videos'}>GALLERY</Link></li>
                <li><Link to={'/our-guarantee'}>GUARANTEE</Link></li>
              </ul>
                
                
                
            </div>
            
        
    </div>
  )
}

export default Nav