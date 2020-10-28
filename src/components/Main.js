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
    const arrayData = data
                    ? Object
                        .keys(data)
                        .map(key => {
                            return {
                                id: key,
                                ...data[key]
                            }
                        })
                    : []
    if(mounted){
      setCounter(arrayData)
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