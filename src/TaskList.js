import React from 'react';
import Task from './Task';

function TaskList({ tasks, removeTask, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;
