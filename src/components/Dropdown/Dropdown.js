import React from 'react'
import About from '../About/About';
import './Dropdown.css';
import Services from '../Services/Services';
import FAQs from '../FAQs/FAQs';

const Dropdown = () => {
    


  return (
    <div className='dropdown-container'>
        {<FAQs />}
        {<About />}
        {<Services />}
        
    </div>
  )
}

export default Dropdown