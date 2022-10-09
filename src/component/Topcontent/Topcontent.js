import React from 'react'
import { Link } from 'react-scroll'
import './Topcontent.css';

const Topcontent = ({ setSelected }) => {
  return (
    <div className='topcontent'>
        <div className='topcontent-container'>
            <h1>Mr.Nareash Kumar K C </h1>
            <p> A Professional Code Developer</p>
            <a href="https://drive.google.com/file/d/1OmHXJDMHvZrq_Tl2Tf5W6FwCueqvvT8X/view?usp=drivesdk" target="_blank"  rel="noopener noreferrer">
                <button className='topcontent-download'>Download Resume </button>
                    </a>
            <Link to='project' smooth={true} duration={500} >
                <button className='topcontent-work' onClick={() => setSelected("project")}>My Work</button>
                </Link>       
            
        </div>
      
    </div>
  )
}

export default Topcontent
