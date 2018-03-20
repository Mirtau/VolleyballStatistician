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
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'Excellent'>Excellent</button></Link>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'Good'>Good</button></Link>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'InPlay'>In Play</button></Link>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'receiveFault'>Fault</button></Link>
          </div>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
  }

export default Receive
