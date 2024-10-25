import logo from './logo.svg';
import { useState, useEffect } from 'react';
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

function Title() {
  return (
    <h1>Todo List App</h1>
  )
}

function App() {
  const [mode, setMode] = useState('light');

  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else if (mode === 'dark') {
      setMode('light');
    }
  }

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  const backgroundColor = mode === 'light' ? 'white' : 'darkgrey';

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Title />
      <h2>My tasks for today</h2>
      <button onClick={switchMode}>Dark mode</button>
      <ul>
        <Item title="laundry" description="wash clothes" deadline="tomorrow" />
        <Item title="dishes" description="pots and pans" deadline="oct 30" />
        <Item title="taxes" description="dont get audited" deadline="nov 1" />
      </ul>
    </div>
  );
}

export default App;
