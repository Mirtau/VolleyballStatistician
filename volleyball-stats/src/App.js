import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Splash from './components/Splash'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Splash />
      </div>
    );
  }
}

export default App;
