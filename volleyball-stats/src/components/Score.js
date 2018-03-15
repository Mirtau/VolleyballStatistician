import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Redirect } from 'react-router-dom'

class Score extends Component {
constructor(props) {
  super(props)
  this.scoreClick = this.scoreClick.bind(this)
  this.state = {}
}
scoreClick(event) {
  console.log(event);
if(document.getElementById === 'serve') {
  return <Redirect to = '/Serve'/>
}
else if(document.getElementById === 'receive') {
  return <Redirect to = '/Receive'/>
}
else if(document.getElementById === 'set') {
  return <Redirect to = '/Set' />
}
else if(document.getElementById === 'attack') {
  return <Redirect to = '/Attack'/>
}
else if(document.getElementById === 'block') {
  return <Redirect to = '/Block'/>
}
else {
  return <Redirect to = '/Dig'/>
}

}
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <h1 className="score">Score</h1>
              <RaisedButton id = 'serve' label="Serve" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.scoreClick(event)}/>
              <br/>
              <RaisedButton id = 'receive' label="Receive" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.scoreClick(event)}/>
              <br/>
              <RaisedButton id = 'set' label="Set" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.scoreClick(event)}/>
              <br/>
              <RaisedButton id = 'attack' label="Attack" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.scoreClick(event)}/>
              <br/>
              <RaisedButton id = 'block' label="Block" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.scoreClick(event)}/>
              <br/>
              <RaisedButton id = 'dig' label="Dig" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.scoreClick(event)}/>
              <br/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Score
