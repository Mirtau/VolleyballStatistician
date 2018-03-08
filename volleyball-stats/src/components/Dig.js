import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class Dig extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <h1 className="dig">Dig</h1>
              <RaisedButton label="Dig" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
              <br/>
              <RaisedButton label="Fault" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Dig
