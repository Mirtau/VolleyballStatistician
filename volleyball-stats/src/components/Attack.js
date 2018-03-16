import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

class Attack extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div className="container">
      <div className='box'>
        <MuiThemeProvider>
          <div >
            <h1 className="serve">Attack</h1>
            <button className="links" id = 'kill'><Link to="/StatRecorded">Kill</Link></button>
            <button className="links" id = 'InPlay'><Link to="/StatRecorded">In Play</Link></button>
            <button className="links" id = 'blockFault'><Link to="/StatRecorded">Fault</Link></button>
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
export default Attack
