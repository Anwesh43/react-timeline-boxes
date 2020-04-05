import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineContainer from './TimelineContainer'


function App() {
  return (
    <div className="App">
      <TimelineContainer texts = {["1st patient in wuhan", "chinese new year", "global outbreak"]}/>
    </div>
  );
}

export default App;
