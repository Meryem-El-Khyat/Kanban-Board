// AddTask.jsx
import React, { useState } from 'react';

function AddTask({ onSave, onCancel }) {
  const [task, setTask] = useState({ title: '', description: '', status: 'to-do' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      onSave(task);
      setTask({ title: '', description: '', status: 'to-do' });
    }
  };

  return (
    <form 
    onSubmit={handleSubmit} 
    className="mb-3" 
    style={{backgroundColor:'#f4fbc0', 
            margin:'22px 0', 
            padding:'20px', 
            borderRadius:'4px',
            border: '4px solid #000'}}>
      <h4 className="text-center" style={{ color: '#000', marginBottom:'20px ' }}>
        <i className="fas fa-plus-circle" style={{ margin: '12px' }}></i> Nouvelle Tâche
      </h4>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          placeholder="Titre"
          className="form-control"
          value={task.title}
          onChange={handleChange}
          required
          style={{ borderColor: '#000', color:'#000', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          placeholder="Description"
          className="form-control"
          value={task.description}
          onChange={handleChange}
          required
          style={{ borderColor: '#000', color:'#000', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
      <div className="mb-3">
        <select
          name="status"
          className="form-control"
          value={task.status}
          onChange={handleChange}
          required
          style={{ borderColor: '#000' , color:'#000', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
        >
          <option value="to-do">To Do</option>
          <option value="in-progress">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn" style={{ backgroundColor: '#30a613', color: '#F5EDED' }}>Enregistrer</button>
        <button type="button" className="btn btn-danger" onClick={onCancel}>Annuler</button>
      </div>
    </form>
  );
}

export default AddTask;