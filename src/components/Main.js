import React, { useEffect, useState } from 'react';
import Counter from './Counter'
import firebase, { auth } from 'firebase'

const Main = () => {

    const [currentUser, setUser] = useState(null)

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user)
      })
    })

    return(
      <div className='counters'>
        <Counter 
        name = 'Nowy Rok'
        date = '1 Jan 2021'
        />
        <Counter 
        name = 'Moje Urodziny'
        date = '18 Feb 2021'
        />
        <Counter 
        name = 'Moje Urodziny'
        date = '18 Feb 2021'
        />
      </div>
    );
}


export default Main