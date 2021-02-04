import { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';

function App() {

  return (
    <div className="App">
     
      <h1>Todo App</h1>
      <GoalList/>   
    </div>
  );
}

export default App;
