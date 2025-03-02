import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
        <div className="footer-container">
                <div className="footer-overlay" id="contact-us">
                    <div className="contact-us">
                        <h3>CONTACT</h3>
                        <div className="contact-container">
                            <div className="desktop-footer">
                                <ul> Call or text for a free estimate.
                                    <li>Text: <b><a href="sms:469-974-2446">469-974-2446</a></b></li>
                                    <li>Call: <b><a href="tel:469-974-2446">469-974-2446</a></b></li>
                                    
                            
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us">
                        <h3>HOURS</h3>
                        <p>Monday - Saturday: 9AM - 9PM. <br />
                        Sunday: 12PM - 4PM</p>
                    </div>
                </div>
        </div>
            
        
    </>
  )
}

export default Footer