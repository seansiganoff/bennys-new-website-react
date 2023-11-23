import React from 'react';
import './About.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const show = {
    opacity: 1,
    transitionEnd: {
      display: "flex"
    }
  };
  
  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };
  
  return (

    <div className="about-container">
      <div className="about-banner">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAbout(!isAbout)}
        >
          <div>ABOUT</div>
        </motion.button>
      </div>
      <motion.div className="box" animate={isAbout ? show : hide}>
          
          <div className='about-text-div'>
            {/* this is for Sean's website. */}
            {/* <p>
              With over 20 years of experience in the industry, we have been proudly serving our valued customers with top-quality automotive restoration and repair solutions.
              <br /><br />
              What sets us apart is our mobile service. We bring our expertise directly to you, eliminating the hassle of transporting your vehicle to a traditional body shop. 
              Our fully equipped mobile units are equipped to handle a wide range of repairs, from minor scratches and dents to moderate damage. 
              Whether you're at home, work, or anywhere in between, we will come to your location and do the repairs on-site. Saving you time and money, and providing convenience that fits your busy schedule.
              We know your time is valuable, so we make sure our team is always on time and do the repairs within the given time frame.
              <br /><br />
              
              Dont wait another minute, contact us now for a free estimate and experience the convenience of our mobile auto body service. 
            </p> */}
            <p>
            We have over 20 years of experience in the industry and have been serving Palm Beach County for over 10 years!
          
          <br /><br />
          <b>Our Mobile Service Advantage: </b>
          With our mobile dent and scratch repair service, there's no need to take time out of your busy schedule to visit an auto body shop. 
          Our skilled technicians will come to your location, whether it's your home, workplace, or any other convenient spot. 
          We bring the expertise and equipment right to your doorstep, saving you time and hassle.

          <br /><br />
          <b>Quality Workmanship: </b> 
          We believe in the importance of quality workmanship, and our attention to detail is evident in every repair. 
          Using the finest materials and proven techniques, we ensure that our repairs are not only visually appealing but also durable and reliable.
          </p>
            <br />
            <button className='about-close-btn' onClick={() => setIsAbout(!isAbout)}>Close About Section</button>
          </div>         
      </motion.div>
      
    </div>



   
  )
}

export default About