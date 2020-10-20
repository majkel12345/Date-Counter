import React from 'react'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link, Redirect} from "react-router-dom";
import firebase from "firebase";
import '../LogIn.css'



const Form = () => {
    return(
        <Container component="main" maxWidth="xs">
                    <form noValidate >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Nazwa"
                            label="Nazwa"
                            name="Nazwa"
                            autoComplete="email"
                            autoFocus
                            // onChange={handleOnChangeEmail}
                            // value={email}
                            />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Data"
                            label="Data"
                            id="Data"
                            autoComplete="current-password"
                            // onChange={handleOnChangePassword}
                            // value={password}
                            />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                            Dodaj
                        </Button>
                        <div style={{ paddingTop: '20px' }} >
                            <Link to='/'>Powrót</Link>
                        </div>
                       
                    </form>
                </Container>
    );
}

export default Form 