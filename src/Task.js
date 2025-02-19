import React from 'react';

function Task({ task, removeTask, toggleTaskCompletion }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#bbb' : '#333' }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
}

export default Task;
