import React, { useState } from 'react';
import './Services.css';
import { motion } from 'framer-motion';





const Services = () => {
  const [isServices, setInServices] = useState(false);


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
      <div className="services-container">
        
        <div className="services-banner">
          <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setInServices(!isServices)}
            >
              <div>SERVICES</div>
          </motion.button>
        </div>
        <motion.div className="box" animate={isServices ? show : hide}>
      
        <div className='services-text-div'>
            <ul>
                <li><h2>DENT REPAIR</h2>
                <b>Type:</b> Medium - Large<br />
                <b>Time:</b> 2 - 3 hours<br />
                <b>Process</b>: First we straighten the metal, sand and fill the affected area to make sure its perfectly straight. 
                Then, the area is prepped and painted with the exact color. 
                Lastly, we apply a high gloss clear coat that matches the factory finish.
                <br /><br />
                Example of the dent repair process.
                <div className="services-video-wrapper">
                    <video controls poster={require('../../images/acura-screenshot.png')}>
                    <source className="services-video" src={require('../../videos/acura.mp4')} type="video/mp4" />
                    </video>
                </div>
                <hr />
                </li>
                <br /><br />
                <li><h2>SCRATCH REPAIR</h2>
                <b>Type:</b> Surface - Deep<br />
                <b>Time:</b> 1 - 2 hours<br />
                <b>Process</b>: We match your vehicles paint by the OEM paint code located inside the driver side door jamb. Then, the damaged area is sanded, 
                primed and leveled out to ensure the surface is flat and smooth. Then, the paint and high gloss clear coat is applied.
                <br /><br />
                Example of the scratch repair process.
                <div className="services-video-wrapper">
                    <video controls poster={require('../../images/mazerati-screenshot.png')}>
                    <source className="services-video" src={require('../../videos/My Movie 5.mp4')} type="video/mp4" />
                    </video>
                </div>
                <hr />
                
                </li>
                <br /><br />
                <li><h2>COSMETIC RIM REPAIR</h2>
                <b>Type:</b> Gouges And Scratches<br />
                <b>Time:</b> 45 minutes - 1 hour<br />
                <b>Process</b>: We start by grinding down the scratched / gouged metal. Once the deep gouges are out, we change sanding grit and sand the metal to a smooth finish.
                Then, we clean the wheel and tire, dry it with a blower and towels, mask, prep, prime and paint followed by the original factory finish of the wheel (gloss, satin or matte).
                <br /><br />
                Example of the rim repair process.
                <div className="services-video-wrapper">
                    <video controls poster={require('../../images/bmw-rim-screanshot.jpeg')}>
                    <source className="services-video" src={require('../../videos/bmw-rims.mp4')} type="video/mp4" />
                    </video>
                </div>
                <hr />
                </li>
                {/* This is for Sean's website. */}
                {/*                 
                <br /><br />
                <li><h2>Paint Correction</h2>
                Paint correction is a specialized detailing process aimed at restoring the paintwork of a vehicle to its optimal condition. 
                Over time, a vehicle's paint can develop imperfections such as swirl marks, fine scratches, water spots, and oxidation due to various factors like improper washing techniques, environmental contaminants, and exposure to the elements. 
                Paint correction is designed to remove these imperfections, enhance the paint's clarity, and restore a deep, glossy finish. 
                <br /><br />
                <b>Paint Correction Process:</b>
                <br />
                <b>Step 1:</b> Claybar / Washing and decontamination to remove embedded dirt.<br />
                <b>Step 2:</b> Orbital buffer with cutting compound to remove imperfections and paint defects.<br />
                <b>Step 3:</b> orbital buffer with finishing polish to restore the factory shine.<br />
                <b>Step 4:</b> Sealant / Wax Application.
                <br />
                <br />
                <hr />
                </li>
                <br /><br /> */}
                <li><h2>Other Repairs</h2>
                Holes, cracks, fading, dull paint and replacing parts.
                <br />
                <br />
                <hr />
                </li>
                <li>
                  <br />
                <button className='services-close-btn' onClick={() => setInServices(!isServices)}>Close Services Section</button>
                </li>
            </ul>
            
        </div>      
        
</motion.div>


</div>













  )
}

export default Services