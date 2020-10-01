import React from 'react';
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="container">
      <h1>Sprawdź ile czasu zostało do wyczekiwanych zdarzeń!</h1>
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

export default App;
