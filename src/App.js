import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import { useState } from 'react';
// import About from './components/About';
function App() {
  const [mode,setMode] = useState('light')
  
  const toggleSwitch = () => {
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')  
    }
  }
  
  
  
  return (
   <>

<Navbar title="TextUtils" mode={mode} toggleSwitch={toggleSwitch} />
<div className="container my-3">
{ <TextForm heading="Enter the heading to continue"/> }
{/* <About/> */}
</div>

</>

  );
}

export default App;
