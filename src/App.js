import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  return (
    <div style={{ padding: '40px', color:'#000', textAlign:'center' }}>
      <h1>Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
