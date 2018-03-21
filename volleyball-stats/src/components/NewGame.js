import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router-dom'
import { Row, Input } from 'react-materialize'

class NewGame extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div>

          <p className="gameheader">New Game</p>
          <div>
            <Row className='gameinput'>

    <Input className ='ngame' label="Opponent" />
  </Row>
  <Row className='gameinput'>
  <Input label= 'Date' name='on' type='date' onChange={function(e, value) {}} />
</Row>

            <div>
            <Link to='/Start' className="tolinks" ><button className='selectPlayer'>Submit</button></Link>
            </div>
          </div>

      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default NewGame
