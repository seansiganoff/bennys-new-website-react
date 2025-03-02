import React from 'react';
import './Gallery.css';
// import ImageCarousel from '../carousel/imageCarousel'

const Gallery = () => {
  return (
    <div className='gallery-container'>
      <h1>Gallery</h1>

      {/* Dents */}
      {/* {<ImageCarousel />} */}
     <br />
     <hr />
     <br />
     <div className='gallery-dents'>
        <div className="gallery-video-wrapper">
              <video controls poster={require('../../images/audi-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/audi-r8.mp4')} type="video/mp4" />
              </video>
              <video controls poster={require('../../images/2021-red-corvette-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/2021 red corvette.mp4')} type="video/mp4" />
              </video>
              <video controls poster={require('../../images/acura-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/acura-mdx-front-fender-and-bumper.mp4')} type="video/mp4" />
              </video>
              <video controls poster={require('../../images/audi-bumper-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/audi-bumper-scratch.mp4')} type="video/mp4" />
              </video>
              <video controls poster={require('../../images/ferrari-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/ferrari-bumper.mp4')} type="video/mp4" />
              </video>
              <video controls poster={require('../../images/mercedes-ml-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/mercedes-ml.mp4')} type="video/mp4" />
              </video>
              
              
              
              <video controls poster={require('../../images/gtc-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/My Movie 7.mp4')} type="video/mp4" />
              </video>

              <video controls poster={require('../../images/pickup-truck-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/My Movie 6.mp4')} type="video/mp4" />
              </video>
              <video controls poster={require('../../images/bmw-rims-screenshot.jpeg')}>
                <source className="gallery-video" src={require('../../videos/bmw-rims.mp4')} type="video/mp4" />
              </video>
              <video controls poster={require('../../images/tesla-rims-screenshot.jpeg')}>
                <source className="gallery-video" src={require('../../videos/tesla-rims.mp4')} type="video/mp4" />
              </video>
          </div>
          
          



      </div>
      
    </div>
  )
}

export default Gallery