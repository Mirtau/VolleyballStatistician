import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class NewSeason extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <h3 className="newseason" >New Season</h3>
            <TextField
              hintText='Date'
              floatingLabelText="Season"
            /><br />
            <TextField
              hintText='Team'
              floatingLabelText="Team"
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
export default NewSeason
