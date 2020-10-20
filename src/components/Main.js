import React, { useEffect, useState } from 'react';
import Counter from './Counter'
import DATA_BASE from '../index'
import '../App.css';


const Main = () => {

const [counter, setCounter] = useState([])

useEffect(()=>{
  let mounted = true
  fetch(`${DATA_BASE}/events.json`)
  .then(response => response.json())
  .then(data => {
    if(mounted){
      setCounter(data)
    }
  })
  return () => mounted = false
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
        
      </div>
    );
}


export default Main