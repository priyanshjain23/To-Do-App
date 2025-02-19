import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [lastAction, setLastAction] = useState(null);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const taskToRemove = tasks.find(task => task.id === id);
    setTasks(tasks.filter(task => task.id !== id));
    setLastAction({ type: 'remove', task: taskToRemove });
    setTimeout(() => setLastAction(null), 5000);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const taskToToggle = tasks.find(task => task.id === id);
    setTasks(updatedTasks);
    setLastAction({ type: 'toggle', task: taskToToggle });
    setTimeout(() => setLastAction(null), 5000);
  };

  const undoLastAction = () => {
    if (lastAction) {
      if (lastAction.type === 'remove') {
        setTasks([...tasks, lastAction.task]);
      } else if (lastAction.type === 'toggle') {
        const updatedTasks = tasks.map(task =>
          task.id === lastAction.task.id ? { ...task, completed: !lastAction.task.completed } : task
        );
        setTasks(updatedTasks);
      }
      setLastAction(null);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskList tasks={tasks} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} />
      <button onClick={() => addTask(prompt('Enter a new task:'))}>Add Task</button>
      {lastAction && (
        <div className="undo-notification">
          <p>Task {lastAction.type === 'remove' ? 'removed' : 'toggled'}.</p>
          <button onClick={undoLastAction}>Undo</button>
        </div>
      )}
    </div>
  );
}

export default App;
