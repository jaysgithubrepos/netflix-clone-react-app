import React, { useEffect, useState } from 'react'
import Netflix from "./Assets/netflix.png";
import Avatar from "./Assets/Netflix-avatar.png";
import "./Nav.css";

function Nav() {
    const [show,handleShow]=useState(false);

     useEffect(()=>{
         window.addEventListener("scroll",()=>{
         if(window.scrollY > 100){
                 handleShow(true);
    console.log("jaiif");
                 
    

          } 
    else handleShow(false);

          });
        return () => {
        //window.removeEventListener("scroll");
    console.log("jai");
       };


     },[]
    
     );

  return (
    <div className={`nav ${show && "nav__black"}`}>
 <img className="nav-logo" src={Netflix} alt="Netflix-logo"></img>
 <img className="nav-avatar" src={Avatar} alt="Netflix-logo"></img>



    </div>
  )
}

export default Nav