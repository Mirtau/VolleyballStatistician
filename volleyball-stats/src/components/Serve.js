import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

class Serve extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <h1 className="serve">Serve</h1>
            <button className="links" id = 'Ace'><Link to="/StatRecorded">Ace</Link></button>
            <button className="links" id = 'InPlay'><Link to="/StatRecorded">In Play</Link></button>
            <button className="links" id = 'ServeFault'><Link to="/StatRecorded">Fault</Link></button>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Serve
