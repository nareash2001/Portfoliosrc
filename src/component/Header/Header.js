import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = ({ selected, setSelected,setOpen}) => {
 
 
  return (
    <div className='header'>
      <div className='header-left'>
        <h1>Develop<span>er</span></h1>
        </div>
    <div className='header-right'>
<Link to='about' smooth={true} duration={500} >
  <h4 className={
              selected === "about" ? "header-right-active" : undefined
            }
            onClick={() => setSelected("about")}>About me</h4>
</Link>
<Link to='skills' smooth={true} duration={500}>
  <h4 className={
              selected === "skills" ? "header-right-active" : undefined
            }
            onClick={() => setSelected("skills")}>Skills</h4>
</Link>
<Link to='project' smooth={true} duration={500}>
  <h4
      className={
              selected === "project" ? "header-right-active" : undefined
            }
            onClick={() => setSelected("project")}>Projects</h4>
</Link>
<Link to='contact' smooth={true} duration={500}>
  <h4    className={
              selected === "contact" ? "header-right-active" : undefined
            }
            onClick={() => setSelected("contact")}>
			Contact</h4>
</Link>
<h4 className="header-right-semiactive" onClick={()=>setOpen(true)} >
          Join with Me
        </h4>

    </div>
</div>
  );
};

export default Header;

