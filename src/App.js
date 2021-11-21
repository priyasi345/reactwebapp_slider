import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { InfoData } from './data/InfoData';
import React,{useState} from 'react';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
function App() {
  const [isOpen,setIsOpen]=useState(false)
  const toggle=() => {
    setIsOpen(!isOpen);
  };
  return (
 <>
 <GlobalStyle/>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Hero slides={SliderData}/>
     <InfoSection {...InfoData}/>
  </>
  );
}

export default App;
