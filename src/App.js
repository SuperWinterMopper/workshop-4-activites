import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Item(props) {
  return (
    <div style={{backgroundColor: 'lightpink', width: '500px', height: '100px'}}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.deadline}</p>
    </div>
  )
}

function App() {

  return (
    <>
      <h1>Todo List App</h1>
      <h2>My tasks for today</h2>
      <button>Dark mode</button>
      <ul>
        <Item title="laundry" description="wash clothes" deadline="tomorrow" />
        <Item title="dishes" description="pots and pans" deadline="oct 30" />
        <Item title="taxes" description="dont get audited" deadline="nov 1" />
      </ul>
    </>
  );
}

export default App;
