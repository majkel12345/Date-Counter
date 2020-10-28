import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link, Redirect} from "react-router-dom";
import DATA_BASE from '../index'
import firebase from "firebase";
import '../LogIn.css'



const Form = () => {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    const handleOnChangeName = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const handleOnChangeDate = (event) => {
        setDate(event.target.value)
        console.log(date)
    }

    const resetForm = () => {
        setName('')
        setDate('')
    }

    const newForm = {
        date: date,
        name: name
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        fetch(`${DATA_BASE}/events.json`, {
            method: 'POST',
            body: JSON.stringify(newForm)
        }).then(() => {
            resetForm();
            console.log('good')
        })
    }


    return(
        <Container component="main" maxWidth="xs">
                    <form noValidate onSubmit = {handleOnSubmit}>
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
                            onChange={handleOnChangeName}
                            value={name}
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
                            onChange={handleOnChangeDate}
                            value={date}
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