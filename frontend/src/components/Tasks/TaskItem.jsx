import React from 'react';
import { api } from '../../services/api';

const TaskItem = ({ task, refreshTasks }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task.id}`);
      refreshTasks();
    } catch (error) {
      alert('Error deleting task');
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/tasks/${task.id}`, { completed: !task.completed });
      refreshTasks();
    } catch (error) {
      alert('Error updating task');
    }
  };

  return (
    <li>
      <span>{task.title}</span>
      <span>{task.description}</span>
      <button onClick={handleUpdate}>{task.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
