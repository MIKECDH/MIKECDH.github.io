import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../src/Components/Navbar/Navbar.js';
import Landing from '../src/Components/Landing/Landing.js';
import About from '../src/Components/AboutMe/AboutMe.js'
import Project from '../src/Components/Projects/Projects.js';

function App() {
  return (
    <Router>
        <div className="App">
            <CssBaseline/>
            {/* <Navbar/> */}
            <Landing/>
        </div>
    </Router>
  );
}

export default App;
