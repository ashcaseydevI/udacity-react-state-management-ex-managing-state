import React, { Component } from 'react';
import logo from './logo.svg';
import Challenge from './Challenge';
import ScoreStatus from './ScoreStatus';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <Challenge value1={value1} value2={value2} value3={value3} proposedAnswer={proposedAnswer} />
          <ScoreStatus numCorrect={numCorrect} numQuestions={numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
