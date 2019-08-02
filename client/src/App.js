import React, { Component } from 'react';
import stratifyd from './images/stratifyd-logo.png';
import Table from './components/Table';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={stratifyd} className="stratifyd-logo" alt="stratifyd-logo" />
          <h2 className="App-title">React Express App</h2>
        </div>
        <Table />
      </div>
    );
  }
}
