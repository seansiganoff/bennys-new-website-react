import React, { useState } from 'react';
import './FAQs.css';
import { motion } from 'framer-motion';




const FAQs = () => {
    const [isFAQ, setIsFAQ] = useState(false);


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
    

            <div className="faqs-container">
                <div className="faq-banner">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsFAQ(!isFAQ)}
                    >
                    {<div>HOW IT WORKS</div>}
                    </motion.button>
                </div>
                <motion.div animate={isFAQ ? show : hide}> 
                    <div className='faq'>
                        <div className="faq-cards-div">
                            <div className="question-cards">
                                {/* <h3>How Does It Work?</h3> */}
                                <p>
                                    <b>Step 1.</b> Send us a picture of the damaged area's on your vehicle via text message.<br /><br />
                                    <b>Step 2.</b> We will review the picture's and send you an estimate. <br /><br />
                                    <b>Step 3.</b> If you want to proceed with the repairs, we will schedule a date and time that works for you and do the repairs at your place of choice (Home or office).<br />
                                    Payment is not required until the work is complete. Once the work is complete, if you are not satisfied with the repairs
                                    the work is free. If you are satisfied, you can pay by Cash, Check, Zelle, Cashapp or Venmo.
                                </p>
                            </div>
                            {/* This is for Sean's website */}
                            {/* <div className="question-cards">
                                <h3>What If I Am Not Satisfied With The Repairs?</h3>
                                <p>Finding a professional, reasonable and honest body shop is stressful. To make the process less stressful for our customer's, WE GUARANTEE OUR WORK!
                                    <br /><br />
                                    <button onClick={() => window.location.href = './our-guarantee'}>CLICK HERE TO LEARN MORE!</button>
                                </p>
                            </div> */}

                            {/* <div className="question-cards">
                                <h3>Do You Come To My House?</h3>
                                <p>Yes! We are a body shop on wheels. We will come to your place (Home or office) and do the repairs on the spot.</p>
                            </div>
                        
                        
                            <div className="question-cards">
                                    <h3>How Long Does The Repairs Take?</h3>
                                    <p>
                                        Most repairs take about 1 - 2 hours on average.
                                        </p>
                            </div>  */}
                        </div>
                        <br />
                        <button className='faq-close-btn' onClick={() => setIsFAQ(!isFAQ)}>Close FAQ's Section</button>
                    </div>
                </motion.div>
            </div>



  )
}

export default FAQs