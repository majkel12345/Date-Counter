import React, { useEffect, useState } from 'react';
import Counter from './Counter'
import firebase, { auth } from 'firebase'
import '../App.css';

const Main = () => {




    return(
      <div className='container'>

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
      </div>
    );
}


export default Main