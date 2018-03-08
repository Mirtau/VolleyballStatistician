import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Splash from './components/Splash'
import Signup from './components/Signup'
import NewPlayer from './components/NewPlayer'
import NewSeason from './components/NewSeason'
import Login from './components/Login'
import NewGame from './components/NewGame'
import Score from './components/Score'
import Serve from './components/Serve'
import Receive from './components/Receive'
import Set from './components/Set'
import Attack from './components/Attack'
import Block from './components/Block'
import Dig from './components/Dig'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      {/* <Splash /> */}
      {/* <Signup /> */}
      {/* <NewPlayer /> */}
      {/* <NewSeason /> */}
      {/* <Login /> */}
      {/* <NewGame /> */}
      {/* <Score /> */}
      {/* <Receive /> */}
      {/* <Set /> */}
      {/* <Attack /> */}
      <Dig />


      </div>
    );
  }
}

export default App;
