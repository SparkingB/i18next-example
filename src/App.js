import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          使用 <a href="https://github.com/i18next" target="_blank">i18next</a> 為網站做 Internalization.
        </p>
        <p>請 checkout 到各個 branch 細看不同的實作方式。</p>
      </div>
    );
  }
}

export default App;
