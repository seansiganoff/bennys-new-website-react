
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
             <b> STEP 1. </b>  Send a few pictures of the damage you need repaired via text messaging, to <a href="sms:469-969-5119">469-969-5119.</a> Please include the year make and model of the vehicle.
              <br /><br />
              <b> STEP 2. </b>  Wait for us to send you a quote.

              <br /><br />
              <b> STEP 3. </b>  If you are satisfied with the quote and want to proceed, let us know and we will setup a date and time that works for you to come out and do the repairs.
              <br />
              <br />
               <h4>All our work comes with a 100% satisfaction guarantee and a Lifetime Warranty.</h4><Link to={'/lifetime-warranty'}><button className="guaranteeBtn">CLICK HERE TO LEARN MORE!</button></Link>
            </p>
        </div>
    </div>
  )
}

export default QuickQuote