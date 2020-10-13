import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import firebase from "firebase";

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = () =>{
        console.log('hello')
    }

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value)
        
        console.log(email)
        
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }


    return(
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
                            sign in
                        </Button>
                       
                    </form>
                </Container>
    );
}


export default SignIn