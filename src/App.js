import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  return (
    <>
      <h1>Todo List App</h1>
      <h2>My tasks for today</h2>
      <button>Dark mode</button>
      <ul>
        <div style={{backgroundColor: 'lightgrey', width: '500px', height: '100px'}}>
          <h3>Task 1</h3>
          <p>Task 1 description</p>
          <p>task 1 deadline</p>
        </div>
        <div style={{backgroundColor: 'lightgrey', width: '500px', height: '100px'}}>
          <h3>Task 2</h3>
          <p>Task 2 description</p>
          <p>task 2 deadline</p>
        </div>
        <div style={{backgroundColor: 'lightgrey', width: '500px', height: '100px'}}>
          <h3>Task 3</h3>
          <p>Task 3 description</p>
          <p>task 3 deadline</p>
        </div>
      </ul>
    </>
  );
}

export default App;
