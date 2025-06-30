import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddTask = () => {
    if (!taskName.trim()) {
      alert('Please enter a task name.');
      return;
    }

    const now = new Date();
    const defaultDate = new Date(now);
    defaultDate.setDate(now.getDate() + 1);

    const finalDate = date || defaultDate.toISOString().split('T')[0];
    const finalTime = time || now.toTimeString().slice(0, 5);

    const newTask = {
      name: taskName,
      date: finalDate,
      time: finalTime,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setDate('');
    setTime('');
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="task-inputs">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
              />
              <span>
                <strong>{task.name}</strong> <br />
                📅 {task.date} 🕒 {task.time}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
