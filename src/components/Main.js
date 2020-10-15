import React, { useEffect, useState } from 'react';
import Counter from './Counter'
import DATA_BASE from '../index'
import '../App.css';


const Main = (props) => {

const [counter, setCounter] = useState([])

useEffect(()=>{
  fetch(`${DATA_BASE}/events.json`)
  .then(response => response.json())
  .then(data => {
    setCounter(data)
  })
})


    return(
      <div className='container'>

        <div className='counters'>
        {counter.map((event, index)=>{
          return <Counter
          key = {index} 
          name = {event.name}
          date = {event.date}
          />
        })
        }
        </div>
        {props.logedIn ?
        <button>
          klik
        </button>
        : null
        }
      </div>
    );
}


export default Main