import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import {AnimatePresence, motion} from 'framer-motion';







const Nav = () => {

  const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }

  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:0
      }
    }
  }






  return (
    
  <div>
    <div className="container">
    <div className='nav-container'>
        <div className='nav-number'>
             <Link to={'/get-an-estimate'}>Get An Estimate</Link> 
        </div>
        
        <div className='sandwich-menu-container' onClick={() => isOpen()}>
          <div className='sandwich-menu'></div>
          <div className='sandwich-menu'></div>
          <div className='sandwich-menu'></div>
        </div>
      </div>
      <AnimatePresence>
        {
          open &&(
            <motion.div className="menu_container"
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
            >
              <div className="close-btn-div">
                <button onClick={closeMenu}>X</button>
              </div>
              <div className='nav-links'>
                <ul>
                <motion.li><Link onClick={closeMenu} to={'/'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay: 0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >HOME</Link></motion.li>  
                  {/* <motion.li><Link onClick={closeMenu} to={'/our-guarantee'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay: 0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >OUR GUARANTEE</Link></motion.li>   */}
                  
                    

                    <motion.li><Link onClick={closeMenu} to={'/gallery'}
                    initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.0}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:0
                        }
                    }}
                  >GALLERY</Link></motion.li>   
                </ul>
                
              
              
              
              </div>
            </motion.div>
          )
        }    
      </AnimatePresence>  
      
     
    </div>
  </div>
    
  )
}

export default Nav