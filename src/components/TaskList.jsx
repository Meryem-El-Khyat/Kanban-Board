import React from 'react';

function TaskList({ tasks, status, onDragEnd }) {
  // Define separate color arrays for each status
  const colorsByStatus = {
    'to-do': ['#FCFE19', '#87FF00', '#f79bbe', '#f6b430','#21DAFF'],      // Colors for To Do
    'in-progress': ['#FCFE19', '#87FF00', '#f79bbe', '#f6b430','#21DAFF'], // Colors for Doing
    'done': ['#FCFE19', '#87FF00', '#f79bbe', '#f6b430','#21DAFF']        // Colors for Done
  };

  // Select colors array based on the status
  const colors = colorsByStatus[status] || ['#E0E0E0']; // Default gray if no match

  return (
    <div>
      {tasks
        .filter(task => task.status === status)
        .map((task, index) => (
          <div
            key={task.id}
            className="card mb-2"
            draggable
            onDragStart={(e) => e.dataTransfer.setData('taskId', task.id)}
            style={{
              cursor: 'move',
              color:"#000",
              backgroundColor: colors[index % colors.length] // Cycle through colors for the status
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TaskList;
