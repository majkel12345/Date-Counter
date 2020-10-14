import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link, Redirect} from "react-router-dom";
import firebase from "firebase";
import '../LogIn.css'


const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        if (props.isSignUp) {
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                   setRedirect(true)
                })
                .catch((error) => {
                    alert(error.message);
                })
        } else {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    setRedirect(true)
                })
                .catch((error) => {
                    alert(error.message);
                })
        }
    }

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
    }


    return(
        
            <div className='logIn'>
                {redirect ?
                    <Redirect to='/'/>
                : 
                <Container component="main" maxWidth="xs">
                    <form noValidate onSubmit={handleOnSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleOnChangeEmail}
                            value={email}
                            />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleOnChangePassword}
                            value={password}
                            />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                            {
                                props.isSignUp ? 
                                'sign Up'
                                :
                                'sign In'
                            }
                        </Button>
                        <div style={{ paddingTop: '20px' }} >
                            {props.isSignUp
                                ? <Link to='/signIn'>Already have an account? Sign In</Link>
                                : <Link to='/signUp'>Don't have an account? Sign Up</Link>
                            }
                        </div>
                       
                    </form>
                </Container>
                }   
            </div>
    );
}


export default SignIn