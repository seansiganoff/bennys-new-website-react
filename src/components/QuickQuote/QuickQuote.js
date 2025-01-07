import React from 'react';
import './QuickQuote.css';
import { Link } from 'react-router-dom';

const QuickQuote = () => {
  return (
    <div>
        <div className='quick-quote-container'>
            <div className='quick-quote-banner'>Need An Estimate?</div>
            
            <h4>The fastest way to get a estimate, is to send us some pictures of the damage, via text messaging.</h4>
              <br />
              <br />
              <p>
             <b> STEP 1. </b>  Send a few pictures via text, of the damage you need repaired to <a href="sms:469-974-2446">469-974-2446.</a> Also, please include the year make and model of the vehicle.
              <br /><br />
              <b> STEP 2. </b>  Wait for us to send you a quote.

              <br /><br />
              <b> STEP 3. </b>  If you are satisfied with the quote and want to proceed with the repairs, let us know and we will setup a date and time that works for you.
            </p>
        </div>
    </div>
  )
}

export default QuickQuote