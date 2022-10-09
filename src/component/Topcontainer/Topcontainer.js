import React from 'react'
import './Topcontainer.css';
import {Element} from "react-scroll" 
import Topcontent from '../Topcontent/Topcontent';
const Topcontainer = ({ setSelected }) => {
  return (
    <Element id="about" className='topcontainer'>
        <Topcontent setSelected={setSelected}/>
    </Element>
  )
}

export default Topcontainer
