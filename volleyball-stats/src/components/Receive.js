import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

class Receive extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div className="container">
      <div className='box'>
        <MuiThemeProvider>
          <div>
            <h1 className="receive">Receive</h1>
            <button className="links" id = 'Excellent'><Link to="/StatRecorded">Excellent</Link></button>
            <button className="links" id = 'Good'><Link to="/StatRecorded">Good</Link></button>
            <button className="links" id = 'InPlay'><Link to="/StatRecorded">In Play</Link></button>
            <button className="links" id = 'receiveFault'><Link to="/StatRecorded">Fault</Link></button>
          </div>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Receive
