import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineContainer from './TimelineContainer'


function App() {
  return (
    <div className="App">
      <TimelineContainer n = {3}/>
    </div>
  );
}

export default App;
