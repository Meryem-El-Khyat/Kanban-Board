import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setShowAddTask(false);
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  const countTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status).length;
  };

  return (
    <div className="container mt-5" >
      <div className="row" >
        <div className="col-md-4 mb-4">
          <button
            className="btn"
            style={{
              backgroundColor: '#f4fbc0',
              color: '#000',
              width: '70%',
              fontWeight: 'bold',
              padding: '12px 0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontSize:'20px',
              border: '4px solid #000'
            }}
            onClick={() => setShowAddTask(true)}
          >
            Ajouter une tâche
          </button>
          {showAddTask && (
            <AddTask onSave={addTask} onCancel={() => setShowAddTask(false)} />
          )}
        </div>

        <div className="col-md-8 d-flex justify-content-between">
          {/* To Do Section */}
          <div
            className="col-md-4 p-3  rounded mb-4"
            style={{
              backgroundColor: '#FAFAFA',
              border: '4px solid #074b98', // Bordure bleue pour "To Do"
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginRight: '20px'
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const id = e.dataTransfer.getData('taskId');
              updateTaskStatus(Number(id), 'to-do');
            }}
          >
            <h4 style={{ color: '#000',
              borderRadius:'30px', 
              backgroundColor:'#f4fbc0',
              border: '4px solid #074b98',
              margin:'5px 40px',
              padding:'5px', 
              width:'120px'
             }}>To Do</h4>
            <TaskList tasks={tasks} status="to-do" onDragEnd={updateTaskStatus} />
            <div className="mt-3 text-center">
              <p style={{ color: '#000', fontWeight: '500', fontSize:'20px' }}>
                {countTasksByStatus('to-do')} tâche{countTasksByStatus('to-do') !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Doing Section */}
          <div
            className="col-md-4 p-3  rounded mb-4"
            style={{
              backgroundColor: '#FAFAFA',
              border: '4px solid #FFA500', // Orange vif pour "Doing"
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginRight: '20px'
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const id = e.dataTransfer.getData('taskId');
              updateTaskStatus(Number(id), 'in-progress');
            }}
          >
            <h4 style={{ color: '#000', 
              borderRadius:'30px', 
              backgroundColor:'#f4fbc0',
              border: '4px solid #FFA500',
              margin:'5px 40px',
              padding:'5px', 
              width:'120px'
            }}>Doing</h4>
            <TaskList tasks={tasks} status="in-progress" onDragEnd={updateTaskStatus} />
            <div className="mt-3 text-center">
              <p style={{ color: '#000', fontWeight: '500', fontSize:'20px' }}>
                {countTasksByStatus('in-progress')} tâche{countTasksByStatus('in-progress') !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Done Section */}
          <div
            className="col-md-4 p-3  rounded mb-4"
            style={{
              backgroundColor: '#FAFAFA',
              border: '4px solid #32CD32', // Vert lime pour "Done"
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const id = e.dataTransfer.getData('taskId');
              updateTaskStatus(Number(id), 'done');
            }}
          >
            <h4 style={{ color: '#000', 
              borderRadius:'30px', 
              backgroundColor:'#f4fbc0',
              border: '4px solid #32CD32',
              margin:'5px 40px',
              padding:'5px', 
              width:'120px' }}>Done</h4>
            <TaskList tasks={tasks} status="done" onDragEnd={updateTaskStatus} />
            <div className="mt-3 text-center">
              <p style={{ color: '#000', fontWeight: '500', fontSize:'20px' }}>
                {countTasksByStatus('done')} tâche{countTasksByStatus('done') !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;
