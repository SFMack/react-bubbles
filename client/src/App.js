import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import {PrivateRoute} from './PrivateRoute/PrivateRoute.js';
import BubblePage from './components/BubblePage.js'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/bubblePage'>Bubbles</Link></li>
        </ul>

        
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
