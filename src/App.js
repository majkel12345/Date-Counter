import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import SignIn from './components/SignIn'
import Main from './components/Main'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from 'firebase'
import Form from './components/Form'


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
    return () => {
      unsubscribe();
    }
    })

  const handleOnClick = () => {
       firebase.auth().signOut();
       console.log('loged out')
  }

  return (
        <div>
            <BrowserRouter>
              <div className='navBar'>
                {/* {user && `Hello ${user.email}!!`} */}
                {
                  user ?
                  <div>
                    <span>Hello {user.email}!!</span>
                    <Button style={{padding:'10px',margin:'10px', border:'1px solid white'}} color="inherit" component={NavLink} to='/' onClick = {handleOnClick}>Sign Out</Button>
                    <Button style={{padding:'10px',margin:'10px', border:'1px solid white'}} color="inherit" component={NavLink} to='/addNew'>
                      Dodaj wydarzenie
                    </Button>
                  </div>
                  :
                  <Button style={{padding:'10px', margin:'10px', border:'1px solid white'}} color="inherit" component={NavLink} to='/signIn'>Sign In</Button>
                }
              </div>
                <Switch>
                    {/* <Route exact path="/">
                        <Main />
                    </Route> */}
                    {user ?
                      <Route exact path="/">
                        <Main logedIn/>
                      </Route>
                      :
                      <Route exact path="/">
                          <Main />
                      </Route>
                    }
                    <Route path="/signIn">
                        <SignIn/>
                    </Route>
                    <Route path="/signUp">
                        <SignIn isSignUp/>
                    </Route>
                    <Route path="/addNew">
                        <Form/>
                    </Route>
                   
                </Switch>
            </BrowserRouter>
        </div>

  );
}

export default App;
