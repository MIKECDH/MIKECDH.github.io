import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from '../src/Components/Landing/Landing.js';

function App() {
  return (
    <Router>
        <div className="App">
            <CssBaseline/>
            <Landing/>
        </div>
    </Router>
  );
}

export default App;
