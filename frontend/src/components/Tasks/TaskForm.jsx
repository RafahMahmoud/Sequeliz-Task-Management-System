import React, { useState } from 'react';
import { api } from '../../services/api';

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', { title, description });
      setTitle('');
      setDescription('');
      refreshTasks();
    } catch (error) {
      alert('Error creating task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
