import React from 'react'
import './Home.css';
import Dropdown from '../Dropdown/Dropdown';

const Home = () => {
  return (
    <div className='home-container'>
        {/* This is for the vehicle icons that. Keep this removed for bennys website */}
        {/* <div className="vehicle-icons">
            <div className="vehicle-icons-inner-div-top">
                <img src={require('../../images/tesla.png')} alt='Tesla Logo' />
                <img src={require("../../images/mercedes-icon.png")} alt='Mercedes Logo'/>
                <img src={require("../../images/audi-icon.gif")} alt='Audi'/>
                <img src={require("../../images/porsche-icon.png")} alt='Porsche Logo'/>
                <img src={require("../../images/bentley-icon.png")} alt='Bentley Logo'/>
                <img src={require("../../images/lambo-icon.jpg")} alt='Lamborghini Logo'/>
            </div>
        </div> */}
        
        <div className='logo-div'>
        
            <img className="company-logo" src={require("../../images//bennys-new-company-logo.png")} alt='Company Logo'/>
            <p>
            <b>Dent And Scratch Repair Done At Your Home Or Office.</b><br />
            </p>
            <div className="locations"><b>Serving:</b> Boca Raton, Delray Beach, Boynton Beach.</div>
            {/* This is for the vehicle icons that. Keep this removed for bennys website */}
            {/* <div className="vehicle-icons">
                <div className="vehicle-icons-inner-div-bottom">
                    <img src={require("../../images/Land-Rover-icon.png")} alt='Land Rover Logo'/>
                    <img src={require("../../images/lexus-icon.png")} alt='Lexus Logo'/>
                    <img src={require("../../images/bmw-icon.png")} alt='BMW Logo'/>
                    <img src={require("../../images/jaguar-icon.jpg")} alt='Jaguar Logo'/>
                    <img src={require("../../images/infiniti-icon.jpg")} alt='Infiniti Logo'/>
                    <img src={require("../../images/caddilic-icon.jpg")} alt='Caddilac Logo'/>
                </div>
            </div> */}
        </div>
        {<Dropdown />}
        
    </div>
  )
}

export default Home