import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

class Block extends Component {
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
            <h1 className="block">Block</h1>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'Block'>Block</button></Link>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'InPlay'>In Play</button></Link>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'touch'>Touch</button></Link>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'blockFault'>Fault</button></Link>
          </div>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
  }
export default Block
