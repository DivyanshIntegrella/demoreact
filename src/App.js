import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


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
      <Router>
      <Navbar title="UtilTexts" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
      <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/home" element={<TextForm mode={mode}/>} />
          <Route path="/" element={<TextForm mode={mode}/>} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;