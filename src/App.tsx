import React, { useEffect } from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>As a manager I want to be able to select a runner from a list and see all her/his appointments</p>
        <Main />
      </header>
    </div>
  );
}

export default App;
