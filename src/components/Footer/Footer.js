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
                                        <li>Text: <b><a href="sms:561-573-5887">561-573-5887</a></b></li>
                                        <li>Call: <b><a href="tel:561-573-5887">561-573-5887</a></b></li>
                                        
                                
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="contact-us">
                            <h3>HOURS</h3>
                            <p>Monday - Friday: 9AM - 9PM. <br />
                            Saturday: 9AM - 9PM.<br />
                            Sunday: 2pm - 5PM.</p>
                        </div>
                    </div>
            </div>
            <div className="copyright">
            MOBILE DENT AND SCRATCH REPAIR LLC.
        </div>
    </>
  )
}

export default Footer