import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class Signup extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <h1 className="signup">Sign Up</h1>
            <TextField
              hintText='name'
              floatingLabelText="name"
            /><br />
            <TextField
              hintText='password'
              floatingLabelText="password"
            /><br />
            <TextField
              hintText='re-enter password'
              floatingLabelText="re-enter password"
            /><br />
              <RaisedButton label="Submit" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Signup
