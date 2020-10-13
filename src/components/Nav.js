import React from 'react'
import {NavLink, Router} from "react-router-dom";
import Button from '@material-ui/core/Button';

const Nav = () => {
    
    
    return(
        <div>
            <Router>
                <Button color="inherit" component={NavLink} to='/signIn'>SignInn</Button>
            </Router>
            <p>as</p>
        </div>
    );
}

export default Nav