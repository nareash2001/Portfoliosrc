import { IconButton } from '@material-ui/core';
import React from 'react';
import {Element} from 'react-scroll';
import {LinkedIn} from '@material-ui/icons';
import './Contactcontainer.css';

const Contactcontainer = () => {
  return (

        <Element id='contact' className='contact'>
            <h1>Contact</h1>
            <div className='contact-container'>
                <p>
                    Email : <span>nareash2001@gmail.com</span>
                </p>
                <p>
                    Github Username :<a href='https://github.com/nareash2001' target="_blank" rel="noopener noreferrer"> <span>@nareash2001</span></a>
                </p>
                <div className='contact-icon'>
                <a href="https://www.linkedin.com/in/k-c-nareash-kumar-6536861ba" target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
               
            </div>
            </div>
            

        </Element>
  )
}

export default Contactcontainer