import React from 'react'
import '../ReviewsSection/ReviewsSection.css'

const ReviewsSection = () => {
  return (
    <div className='reviews-section-container'>
        <a href='https://g.co/kgs/cWBZQGr'><img className='google-logo' src={require('../../images/google-reviews-1-.png')} alt='5 Star Google Rating'/><br /><p style={{fontSize: 'small'}}>Click here to see more reviews</p></a>
            
        <br />
        <br />
        <div className='reviews-box-container'>
            <div className='reviews-box'>
                <h4>Kevin</h4>
                <img className='five-star-logo' src={require('../../images/5stars.png')} alt='5 Star Google Rating'/>
                <br /><br />
                <p>
                    " Bryan was on time, and fixed my bumper perfectly in just a few hours. 
                    It’s so nice to be able to stay home and have someone come to your house and take care of your vehicle. 
                    The one thing I really liked and appreciated, was Bryan’s honesty. He tells you what he can do, and then does it at a reasonable price. 
                    I’d call on him again and I’ll recommend him to friends. "
                </p>
                <br />
                <p style={{fontSize: 'x-small'}}>3 days ago</p>
            </div>
            <div className='reviews-box'>
                <h4>Sharon Tiger</h4>
                <img className='five-star-logo' src={require('../../images/5stars.png')} alt='5 Star Google Rating'/>
                <br /><br />
                <p>
                    " Bryan and his brother are fantastic!!! They made my Lexus look like brand new and it was filled with scratches and dents! 
                    They are ethical, hard working, dependable and have amazing skills!!
                    You cannot match their low prices! Their customer service is 10 STARS!!! "
                </p>
                <br />
                <p style={{fontSize: 'x-small'}}>1 weeks ago</p>
            </div>
            <div className='reviews-box'>
                <h4>Annette Jordan</h4>
                <img className='five-star-logo' src={require('../../images/5stars.png')} alt='5 Star Google Rating'/>
                
                <br /><br />
                <p>
                    " Benny was punctual with communication and arrived when he said he would be here. 
                    Service was done in my drive way and just like that, 2 Hours, it was done and looks great. 
                    If you’ve been procrastinating of getting your car repaired, just do it. 
                    You won’t be disappointed. "
                </p>
                
                <br />
                <p style={{fontSize: 'x-small'}}>2 weeks ago</p>
            </div>
        </div>
        <br />
        <br />
        
    </div>
  )
}

export default ReviewsSection