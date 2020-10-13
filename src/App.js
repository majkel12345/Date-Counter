import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Router, Link } from 'react-router-dom';
import SignIn from './components/SignIn'
import Main from './components/Main'
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

function App() {





  return (
    <Router>
      <Button color="inherit" component={NavLink} to='/'>Home</Button>


    </Router>


      
  
  );
}

export default App;
