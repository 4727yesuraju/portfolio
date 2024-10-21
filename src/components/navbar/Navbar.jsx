import React from 'react';
import {motion} from 'framer-motion'
import './navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
       {/* Sidebar */}
       <div className="wrapper">
           <motion.span 
             animate = {{scale : 1.2}}
             transition = {{duration : 1}}
           >YESU RAJU</motion.span>
           <div className="socials">
                <a href="">
                    <img src="/facebook.png" alt="" />
                </a>
                <a href="">
                    <img src="/instagram.png" alt="" />
                </a>
                <a href="">
                    <img src="/youtube.png" alt="" />
                </a>
                <a href="">
                    <img src="/dribbble.png" alt="" />
                </a>
           </div>
       </div>
    </div>
  )
}

export default Navbar
