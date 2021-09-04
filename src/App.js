import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';



function App() {
  const [mode, setMode] = useState('light') // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      {/* <Navbar title="RadioButton" aboutText="About RadioButtons" /> */}
      <Navbar title="RadioButton" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>

    </>
  )
}

export default App;
