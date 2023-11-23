import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ImageCarousel.css';



const ImageCarousel = () => {


    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <div className='carousel-section'>
      <div className='carousel-container'>
        <div className='carousel-text'>
          <h2>Crease Dent. </h2>
        </div>
        <Carousel responsive={responsive}>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-before.jpg')} className="carousel-image"  alt='Mercedes'/> 
              <div className='image-overlay'>
                
              </div>
            </div>
            <h4>Mercedes ML</h4>
            <p>Before</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-primer.jpg')} className="carousel-image"  alt='Mercedes'/> 
              <div className='image-overlay'>
                
              </div>
            </div>
            <h4>Mercedes ML</h4>
            <p>Primer</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-paint.jpg')} className="carousel-image"  alt='Mercedes'/> 
              <div className='image-overlay'>
                
              </div>
            </div>
            <h4>Mercedes ML</h4>
            <p>Paint</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-finish1.jpg')} className="carousel-image"  alt='Mercedes'/> 
              <div className='image-overlay'>
                
              </div>
            </div>
            <h4>Mercedes ML</h4>
            <p>Clear Coat</p>
          </div>
          
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <video controls poster={require('../../images/mercedes-screenshot.png')} className="carousel-image"  alt='Mercedes'>
                <source className="video" src={require('../../videos/IMG_2158.MOV')} type="video/mp4" />
              </video>
              
              <div className='image-overlay'>
                
              </div>
            </div>
            <h4>Mercedes ML</h4>
            <p>Click play for the finished product.</p>
          </div>
          
          
        </Carousel>
      </div>
    </div>
  )
}

export default ImageCarousel