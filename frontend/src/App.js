/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const getBugs = async => {
      fetch('/api/')
        .then(res => res.json())
        .then(data => setBugs(data))
    }
    getBugs();
  }, [])

  return (
    <div className='App-header'>
      <h1>🐜 Current Bugs 🪲</h1>
      {bugs.map((bug, idx) => {
        return <h2 key={idx}>{bug.name}</h2>
      })}
    </div>
  );
}

export default App;
