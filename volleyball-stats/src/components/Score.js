import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class Score extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <h1 className="score">Score</h1>
              <RaisedButton label="Serve" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
              <br/>
              <RaisedButton label="Receive" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
              <br/>
              <RaisedButton label="Set" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
              <br/>
              <RaisedButton label="Attack" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
              <br/>
              <RaisedButton label="Block" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
              <br/>
              <RaisedButton label="Dig" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
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
