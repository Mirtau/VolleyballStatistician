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
import Logout from './components/Logout'
import StatRecorded from './components/StatRecorded'
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
             <Start />
           </div>
         )}/>

      {/* <Signup /> */}
      <Route exact path = "/NewPlayer" component = {NewPlayer} />{/* <NewPlayer /> */}
      <Route exact path = "/NewSeason" component = {NewSeason} />{/* <NewSeason /> */}
      <Route exact path = "/Login" component = {Login} />
      <Route exact path = "/Logout" component = {Logout} />
      <Route exact path = "/NewGame" component = {NewGame} />{/* <NewGame /> */}
      <Route exact path = "/Score" component = {Score} />{/* <Score /> */}
      <Route exact path = "/Receive" component = {Receive} />{/* <Receive /> */}
      <Route exact path = "/Set" component = {Set} />{/* <Set /> */}
      <Route exact path = "/Attack" component = {Attack} />{/* <Attack /> */}
      <Route exact path = "/Dig" component = {Dig} />{/* <Dig /> */}
      <Route exact path = "/Start" component = {Start} />{/* <Start /> */}
      <Route exact path = "/Serve" component = {Serve} />{/* <Start /> */}
      <Route exact path = "/Block" component = {Block} />
      <Route exact path = "/StatRecorded" component = {StatRecorded} />
      </div>
    </Router>
      );
  }
}

export default App;
