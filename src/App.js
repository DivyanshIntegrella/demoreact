import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'darkgrey'
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title="UtilTexts" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
      <TextForm mode={mode}/>
    </div>
    </>
  );
}

export default App;