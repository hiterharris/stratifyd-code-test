import React, { Component } from 'react';
import logo from './images/logo.svg';
import Data from './components/Data';
import Table from './components/Table';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Express App</h2>
        </div>
        <Data />
        <Table />
      </div>
    );
  }
}
