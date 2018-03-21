import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'

class NewPlayer extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
// createNewPlayer = async(method, body, path) => {
//      console.log('here');
//     await fetch ('http://localhost:3001/players', {
//     method: 'POST',
//      body: JSON.stringify(this.playerInput),
//      headers: {
//        "pname": ({playerInput}),
//    }
// })
//   }
// }
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <h1 className='selectplayer'>Select Player</h1>
            <Link to='/NewGame' className="tolinks" ><button className='selectPlayer'>Jenni</button></Link>
            <h1 className="titleplayer">New Player</h1>
            <input className='input' type = 'player'
              ref = {(input) => {this.playerInput = input }}/>
              <Link to='/NewSeason' className='newplayer' ><button className='newplayer'>Create Player</button></Link>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default NewPlayer
