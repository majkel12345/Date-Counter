import React from 'react'
import {NavLink, BrowserRouter} from "react-router-dom";
import Button from '@material-ui/core/Button';
import SignIn from './SignIn'

const Nav = () => {
    
    
    return(
        <div>
            <BrowserRouter>
                <Button color="inherit" component={NavLink} to='/signIn'>SignInn</Button>
                <Switch>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Nav