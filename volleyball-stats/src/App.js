import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import { Spinner } from '@blueprintjs/core'
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
import Start from './components/Start'
import {app, base} from './base'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      loading: true
    }
  }
componentWillMount() {
  this.removeAuthListener = app.auth().onAuthStateChanged((user)=> {
    if(user) {
      this.setState({
        authenticated: true,
        loading: false
      })
    }
    else {
      this.setState({
        authenticated: false,
        loading: false
      })
    }
  })
}
componentWillUnmount() {
  this.removeAuthListener()
}
  render() {

      if(this.state.loading === true) {
        return(
          <div style ={{textAlign: 'center', position: 'absolute', top: '25%', left: '50%'}}>
            <h3>Loading</h3>
            <Spinner />
          </div>
        )
      }

    return (
      <Router>
      <div className="App">
      <Header />
      <Route exact path="/" render={() => (
           <div className='container-fluid'>
             <Splash />
           </div>
         )}/>

      {/* <Signup /> */}
      {/* <NewPlayer /> */}
      {/* <NewSeason /> */}
      <Login />
      {/* <NewGame /> */}
      {/* <Score /> */}
      {/* <Receive /> */}
      {/* <Set /> */}
      {/* <Attack /> */}
      {/* <Dig /> */}
      {/* <Start /> */}

      </div>
    </Router>
      );
  }
}

export default App;
