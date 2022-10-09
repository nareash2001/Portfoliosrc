import React from 'react'
import { useState } from 'react'
import "./Project.css";

const Project = ({imag, title,desc,link}) => {
    const [show,setShow]= useState(false);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                {
                    show ?(
                        <div className='project-content'>
                            <h4>{title} 
                            </h4>
                            <p>{desc}  </p>
                        </div>
                    ):(
                        <div  className='project-image'>
                         <img src={imag} alt="" /> 
                         </div>
                    )
                }
        </div>
    

     </a>
    
  )
}

export default Project