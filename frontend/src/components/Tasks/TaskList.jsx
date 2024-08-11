import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (error) {
      alert('Error fetching tasks');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskForm refreshTasks={fetchTasks} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} refreshTasks={fetchTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
