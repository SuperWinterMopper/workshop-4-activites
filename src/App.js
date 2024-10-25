import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function Item(props) {
  const color = props.done ? 'lightgreen' : 'lightpink';

  return (
    <div style={{backgroundColor: color, width: '500px', height: '100px'}} onClick={props.handleDone}>
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

const TASKS = [
  {
    title: 'laundry',
    description: 'wash clothes',
    deadline: 'tomorrow',
    done: false,
  },
  {
    title: 'dishes',
    description: 'pots and pans',
    deadline: 'oct 30',
    done: false,
  },
  {
    title: 'taxes',
    description: 'dont get audited',
    deadline: 'nov 1',
    done: false,
  }
]

function App() {
  const [mode, setMode] = useState('light');
  const [tasks, setTasks] = useState(TASKS);

  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

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
  const textColor = mode === 'light' ? 'black' : 'white';

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      <Title />
      <h2>My tasks for today</h2>
      <button onClick={switchMode}>Dark mode</button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <Item title={task.title} description={task.description} deadline={task.deadline} done={task.done} handleDone={() => handleDone(index)}/>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
