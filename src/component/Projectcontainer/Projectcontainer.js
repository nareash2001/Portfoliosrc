import React from 'react';
import {Element} from 'react-scroll';
import Project from '../Project/Project';
import './Projectcontainer.css';
import img1 from '../../organic.jpeg';



const Projectcontainer = () => {

    const projects=[
      
        {
             imag:img1,
            title:"Orangic Portal",
            desc:"This website allows you to buy the orangic product and see the description about the particular product.",
            link:"https://nareash2001.github.io/ulavan-organic/index.html"
        },
        {   
            imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCQK9yze_U_xtT2a63L8NavY8mZ2yyhS6FQ&usqp=CAU",
            title:"",
            desc:"coming soon...",
            link:"#"
        },
        {   
            imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCQK9yze_U_xtT2a63L8NavY8mZ2yyhS6FQ&usqp=CAU",
            title:"",
            desc:"coming soon...",
            link:"#"
        },
        {   
            imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCQK9yze_U_xtT2a63L8NavY8mZ2yyhS6FQ&usqp=CAU",
            title:"",
            desc:"coming soon...",
            link:"#"
        },
    ];
  return (
    <Element className='projectcontainer' id='project'>
        <h1>Projects</h1>
        <p>
            Here are some Projects which I done for making lives of people esay.
        </p>
        <div className='projectcontainer-projects'>
{
    projects.map((project,index)=>{
        return(
<Project key={index } imag={project.imag} title={project.title} desc={project.desc} link={project.link} />
        ) 
    })
}
        </div>
    </Element>
  )
}

export default Projectcontainer