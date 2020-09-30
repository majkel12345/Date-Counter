import React from 'react';
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="container">
      <h1>Date Counter</h1>
      <div className='counters'>
        <Counter 
        name = 'Nowy Rok'
        />
      </div>
    </div>
  );
}

export default App;
