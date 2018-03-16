import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

class Start extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div className='container'>
      <div className='box'>
        <MuiThemeProvider>
          <div>
            <table className="start">
            <h2 className='player'>Jane Smith</h2>
            <h3>fighting figs</h3>
            <h3 className='vs'>vs</h3>
            <h3>Opponent</h3>
            <h3>mm/dd/yyyy</h3>
            </table>
          </div>
              <button className='start' ><Link to='/score'>Start Scoring</Link></button>
        </MuiThemeProvider>
      </div>
    </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Start
