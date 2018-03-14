import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class Start extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <table className="start">
            <h2 className='player'>Jane Smith</h2>
            <h3>fighting figs</h3>
            <h3 className='vs'>vs</h3>
            <h3>Opponent</h3>
            <h3>mm/dd/yyyy</h3>
            </table>

              <RaisedButton className='start' label="Start" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Start
