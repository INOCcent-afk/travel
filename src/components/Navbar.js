import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <>
           <header>
               <div className="logo">
                   HELLO
               </div>
               <div className="links">
                   <ul className="nav_Links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                   </ul>
               </div>
           </header>
        </>
    )
};

export default Navbar
