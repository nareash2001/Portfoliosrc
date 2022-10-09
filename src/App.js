import React,{useState} from 'react';
import './App.css';
import Header from './component/Header/Header';
import Skillcontainer from './component/Skillcontainer/Skillcontainer';
import Topcontainer from './component/Topcontainer/Topcontainer';
import Projectcontainer from './component/Projectcontainer/Projectcontainer';
import Contactcontainer from './component/Contactcontainer/Contactcontainer';
import Join from './component/Join/Join';
function App() {
  const [selected, setSelected] = useState("about");
  const [open, setOpen] = useState(false);
  return (
    <div >
      
    <Header  selected={selected} setSelected={setSelected} setOpen={setOpen}/>
    <Join open={open} setOpen={setOpen}/>
    <Topcontainer setSelected={setSelected}/>
    <Skillcontainer/>
    <Projectcontainer />
    <Contactcontainer/>
    </div>
  );
}

export default App;
