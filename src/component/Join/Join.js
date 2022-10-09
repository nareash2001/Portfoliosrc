import React  from 'react';
import './Join.css';
import { Dialog , DialogTitle,DialogContentText, DialogActions  } from '@material-ui/core';

const Join = ({open,setOpen}) => {
    
     const email =event =>
      {
var subject=document.getElementById("subject").value;
  var body=document.getElementById("body").value;
  window.location.href="mailto:nareash2001@gmail.com?Subject="+subject+"&body="+body;
dialogclose();
     };
     const dialogclose=()=>
     {
         setOpen(false);
     };
    
    return (
      <>
      <Dialog open={open}>
          <DialogTitle> Mail Form</DialogTitle>
          <DialogContentText>
              
                  <div className='mail-name'> 
                          <strong>Name: </strong>  
                          <br/>                    
                      <input type="text" id="subject" className='mail-name-text'  />
                      </div>
                   <div className='mail-content'>
                       <strong>Feedback: 
                           </strong>
                           <br/>
                       <textarea id="body" className='mail-content-text'>
                         </textarea> 
                       </div>   
              
          </DialogContentText>
          <DialogActions>
            <button onClick={email} className="mail-button-send" >Send</button>
            <button onClick={dialogclose} className="mail-button-cancel"> Cancel</button>
          </DialogActions>
      </Dialog>
      </>

  )
};


export default Join