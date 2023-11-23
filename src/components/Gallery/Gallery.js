import React from 'react';
import './Gallery.css';
import ImageCarousel from '../carousel/imageCarousel'

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
          <h3>Dent</h3>
              <video controls poster={require('../../images/acura-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/acura.mp4')} type="video/mp4" />
              </video>
          </div>
          
          {/* <div className="gallery-video-wrapper">
          <h3>Big Dent</h3>
              <video controls poster={require('../../images/pickup-truck-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/My Movie 6.mp4')} type="video/mp4" />
              </video>
          </div> */}
     </div>
     <br />
     <hr />
     <br />
      
      {/* Scratches */}
      <div className='gallery-scratches'>
        <div className="gallery-video-wrapper">
          <h3>Scratches</h3>
              <video controls poster={require('../../images/mazerati-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/My Movie 5.mp4')} type="video/mp4" />
              </video>
          </div>
          
          <div className="gallery-video-wrapper">
          <h3>Bumper alignment</h3>
              <video controls poster={require('../../images/bentley-bumper-screenshot.png')}>
                <source className="gallery-video" src={require('../../videos/My Movie 4.mp4')} type="video/mp4" />
              </video>
          </div>
     </div>
     <br />
     <hr />
     <br />
     {/* Rims */}
      <div className='gallery-rims'>
        <div className="gallery-video-wrapper">
          <h3>Rim Repair: BMW</h3>
              <video controls poster={require('../../images/bmw-rims-screenshot.jpeg')}>
                <source className="gallery-video" src={require('../../videos/bmw-rims.mp4')} type="video/mp4" />
              </video>
          </div>
          
          <div className="gallery-video-wrapper">
          <h3>Rim Repair: Tesla</h3>
              <video controls poster={require('../../images/tesla-rims-screenshot.jpeg')}>
                <source className="gallery-video" src={require('../../videos/tesla-rims.mp4')} type="video/mp4" />
              </video>
          </div>
     </div>



      
      
    </div>
  )
}

export default Gallery