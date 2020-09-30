import React, { useEffect, useState } from 'react'
import '../Counter.css'

const Counter = ({name}) => {

    const newYear = '1 Jan 2021'

    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    const timeInSeconds = (newYearDate - currentDate) /1000
        
    const days = Math.floor(timeInSeconds / 3600 / 24);
    const hours = Math.floor(timeInSeconds / 3600) % 24; 
    const minutes = Math.floor(timeInSeconds / 60) % 60;
    const seconds = Math.floor(timeInSeconds) % 60;

    const [secondsCounter, setSecondsCounter] = useState(null)
    
        useEffect(() => {
            setInterval(()=> {
                setSecondsCounter(seconds)
                setSecondsCounter(minutes)
                setSecondsCounter(hours)
                setSecondsCounter(days)
            },1000)
        })
    

    return(
        <div className='counter'>
            <h3>{name}</h3>
            <div className='timeLeft'>
                <div>
                    {days}
                    <p>Dni</p>
                </div>
                <div>
                    {hours}
                    <p>Godzin</p>
                </div>
                <div>
                    {minutes}
                    <p>Minut</p>
                </div>
                <div>
                    {seconds}
                    <p>Sekund</p>
                </div>
            </div>

        </div>
    );
}

export default Counter