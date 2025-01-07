import React from 'react';
import './FAQs.css';
import { Link } from 'react-router-dom';



const FAQs = () => {


    



  return (
    

    <div className="faqs-container">
            <h3 className='faq-heading'>HOW TO GET AN ESTIMATE?</h3>
        <div>
            <div className='faqs-text-div'>
                <p>
                    <b>Step 1.</b> Send us a picture of the damaged area's on your vehicle via text message.<br /><br />
                    <b>Step 2.</b> Wait for an estimate - It usually takes about 10 minutes. <br /><br />
                    <b>Step 3.</b> If you want to proceed with the repairs, let us know, and we will schedule a date and time that works for you and do the repairs at your place of choice (Home or office).<br />
                    <br /><br />
                    <b>Please Note: </b>
                    Payment is not required until the work is complete. Once the work is complete, if you are not satisfied with the repairs,
                    it's completely free! <button><Link to={'/our-guarantee'}>Click Here To Learn More</Link></button>
                    <br /><br />
                    Forms of payments we accept: Cash, Check, Zelle, CashApp, Venmo.
                </p>
            </div>
        </div>
    </div>



  )
}

export default FAQs