import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a react person</p>
       <Counter></Counter>
       <Person></Person>
       <Person></Person>
       <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle = {
    border: '2px solid red',
    margin: '3px',
    padding: '20px'
  }
  return (
  <div style={personStyle}>
    <h1>Shakib Al Hassan</h1>
    <h3>hero of the year</h3>
  </div>
  );
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>COUNT: {count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={ () => setCount(count - 1)}>decrease</button>
    </div>
  )
}


export default App;
