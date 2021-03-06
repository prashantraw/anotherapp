import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light') // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'darkblue'
      showAlert("Dark Mode has been Activated", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Activated", "success")
    }
  }

  return (
    <>
      {/* <Navbar title="RadioButton" aboutText="About RadioButtons" /> */}
      <Router>
      <Navbar title="RadioButton" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
            <Route exact path = "/about">
              <About mode={mode}/>
            </Route>
            <Route exact path = "/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
        </Switch>
       </div>
      </Router> 
    
    </>
  )
}

export default App;
